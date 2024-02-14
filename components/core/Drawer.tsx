import React from 'react'
import { BiHomeAlt2 } from "react-icons/bi"

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
      <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
      
    </ul>
        {/* {children} */}
    </div>
  </div>
  )
}

export default Drawer