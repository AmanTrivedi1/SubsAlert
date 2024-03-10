import React from 'react'
const Banner = () => {
  return (
    <div className='text-white flex max-w-4xl gap-y-4 m-auto items-center justify-center flex-col  my-32'>
         <div className='flex flex-col items-center gap-y-4'>
             <h1 className='md:text-4xl text-2xl font-bold z-50  text-center '>Stay Informed. Subscribe to Our Newsletter for the Latest News & Updates!</h1>
             <p className='text-zinc-300 text-center'>Get the latest news delivered to your inbox. Stay informed and ahead of the curve. Subscribe now for exclusive updates and insights that matter. Join our community today!</p>
         </div>
         <div className='flex items-center gap-x-4'>
           <button className='bg-white text-xs text-black px-8 py-3 rounded-lg  md:text-base'>Browse Features</button>
           <button className=' text-white border text-xs border-white  px-8 py-[11px] rounded-lg md:text-base'>Custom Features</button>
         </div>
    </div>
  )
}

export default Banner
