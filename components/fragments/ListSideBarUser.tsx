import React from 'react'

type Props = {
    children : React.ReactNode
}

const ListSideBarUser = (props: Props) => {
  return (
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
        {props.children}
    </ul>
  )
}

export default ListSideBarUser