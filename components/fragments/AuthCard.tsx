import Image from 'next/image'
import React from 'react'


type Props = {
    children : React.ReactNode,
    imgUrl : string
}

const AuthCard = (props: Props) => {
  return (
    <div className='m-auto'>
        <div>
            <Image src={props.imgUrl} alt='img auth'/>
        </div>
        <div>
            {props.children}
        </div>
    </div>
  )
}

export default AuthCard