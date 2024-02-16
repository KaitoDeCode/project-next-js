"use client"
import React from 'react'
import { useCookies } from 'react-cookie'


type Props = {}

const ProfilePage = (props: Props) => {
    const [cookie] = useCookies(['user']); 
    const user = cookie.user['data'].user
  return (
    <div className='p-5'>
        <div className='bg-base-200 p-10 flex flex-col items-center'>
        <div className="avatar">
            <div className="w-24 mask mask-squircle">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
        </div>
            <h2>{user.fullName}</h2>
            <p>{user.email}</p>
            <div className="divider"></div> 
            <div className='flex gap-10'>
                <div className='flex flex-col items-center'>
                    <div className='w-10 h-10 bg-primary rounded flex flex-col'>
                        <span className='text-primary-content m-auto'>10</span>
                    </div>
                        <span className='text-primary '>Course</span>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='w-10 h-10 bg-primary rounded flex flex-col'>
                        <span className='text-primary-content m-auto'>10</span>
                    </div>
                        <span className='text-primary '>Session</span>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='w-10 h-10 bg-primary rounded flex flex-col'>
                        <span className='text-primary-content m-auto'>10</span>
                    </div>
                        <span className='text-primary '>course followed</span>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='w-10 h-10 bg-primary rounded flex flex-col'>
                        <span className='text-primary-content m-auto'>10</span>
                    </div>
                        <span className='text-primary '>course followed</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfilePage