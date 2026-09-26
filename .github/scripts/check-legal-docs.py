#!/usr/bin/env python3
"""
Legal document freshness + placeholder check.

Runs against a PR's diff of the public legal pages (LegalContentBlock
consumers). Two checks, both real, both tied to actual past mistakes in this
epic (see oplytics-marketing-site#172):

1. lastUpdated bump: if a legal page's content changed but its
   `lastUpdated="..."` prop line did NOT change, fail. A page whose
   content changed but whose stated "last updated" date didn't move is a
   real compliance/credibility problem, not just an oversight — and it's
   mechanically checkable because LegalContentBlock requires that prop
   explicitly (see Privacy.tsx: `lastUpdated="1 March 2026"`).
2. Bracket placeholder leftover: fails if a changed legal page still
   contains a `[SOMETHING]`-style placeholder (e.g. `[COMPANY NUMBER]`).
   This exact mistake already happened once during drafting per #172's own
   body ("blank DPA annexes" et al.) — cheap to check on the same diff.

Deliberately narrow: this is not a general content-review bot. It only
looks at whether a "last updated" date moved and whether bracket
placeholders remain — both binary, unambiguous, no false-positive-prone
NLP or judgment calls.
"""
import re
import subprocess
import sys
from typing import Optional

LEGAL_PAGES = [
    "client/src/pages/Privacy.tsx",
    "client/src/pages/Terms.tsx",
    "client/src/pages/CookiePolicy.tsx",
    "client/src/pages/AcceptableUsePolicy.tsx",
    "client/src/pages/DataProcessingAgreement.tsx",
    "client/src/pages/ServiceLevelAgreement.tsx",
]

LAST_UPDATED_RE = re.compile(r'lastUpdated\s*=\s*"[^"]*"')
BRACKET_PLACEHOLDER_RE = re.compile(r"\[[A-Z][A-Z0-9 _-]{2,}\]")


def changed_files(base_sha: str, head_sha: str) -> set[str]:
    out = subprocess.run(
        ["git", "diff", "--name-only", f"{base_sha}...{head_sha}"],
        capture_output=True,
        text=True,
        check=True,
    ).stdout
    return set(out.splitlines())


def file_diff(base_sha: str, head_sha: str, path: str) -> str:
    return subprocess.run(
        ["git", "diff", f"{base_sha}...{head_sha}", "--", path],
        capture_output=True,
        text=True,
        check=True,
    ).stdout


def diff_touches_content_outside_last_updated(diff_text: str) -> bool:
    """True if any added/removed line (excluding diff headers and the
    lastUpdated line itself) represents a real content change."""
    for line in diff_text.splitlines():
        if not (line.startswith("+") or line.startswith("-")):
            continue
        if line.startswith("+++") or line.startswith("---"):
            continue
        content = line[1:]
        if LAST_UPDATED_RE.search(content):
            continue
        if content.strip() == "":
            continue
        return True
    return False


def diff_touches_last_updated(diff_text: str) -> bool:
    for line in diff_text.splitlines():
        if (line.startswith("+") or line.startswith("-")) and not line.startswith(
            ("+++", "---")
        ):
            if LAST_UPDATED_RE.search(line[1:]):
                return True
    return False


def read_file_at(sha: str, path: str) -> Optional[str]:
    result = subprocess.run(
        ["git", "show", f"{sha}:{path}"],
        capture_output=True,
        text=True,
    )
    if result.returncode != 0:
        return None
    return result.stdout


def main() -> int:
    if len(sys.argv) != 3:
        print("usage: check-legal-docs.py <base_sha> <head_sha>", file=sys.stderr)
        return 2

    base_sha, head_sha = sys.argv[1], sys.argv[2]
    touched = changed_files(base_sha, head_sha) & set(LEGAL_PAGES)

    if not touched:
        print("No public legal pages changed — nothing to check.")
        return 0

    failures: list[str] = []

    for path in sorted(touched):
        diff_text = file_diff(base_sha, head_sha, path)

        content_changed = diff_touches_content_outside_last_updated(diff_text)
        date_bumped = diff_touches_last_updated(diff_text)

        if content_changed and not date_bumped:
            failures.append(
                f"{path}: content changed but `lastUpdated` was not bumped. "
                f"If this is a real content change, update the lastUpdated "
                f"date on this page. If it's a non-substantive change "
                f"(typo/formatting only), bump the date anyway — visitors "
                f"and auditors rely on it reflecting the true last edit."
            )

        head_content = read_file_at(head_sha, path)
        if head_content is not None:
            placeholders = sorted(set(BRACKET_PLACEHOLDER_RE.findall(head_content)))
            if placeholders:
                failures.append(
                    f"{path}: unresolved placeholder(s) left in: "
                    f"{', '.join(placeholders)}. Fill these in before merging "
                    f"— this exact mistake shipped once before during drafting "
                    f"(see #172)."
                )

    if failures:
        print("::error::Legal document check failed:")
        for f in failures:
            print(f"  - {f}")
        return 1

    print(f"Legal document check passed for: {', '.join(sorted(touched))}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
