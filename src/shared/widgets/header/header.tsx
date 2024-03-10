import React from 'react'
import Logo from './logo'
import NavItems from './nav.items'
import Toolbar from './toolbar'


const Header = () => {
  return (
    <>
      <div className='w-full   top-0 left-0   h-[60px] '>
      <div className='flex items-center justify-between  py-2'>
        <div>
           <Logo/>
         </div>
         <div className='z-50'>
            <NavItems/>
         </div>
         <div className='z-50  '>
           <Toolbar/>
         </div>
      </div>
      </div>
  
      
    </>
  )
}

export default Header
