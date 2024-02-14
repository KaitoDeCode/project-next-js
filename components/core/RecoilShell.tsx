"use client"
import { theme } from "@/lib/recoil/atom"
import {CookiesProvider} from "react-cookie"
import {RecoilRoot} from "recoil"
type Props = {
    children : React.ReactNode
}

const RecoilShell = (props: Props) => {

  return (
    <RecoilRoot>
        <CookiesProvider>
            {props.children}
        </CookiesProvider>
    </RecoilRoot>
  )
}

export default RecoilShell