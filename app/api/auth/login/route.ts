import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { AUTH_COOKIE } from "@/lib/auth-config";
import { createSessionToken } from "@/lib/auth-token";
import { findUserByEmail } from "@/lib/user-store";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { email?: string; password?: string };
    const email = String(body.email ?? "").trim();
    const password = String(body.password ?? "");

    if (!email || !password) {
      return NextResponse.json({ message: "Email and password are required." }, { status: 400 });
    }

    const user = await findUserByEmail(email);
    if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
      return NextResponse.json({ message: "Invalid email or password." }, { status: 401 });
    }

    const token = await createSessionToken({
      sub: user.id,
      email: user.email,
      name: user.name
    });

    cookies().set(AUTH_COOKIE, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7
    });

    return NextResponse.json({
      message: "Signed in successfully.",
      user: { email: user.email, name: user.name }
    });
  } catch {
    return NextResponse.json(
      { message: "Sign-in is not configured correctly. Set AUTH_SECRET (32+ characters)." },
      { status: 500 }
    );
  }
}
