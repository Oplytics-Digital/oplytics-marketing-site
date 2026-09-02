#!/usr/bin/env bash
# Container entrypoint: authenticate to Infisical with the machine identity, then
# hand off to `infisical run` which injects this app's secrets as env vars and
# execs the real process.
#
# Auth uses Universal Auth. The CLI reads these from the environment:
#   INFISICAL_UNIVERSAL_AUTH_CLIENT_ID
#   INFISICAL_UNIVERSAL_AUTH_CLIENT_SECRET
#   INFISICAL_API_URL              (EU: https://eu.infisical.com/api)
# and we pass project / env / path explicitly.
#
# If Infisical is unreachable or the identity is misconfigured, we fail loudly
# rather than booting the app with no secrets.
set -euo pipefail

: "${INFISICAL_API_URL:?INFISICAL_API_URL is required}"
: "${INFISICAL_UNIVERSAL_AUTH_CLIENT_ID:?INFISICAL_UNIVERSAL_AUTH_CLIENT_ID is required}"
: "${INFISICAL_UNIVERSAL_AUTH_CLIENT_SECRET:?INFISICAL_UNIVERSAL_AUTH_CLIENT_SECRET is required}"
: "${INFISICAL_PROJECT_ID:?INFISICAL_PROJECT_ID is required}"
: "${INFISICAL_ENV:?INFISICAL_ENV is required}"
: "${INFISICAL_PATH:?INFISICAL_PATH is required}"

echo "[entrypoint] authenticating to Infisical ($INFISICAL_API_URL) ..."
INFISICAL_TOKEN="$(infisical login \
  --method=universal-auth \
  --client-id="$INFISICAL_UNIVERSAL_AUTH_CLIENT_ID" \
  --client-secret="$INFISICAL_UNIVERSAL_AUTH_CLIENT_SECRET" \
  --silent --plain)"
export INFISICAL_TOKEN

echo "[entrypoint] injecting secrets from $INFISICAL_PATH ($INFISICAL_ENV) and starting app ..."
exec infisical run \
  --projectId="$INFISICAL_PROJECT_ID" \
  --env="$INFISICAL_ENV" \
  --path="$INFISICAL_PATH" \
  -- "$@"
