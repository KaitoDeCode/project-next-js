"use client"
import { theme } from "@/lib/recoil/atom"
import {RecoilRoot} from "recoil"
type Props = {
    children : React.ReactNode
}

const RecoilShell = (props: Props) => {

  return (
    <RecoilRoot>
        <div>
            {props.children}
        </div>
    </RecoilRoot>
  )
}

export default RecoilShell