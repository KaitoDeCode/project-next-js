"use client"
import { profile, theme } from '@/lib/recoil/atom'
import React from 'react'
import { useCookies } from 'react-cookie'
import { useRecoilState, useRecoilValue } from 'recoil'

type Props = {
    children : React.ReactNode
}

const AppShell = (props: Props) => {
    const [cookies, setCookie, removeCookie] = useCookies(['user']);
    const [user,setUser] = useRecoilState(profile)
    
    // if(user !== cookies['user'].data){
    //   setUser(cookies['user'].data)
    // }
    const currentTheme = useRecoilValue(theme)
    
    
  return (
    <div data-theme={currentTheme}>
        {props.children}
    </div>
  )
}

export default AppShell