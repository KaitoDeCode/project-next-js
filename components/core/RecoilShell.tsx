import {RecoilRoot} from "recoil"
type Props = {
    children : React.ReactNode
}

const RecoilShell = (props: Props) => {
  return (
    <RecoilRoot>
        {props.children}
    </RecoilRoot>
  )
}

export default RecoilShell