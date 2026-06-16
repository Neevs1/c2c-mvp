import { NextRequest, NextResponse } from "next/server";
import { verifyToken, COOKIE_NAME } from "@/lib/session";

export async function GET(request: NextRequest) {
  const token = request.cookies.get(COOKIE_NAME)?.value;

  if (!token) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const session = await verifyToken(token);

  if (!session) {
    // Token is invalid or expired — clear the stale cookie
    const response = NextResponse.json(
      { error: "Invalid session" },
      { status: 401 }
    );
    response.cookies.delete(COOKIE_NAME);
    return response;
  }

  return NextResponse.json({
    userId: session.userId,
    email: session.email,
    name: session.name,
    college: session.college,
  });
}
