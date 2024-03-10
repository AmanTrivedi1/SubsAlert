import Header from '@/shared/widgets/header'
import React from 'react'
import Banner from './elements/banner'

const Home = () => {
  return (
    <>
      <div className="h-full z-10 w-full bg-black  bg-grid-white/[0.2] relative ">
       <div className="absolute pointer-events-none inset-0   bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
         <div className='max-w-7xl m-auto p-2 '>
            <Header/>
            <Banner/>
         </div>
         
       </div>
    </>
  
  )
}

export default Home
