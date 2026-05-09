import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { AUTH_COOKIE } from "@/lib/auth-config";

export const dynamic = "force-dynamic";

export async function POST() {
  cookies().delete(AUTH_COOKIE);
  return NextResponse.json({ message: "Signed out." });
}
