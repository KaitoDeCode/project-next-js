import Link from 'next/link'
import React from 'react'

type Props = {
    text: string,
    href: string,
    icon: React.ReactNode
}


const ListSidebarItem = (props: Props) => {
  return (
    <li className=''>
        <Link href={props.href}>
            <span className='text-xl'>
                {props.icon}
            </span>     
             {props.text}
        </Link>
    </li>
  )
}

export default ListSidebarItem