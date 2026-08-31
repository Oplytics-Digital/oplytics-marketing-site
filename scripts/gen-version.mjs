/**
 * Build-time version stamp for the (static, Cloudflare Pages) marketing site.
 *
 * Writes client/public/version.json with the internal @pablo2410 package versions
 * that are installed at build time — the versions actually bundled into this deploy.
 * vite copies client/public/* into dist/public, so it is served at /version.json.
 *
 * The portal's Software Version dashboard probes this (falling back from /api/version
 * to /version.json) to show what's genuinely LIVE, not just what main declares.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const TRACKED = ["@pablo2410/shared-ui", "@pablo2410/core-server"];

function installedVersion(pkg) {
  try {
    const pkgJsonPath = path.join(
      root,
      "node_modules",
      ...pkg.split("/"),
      "package.json"
    );
    if (fs.existsSync(pkgJsonPath)) {
      const json = JSON.parse(fs.readFileSync(pkgJsonPath, "utf-8"));
      if (typeof json.version === "string") return json.version;
    }
  } catch {
    /* fall through */
  }
  return null;
}

const packages = {};
for (const pkg of TRACKED) packages[pkg] = installedVersion(pkg);

const out = {
  service: "oplytics-marketing-site",
  packages,
  commit:
    process.env.CF_PAGES_COMMIT_SHA ??
    process.env.GIT_SHA ??
    process.env.COMMIT_SHA ??
    null,
  // No Date.now() at module scope elsewhere, but this is a build script — fine here.
  builtAt: new Date().toISOString(),
};

const publicDir = path.join(root, "client", "public");
fs.mkdirSync(publicDir, { recursive: true });
const dest = path.join(publicDir, "version.json");
fs.writeFileSync(dest, JSON.stringify(out, null, 2) + "\n");
console.log(`[gen-version] wrote ${dest}:`, JSON.stringify(packages));
