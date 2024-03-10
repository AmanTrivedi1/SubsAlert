import Image from 'next/image'
import RotatingChakrs from "../../../assets/RotatingChakra.svg"
import React from 'react'

const Banner = () => {
  return (
    <>
   <div className='text-white  flex max-w-4xl gap-y-4 m-auto items-center justify-center flex-col  pt-32'>
         <div className='flex flex-col items-center gap-y-4'>
             <h1 className='md:text-4xl text-2xl font-bold z-50  text-center '>Stay Informed with our alert tool that let you informed every subscriber that you get on your blog or any webapp</h1>
             <p className='text-zinc-300 text-center'>We are made a tool that you can attach in your website which help you to know how many subscriber your webapp have we work ina two way you can directly user our dashboard or you can work wiht the api that we are offering.</p>
         </div>
         <div className='flex items-center gap-x-4'>
            <button className='bg-white text-xs z-50 text-black px-8 py-3 rounded-lg  md:text-base'>Browse Features</button>
            <button className=' text-white z-50 border text-xs border-white  px-8 py-[11px] rounded-lg md:text-base'>Custom Features</button>
         </div>
         <div className='mt-2'>
         </div>
           <Image className='absolute  md:top-20 top-28 spin-slow hover:animate-spin cursor-pointer md:left-1/4 left-4 ' src={RotatingChakrs} width={50} height={100} alt="image"/>            
    </div>
    </>
   
  )
}

export default Banner
