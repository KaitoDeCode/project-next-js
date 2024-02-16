"use client"
import { userProfile } from '@/lib/recoil/selector'
import React from 'react'
import { useRecoilValue } from 'recoil'

type Props = {}

const ProfilePage = (props: Props) => {
    const user = useRecoilValue(userProfile)
    console.log(user)
  return (
    <div className='p-5'>
        <div className='bg-base-200 p-10'>
            <h1></h1>
        </div>
    </div>
  )
}

export default ProfilePage