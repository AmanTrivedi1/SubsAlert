import Header from '@/shared/widgets/header'
import React from 'react'
import Banner from './elements/banner'
import Pricing from './elements/pricing'


const Home = () => {
  return (
    <>
    <div className="h-full w-full dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className='md:pt-4 pt-1'>
       <Header/>
       <Banner/>
       <Pricing/>
      </div>
     
    </div>
    
        
    </>
  
  )
}

export default Home
