import Image from 'next/image'
import React from 'react'

type Props = {}

const DashboardUserPage = (props: Props) => {
  return (
    <div className='p-5 rounded-md'>
        <div className='bg-base-200 h-80 w-full flex items-center justify-between'>
          <div className='p-10'>
            <h1 className='text-primary text-4xl font-bold'>Study Club Pelajar Indonesia</h1>
            <p>Explore skillmu dengan teman teman dan lingkungan yang mendukung,
              Pelajari banyak hal bersama sama dan gapai cita citamu demi masa depan cerah bangsa
            </p>
            <div className='flex gap-5'>
              <button className='btn btn-secondary mt-3'>Mulai Belajar</button>
              <button className='btn btn-accent btn-outline mt-3'>Mulai Berdiskusi</button>
            </div>
          </div>
          <Image className='object-cover w-[400] h-full' src="/img/dashImg2.jpg" alt="dashboard img" width={500} height={500} />
        </div>
    </div>
  )
}

export default DashboardUserPage