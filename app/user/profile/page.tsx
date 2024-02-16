"use client"
import { userProfile } from '@/lib/recoil/selector'
import React from 'react'
import { useRecoilValue } from 'recoil'

type Props = {}

const ProfilePage = (props: Props) => {
    const user:any = useRecoilValue(userProfile)
    console.log(user)
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
            <div className='flex'>
                <div className='flex flex-col items-center'>
                    <div className='w-10 h-10 bg-primary rounded flex flex-col'>
                        <span className='text-primary-content m-auto'>10</span>
                    </div>
                        <span className='text-primary '>Course</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfilePage