/* eslint-disable react-hooks/rules-of-hooks */
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { useCookies } from 'react-cookie'
import { toast } from 'react-toastify'
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const currentUrl = new URL(request.url);

   if(!request.cookies.has('user')){
    return NextResponse.redirect(new URL('/signin', request.url))
  }else{
    
    if(request.nextUrl.pathname.startsWith("/signin") || request.nextUrl.pathname.startsWith("/signup") ){
      return NextResponse.redirect(new URL('/user/dashboard', request.url))
    }else{
      return NextResponse.next()
    }

   }
}

export const config = {
  matcher: [
    '/user/:path*',
    '/signin'
    ],
}