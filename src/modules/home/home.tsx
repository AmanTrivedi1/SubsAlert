import Header from '@/shared/widgets/header'
import React from 'react'
import Banner from './elements/banner'
import Pricing from './elements/pricing'

import { BentoGridDemo } from './marketing/page'

const Home = () => {
  return (
    <>
    <div className=" dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center   [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className=''>
            <Header/>
            <Banner/>
            <BentoGridDemo/>
            <Pricing/>
      </div>
    </div>
    
        
    </>
  
  )
}

export default Home
