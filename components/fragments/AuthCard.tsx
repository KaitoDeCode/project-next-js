import Image from 'next/image'
import React from 'react'
import {motion} from 'framer-motion'

type Props = {
    children : React.ReactNode,
    imgUrl : string
}

const AuthCard = (props: Props) => {
  return (
    <div className='m-auto flex w-[500]'>
        <motion.div 
          initial={{ opacity:0,translateX: -100, }}
          animate={{ opacity:1,translateX: 0, }}
          transition={{ duration: 0.5,delay: 0.1 }}
        className='rounded-lg overflow-hidden w-1/2'>
            <Image className='object-cover w-full' width={300} height={200} src={props.imgUrl} alt='img auth'/>
        </motion.div>
        <motion.div
         initial={{ opacity:0,translateX: -100, }}
         animate={{ opacity:1,translateX: 0, }}
         transition={{ duration: 0.5 }}
        className='bg-base-300 w-1/2 rounded p-2 flex flex-col justify-center items-center'>
            {props.children}
        </motion.div>
    </div>
  )
}

export default AuthCard