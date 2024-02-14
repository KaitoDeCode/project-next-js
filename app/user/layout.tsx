import React from 'react'

type Props = {
    children : React.ReactNode
}

const UserLayout = (props: Props) => {
  return (
    <>
        {props.children}
    </>
  )
}

export default UserLayout