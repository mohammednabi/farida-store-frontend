import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function middleware(req: NextRequest) {
  const token = req.cookies.get("credentials");

  if (token) {
    if (
      req.nextUrl.pathname.includes("/login") ||
      req.nextUrl.pathname.includes("/register")
    ) {
      return NextResponse.redirect(new URL("/user", req.url));
    }
  }

  if (!token) {
    if (req.nextUrl.pathname.includes("/user")) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  return NextResponse.next();
}
