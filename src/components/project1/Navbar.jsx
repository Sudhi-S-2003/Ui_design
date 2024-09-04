import React from 'react'
import icon from '../../assest/assets/real-estate-house.png'

function Navbar() {
  return (
    <div className='flex items-center gap-[50%] bg-slate-300'>
      <img src={icon} alt="icon" className='w-[70px]' />
      <h1>Real Estate</h1>
    </div>
  )
}

export default Navbar