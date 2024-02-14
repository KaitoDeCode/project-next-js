import { toast } from "react-toastify"

type props = {
    e: any,
    url: string,
    config: Object
}

export const handleSubmit= async(props:props)=>{

    const {
        e,
        url,
        config
    }= props

    e.preventDefault()
    const formdata:FormData = new FormData(e.currentTarget)
    const api = process.env.NEXT_PUBLIC_API_URL
      const response = await fetch(`${api}${url}`,config)
      const data = await response.json();
     if(data.status !== 200){
        data.errors.forEach((error:any) => {
          toast.error(error.message)
        });
     }
     toast.success(data.message)
     return data;
  }
  