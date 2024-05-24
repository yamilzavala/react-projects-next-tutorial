import { NextResponse } from "next/server"

//function to execute before done the request
export function middleware(request) {
    return NextResponse.redirect(new URL('/', request.url))
}

//restrict routes and child routes
export const config = {
    matcher: ['/about/:path*']
}