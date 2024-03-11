import React from 'react'
import Create from "../../../assets/Create.png"
import Publish from "../../../assets/Publish.png"
import Grow from "../../../assets/gg.jpeg"
import Monetize from "../../../assets/Monetize-2.png"
import Image from 'next/image'
import { Button } from '@nextui-org/react'
const MarketingPage = () => {
  return (
    <>
     <div className=' text-white mt-4 flex flex-col mb-10 md:gap-y-28 gap-y-10 '>
         <div className='flex justify-between  sm:flex-row flex-col gap-x-28 gap-y-5 ' >
          <div className='w-full'>
             <Image src="https://res.cloudinary.com/dmlts9lbk/image/upload/v1710138756/Create_s8nhzm.avif" alt="/"  style={{ height: '100%', width: '100%' }} height={100} width={100} />
          </div>
            <div className='w-full md:mt-10 mt-4'>
              <h1 className='md:text-5xl text-4xl mb-4'>CREATE</h1>
              <p className='md:text-2xl text-xl font-semibold mb-6 '>The most powerful editing and design tools in email.</p>
              <p className='md:text-2xl text-xl mb-6'>Warning: A writing experience unlike anything you've ever experienced - proceed with caution.</p>
              <button className='md:text-2xl text-xl border-white border bg-black px-14 py-2 rounded-lg'>Start Building</button>
            </div>
         </div>

         <div className='flex justify-between   sm:flex-row flex-col gap-x-28 gap-y-5  ' >
          <div className='w-full'>
             <Image src="https://res.cloudinary.com/dmlts9lbk/image/upload/v1710138756/Publish_zkd7fc.avif" alt="/"  style={{ height: '100%', width: '100%' }} height={100} width={100} />
          </div>
            <div className='w-full md:mt-10 mt-4 '>
              <h1 className='md:text-5xl text-4xl mb-4'>PUBLISH</h1>
              <p className='md:text-2xl text-xl font-semibold mb-6 '>Launch the next iconic media brand in minutes. No code needed. Ever.</p>
              <p className='md:text-2xl text-xl mb-6'>World class newsletters and websites - just like the pros.</p>
              <button className='md:text-2xl text-xl border-white border bg-black px-14 py-2 rounded-lg'>Start Writing</button>
            </div>
         </div>


         <div className='flex justify-between   sm:flex-row flex-col gap-x-28 gap-y-5  ' >
          <div className='w-full'>
             <Image src="https://res.cloudinary.com/dmlts9lbk/image/upload/v1710138756/Grow_lkb01t.avif" alt="/"  style={{ height: '100%', width: '100%' }} height={100} width={100} />
          </div>
            <div className='w-full md:mt-10 mt-4 '>
              <h1 className='md:text-5xl text-4xl mb-4'>GROW</h1>
              <p className='md:text-2xl text-xl font-semibold mb-6 '>Use the same suite of tools used by the world’s largest newsletters.</p>
              <p className='md:text-2xl text-xl mb-6'>So effective some would consider it cheating.</p>
              <button className='md:text-2xl text-xl border-white border bg-black px-14 py-2 rounded-lg'>Scale</button>
            </div>
         </div>

         <div className='flex justify-between   sm:flex-row flex-col gap-x-28 gap-y-5  ' >
          <div className='w-full '>
             <Image src="https://res.cloudinary.com/dmlts9lbk/image/upload/v1710138756/Monetize-2_o9byln.avif" alt="/"  style={{ height: '100%', width: '100%' }} height={100} width={100} />
          </div>
            <div className='w-full md:mt-10  mt-4'>
              <h1 className='md:text-5xl text-4xl mb-4'>MONETIZE</h1>
              <p className='md:text-2xl text-xl font-semibold mb-6 '>Like you have a full sales and revenue team on your staff.</p>
              <p className='md:text-2xl text-xl mb-6'>...because you do. You just don't pay them (or need to make small talk).</p>
              <button className='md:text-2xl text-xl border-white border bg-black px-14 py-2 rounded-lg'>Start earning</button>
            </div>
         </div>
     </div> 
    </>
  )
}

export default MarketingPage
