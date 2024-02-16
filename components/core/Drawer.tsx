import React from 'react'
import { BiHomeAlt2, BiSolidHomeAlt2 } from "react-icons/bi"
import { ImBooks } from 'react-icons/im'
import { IoIosChatbubbles } from 'react-icons/io'

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
      
      {/* Sidebar content here */}
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    
        {/* {children} */}
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