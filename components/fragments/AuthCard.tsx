import Image from 'next/image'
import React from 'react'


type Props = {
    children : React.ReactNode,
    imgUrl : string
}

const AuthCard = (props: Props) => {
  return (
    <div className='m-auto flex w-[500]'>
        <div className='rounded-lg overflow-hidden w-1/2'>
            <Image className='object-cover w-full' width={300} height={200} src={props.imgUrl} alt='img auth'/>
        </div>
        <div className='bg-base-300 w-1/2 rounded p-2 flex flex-col justify-center items-center'>
            {props.children}
        </div>
    </div>
  )
}

export default AuthCard