"use client"
import { theme } from '@/lib/recoil/atom'
import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'

type Props = {
    children : React.ReactNode
}

const AppShell = (props: Props) => {
  const currentTheme = useRecoilValue(theme)  
  return (
    <div data-theme={currentTheme}>
        {props.children}
    </div>
  )
}

export default AppShell