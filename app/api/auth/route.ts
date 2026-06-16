import { NextRequest, NextResponse } from "next/server";
import { signToken, COOKIE_NAME } from "@/lib/session";

const BACKEND_URL = "http://127.0.0.1:5000/auth";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Forward credentials to the Express backend
    const backendRes = await fetch(BACKEND_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await backendRes.json();

    if (!backendRes.ok) {
      return NextResponse.json(
        { error: data.message || "Authentication failed" },
        { status: backendRes.status }
      );
    }

    // Sign a JWT with the user data
    const token = await signToken({
      userId: data.userId,
      email: data.userEmail,
      name: data.userName,
      college: data.userCollege ?? null,
    });

    // Set the token as an HttpOnly cookie
    const response = NextResponse.json({ success: true });
    response.cookies.set(COOKIE_NAME, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return response;
  } catch {
    return NextResponse.json(
      { error: "An error occurred during authentication" },
      { status: 500 }
    );
  }
}
