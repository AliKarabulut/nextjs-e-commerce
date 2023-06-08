import { NextResponse } from "next/server";

export async function DELETE() {
  let response = NextResponse.next();
  response.cookies.delete("token");
  response.cookies.delete("id");
  return response;
}
