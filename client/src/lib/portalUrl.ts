/**
 * The Portal address. Production unless the server injected a
 * <meta name="portal-url"> tag (the sandbox sets PORTAL_URL).
 */
const PRODUCTION_PORTAL_URL = "https://portal.oplyticsdigital.net";

export function getPortalUrl(): string {
  if (typeof document === "undefined") return PRODUCTION_PORTAL_URL;
  const configured = document
    .querySelector('meta[name="portal-url"]')
    ?.getAttribute("content");
  return configured || PRODUCTION_PORTAL_URL;
}
