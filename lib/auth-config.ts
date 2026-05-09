export const AUTH_COOKIE = "nexa_session";

/** HS256 signing key — set AUTH_SECRET (32+ chars) in production. */
export function getAuthSecretBytes(): Uint8Array {
  const secret =
    process.env.AUTH_SECRET ??
    (process.env.NODE_ENV !== "production"
      ? "dev-local-auth-secret-minimum-32-characters!!"
      : "");
  if (!secret || secret.length < 32) {
    throw new Error("AUTH_SECRET must be set to a random string of at least 32 characters.");
  }
  return new TextEncoder().encode(secret);
}
