"use client"
import Drawer from '@/components/core/Drawer'
import Navbar from '@/components/core/Navbar'
import React from 'react'

type Props = {
    children: React.ReactNode
}

const UserLayout = (props: Props) => {

   
    return (
        <div className='min-h-screen w-full'>
            <Drawer />
            <Navbar/>
            <div className='mt-10'>
                {props.children}
            </div>
        </div>
    )
}

export default UserLayout