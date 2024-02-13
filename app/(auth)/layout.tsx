import React from 'react'

type Props = {
    children : React.ReactNode
}

const AuthLayout = (props: Props) => {
  return (
    <div className='min-h-screen w-full flex'>
        {props.children}
    </div>
  )
}

export default AuthLayout