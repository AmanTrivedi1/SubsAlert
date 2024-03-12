"use client"
import Home from '@/modules/home/home'
import {MovingCardLeft} from "../modules/home/marketing/movingCard"
import {MovingcardRight} from "../modules/home/marketing/movingCardRight"
import React from 'react'
import Footer from '@/shared/widgets/footer'


const Page = () => {
  return (
    <div>
      <Home/>
      <div className='bg-black   bg-dot-white/[0.2]  relative flex items-center justify-center'>
       <div className='max-w-6xl m-auto '>
        <h1 className='text-white  mb-4 md:text-4xl sm:text-3xl text-2xl'>What people think about us</h1>
           <MovingCardLeft/>
           <MovingcardRight/>
           <Footer/>
        </div>
       </div>
   
    </div>

  )
}

export default Page
