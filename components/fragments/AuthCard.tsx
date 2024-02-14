import Image from 'next/image'
import React from 'react'


type Props = {
    children : React.ReactNode,
    imgUrl : string
}

const AuthCard = (props: Props) => {
  return (
    <div className='m-auto flex'>
        <div className='rounded-lg'>
            <Image className='object-cover' width={300} height={200} src={props.imgUrl} alt='img auth'/>
        </div>
        <div>
            {props.children}
        </div>
    </div>
  )
}

export default AuthCard