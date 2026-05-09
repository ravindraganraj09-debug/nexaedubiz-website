import { SignJWT, jwtVerify } from "jose";
import { getAuthSecretBytes } from "@/lib/auth-config";

export type SessionPayload = {
  sub: string;
  email: string;
  name?: string;
};

export async function createSessionToken(payload: SessionPayload): Promise<string> {
  return new SignJWT({
    email: payload.email,
    name: payload.name ?? ""
  })
    .setProtectedHeader({ alg: "HS256" })
    .setSubject(payload.sub)
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(getAuthSecretBytes());
}

export async function verifySessionToken(token: string): Promise<SessionPayload | null> {
  let secret: Uint8Array;
  try {
    secret = getAuthSecretBytes();
  } catch {
    return null;
  }
  try {
    const { payload } = await jwtVerify(token, secret, {
      algorithms: ["HS256"]
    });
    const sub = payload.sub;
    if (!sub) return null;
    return {
      sub,
      email: String(payload.email ?? ""),
      name: payload.name ? String(payload.name) : undefined
    };
  } catch {
    return null;
  }
}
