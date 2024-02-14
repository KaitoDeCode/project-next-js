"use client"
import AuthCard from '@/components/fragments/AuthCard'
import AuthCardContent from '@/components/fragments/AuthCardContent'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import { toast } from 'react-toastify'
type Props = {}

function SignInPage({}: Props) {
  const router = useRouter()
  
const handleSubmit= async(e: any)=>{
  e.preventDefault()
  const formdata:FormData = new FormData(e.currentTarget)
  const api = process.env.NEXT_PUBLIC_API_URL
    const response = await fetch(`${api}/login`,{
      method: "POST",
      body: formdata,
      cache: 'no-store'
    })
    const data = await response.json();
    console.log(data.data.token);

    if(data.status == 404){
      toast.info("Your account is not found, create an account")
      router.push('/signup')
    }

    if(data.status != 200){
         data.errors.forEach((error:any) => {
           toast.error(error.message)
         });
    }
  
    localStorage.setItem('access-token',data.data.token)

   router.push('/signin')
   toast.success(data.message)
}

  return (
    <AuthCard imgUrl="/img/technology.jpg">
      <AuthCardContent
      onSubmit={(e)=>handleSubmit(e)}
      title='SignIn'
      intro='Log in first so you can enjoy all the features'
      >
      <label className="input input-bordered flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
          <input name='email' type="text" className="grow" placeholder="Email" />
        </label>

        <label className="input input-bordered flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
          <input name='password' type="password" className="grow"  placeholder='password' />
        </label>

        <button className='btn btn-outline btn-primary mt-5' type="submit">SignIn</button>
        <span className='text-center font-light mt-10'>Dont have an account yet?<Link className='underline text-primary' href={"/signup"}> Sign Up!</Link></span>
      </AuthCardContent>
    </AuthCard>
  )
}

export default SignInPage