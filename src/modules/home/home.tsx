import Header from '@/shared/widgets/header'
import React from 'react'
import Banner from './elements/banner'
import Pricing from './elements/pricing'
import Footer from '@/shared/widgets/footer'



const Home = () => {
  return (
    <>
   <div className="h-full w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
      
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className='max-w-7xl m-auto p-2 '>
            <Header/>
            <Banner/>
            <Pricing/>
            <Footer/>
      </div>
       </div>
    </>
  
  )
}

export default Home
