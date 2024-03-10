import Header from '@/shared/widgets/header/header'
import React from 'react'

const Home = () => {
  return (
    <>
      <div className="h-full w-full bg-black z-20  bg-grid-white/[0.2] relative ">
       <div className="absolute pointer-events-none inset-0  bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
         <div className='max-w-7xl m-auto p-2'>
           <Header/>
             <div className='h-[500vh]'></div>
         </div>
         
       </div>
    </>
  
  )
}

export default Home
