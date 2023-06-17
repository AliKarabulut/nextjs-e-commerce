import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = new URL(request.url);
  const cookie = request.cookies.get("id");

  if (pathname === "/logout") {
    const response = NextResponse.redirect(new URL("/", request.url));
    response.cookies.delete("id");
    response.cookies.delete("token");
    return response;
  }
}

export const config = {
  matcher: ["/logout", "/account"],
};
