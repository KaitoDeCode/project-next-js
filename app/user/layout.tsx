"use client"
import Drawer from '@/components/core/Drawer'
import { theme } from '@/lib/recoil/atom'
import Link from 'next/link'
import React from 'react'
import { BiHomeAlt2,BiSolidMoon, BiSolidSun } from 'react-icons/bi'
import { useSetRecoilState } from 'recoil'

type Props = {
    children: React.ReactNode
}

const UserLayout = (props: Props) => {

    const setTheme = useSetRecoilState(theme)

    function handleLight(){
        setTheme('light')
    }
    function handleDark(){
        setTheme('dark')
    }

    return (
        <div className='min-h-screen w-full'>
            <Drawer />
            <div className="navbar bg-base-300 w-[97%] sticky top-3 mx-auto rounded">
                <div className="flex-1">
                    <div className="drawer-content">
                        {/* Page content here */}
                        <label htmlFor="my-drawer">
                            <a className="btn btn-ghost text-xl">Stupid</a>
                        </label>
                    </div>
                </div>
                <div className="flex-none gap-2">
                    <div className='flex gap-2 justify-center items-center'>
                        <button onClick={handleDark} className='text-3xl'>
                            <BiSolidMoon/>
                        </button>
                        <button onClick={handleLight} className='text-3xl'>
                            <BiSolidSun/>
                        </button>
                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <Link href={'/user/profile'} className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </Link>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='mt-10'>
                {props.children}
            </div>
        </div>
    )
}

export default UserLayout