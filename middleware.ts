/* eslint-disable react-hooks/rules-of-hooks */
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { useCookies } from 'react-cookie'
import { toast } from 'react-toastify'
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
   if(!request.cookies.has('user')){
    return NextResponse.redirect(new URL('/signin', request.url))
   }
}

export const config = {
  matcher: [
    '/user/:path*',
    '/signin'
    ],
}