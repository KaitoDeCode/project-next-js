import Link from 'next/link'
import React, { FormEventHandler } from 'react'

type Props = {
    title: string,
    intro: string,
    children: React.ReactNode,
    onSubmit: FormEventHandler<HTMLFormElement>,
}

const AuthCardContent = (props: Props) => {
    const{
        title,
        intro,
        children,
        onSubmit
    }= props
  return (
    <>
        <h1 className='text-primary font-bold text-3xl'>{title}</h1>
        <p className='mb-4 mt-1 font-light text-base'>{intro}</p>
        <form onSubmit={onSubmit} className='flex flex-col gap-3'>
            {children}
        </form>
    </>
  )
}

export default AuthCardContent