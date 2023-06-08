import { NextResponse } from "next/server";

export function middleware(request) {
  const response = NextResponse.redirect(new URL("/", request.url));
  response.cookies.delete("id");
  response.cookies.delete("token");
  return response;
}

export const config = {
  matcher: "/logout",
};
