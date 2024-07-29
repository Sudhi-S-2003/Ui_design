import React from 'react'
import formimg from '../assest/assets/celeb.png'
function Form() {
  return (
    <div className='block items-center justify-evenly sm:flex '>
        <form action="" className='w:[50%] sm:w-[100%]  m-10'>
        <h1 className='text-blue-500 text-4xl mb-3 '>Unlock Exclusive Benefits</h1>

            <div >
                <label htmlFor="">Phone number</label>
                <div className='flex gap-3'>
                <input type="text" placeholder='+91 india' className='border border-black rounded-xl w-[50%]'/>
                <input type="text" placeholder='9777766688' className='border border-black rounded-xl w-[50%]' />
                </div>
                <div>
                <label htmlFor="">Name</label>
                
                <input type="text" className='border border-black rounded-xl w-[100%]' />
                </div>
                <div>
                <label htmlFor="">Email(OPTIONAL)</label>
                
                <input type="text" className='border border-black rounded-xl w-[100%]' />
                </div>
              <button className='bg-blue-700 w-[100%] rounded-xl mt-6 text-white'> continue</button>
              <p>  Get ready to receive a secret code(OTP) on Your Phone</p>
            </div>
        </form>
        <img src={formimg} alt="" className='sm:w-[50%] xs:w-[100%]' />
    </div>
  )
}

export default Form