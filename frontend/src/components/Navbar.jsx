import React, { useState } from 'react'
import { assets } from '../assets/assets'   
import { Link , NavLink } from 'react-router-dom'



const Navbar = () => {
  const [visible, setVisible] = useState(false);
  return (
   
    
  <div className="w-full p-4 bg-pink-100 text-gray-600">
         <div className='mb-4 flex justify-center'>
          <h1 className='text-2xl font-bold text-gray-700'>ClayTopia</h1>
          </div>     

      <div className="flex items-center justify-between">
        <img src={assets.logo} alt="Logo" className="h-20 w-20" />  
      
       <ul className='hidden sm:flex gap-5 text-sm justify-center text-gray-700'>
        <NavLink className='flex flex-col items-center gap-1 hover:text-gray-900 ' to='/'>
          <p>HOME</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink className='flex flex-col items-center gap-1  hover:text-gray-900' to='/collection'>
          <p>COLLECTION</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink className='flex flex-col items-center gap-1  hover:text-gray-900' to='/about'>
          <p>ABOUT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink className='flex flex-col items-center gap-1  hover:text-gray-900' to='/contact'>
          <p>CONTACT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
      </ul>
       
       
        <div className='flex items-center gap-4'>
         
          <img src={assets.searchicon} alt="Search Icon" className='h-8 w-8 cursor-pointer' />
         
         <Link  to='/cart' className='relative'>
          <img src={assets.cart} alt="Cart Icon" className='h-8 w-8 ' />
            <p className='absolute bottom-0 right-0 w-4 h-4 flex items-center justify-center text-center leading-4 bg-gray-800 text-white rounded-full text-[10px]'>
              10
            </p>
          </Link>
         
         <div className='group relative'>
                  <img src={assets.profile} alt="Profile Icon" className='h-9 w-9 cursor-pointer' />
                  <div className='group-hover:block hidden absolute dropdown-menu right-0  pt-4'>
                    <div className='flex flex-col  text-gray-500 text-lg'>
                      <p className='cursor-pointer hover:text-black'>My Profile</p>
                       <p className='cursor-pointer hover:text-black'>Orders</p>
                  
                      <p className='cursor-pointer hover:text-black'>Logout</p>

                    </div>                    
                    </div>
         </div>
         <img onClick={()=> setVisible(true) } src={assets.menu} alt='Menu Icon' className='h-8 w-8 cursor-pointer sm:hidden' />
        </div>
           {/* Side bar navigation for mobile screen */}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white shadow-lg transition-all ${visible ? 'w-3/5' : 'w-0'}`}>
        <div className='flex flex-col gap-2  py-3 px-5  rounded text-gray-500 '>
          <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 text-gray-700 cursor-pointer hover:bg-gray-200 rounded'>
            <img className='h-7 w-7 rotate-90' src={assets.dropdown_icon} alt='Close Menu'  />
            <p>Go back</p>
          </div>
         <NavLink className='py-2 pl-6 border-b' to='/' onClick={() => setVisible(false)}>HOME</NavLink>
         <NavLink className='py-2 pl-6 border-b' to='/collection' onClick={() => setVisible(false)}>COLLECTION</NavLink>
         <NavLink className='py-2 pl-6 border-b' to='/about' onClick={() => setVisible(false)}>ABOUT</NavLink>
         <NavLink className='py-2 pl-6 border-b' to='/contact' onClick={() => setVisible(false)}>CONTACT</NavLink>
        </div>
      </div>
      
    </div>
      </div>
  )
}

export default Navbar