import React from 'react'
import { BiHomeAlt2, BiSolidHomeAlt2 } from "react-icons/bi"
import { ImBooks } from 'react-icons/im'
import { IoIosChatbubbles } from 'react-icons/io'
import { ListSideBarUser } from '..'
import { ListSidebarItem } from '../elements'

type Props = {
    // children: React.ReactNode
}

const Drawer = (props: Props) => {

    const{
        // children
    }=props


  return (
<div className="drawer z-[100000]">
    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
   
    <div className="drawer-side">
      <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
      <ListSideBarUser>
        {
          listSideBar.map((data,index)=>(
            <ListSidebarItem key={index} icon={data.icon} href={data.href} text={data.text} />
          ))
        }
      </ListSideBarUser>
    </div>
  </div>
  )
}

const listSideBar = [
  {
    href : '/user/dashboard',
    text : 'Dashboard',
    icon : <BiSolidHomeAlt2 />
  },
  {
    href : '/user/courses',
    text : 'Course',
    icon : <ImBooks />
  },
  {
    href : '/user/topics',
    text : 'Topic',
    icon : <IoIosChatbubbles  />
  },
]

export default Drawer