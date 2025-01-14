import React from 'react'
import { NavLink } from 'react-router-dom'
import build from '../Assets/officebuild.jpg'
const Content = () => {
  return (
    
    <div className='max-w-6xl mx-auto p-4 mt-5'>
            <div className='flex max-md:flex-col gap-10'>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-[#5E0094] font-bold text-4xl max-[798px]:text-2xl'>
                        Coworking Space in <span className='text-[#fb35c5] font-thin' >Delhi</span> & <span className='text-[#fb35c5] font-thin' >Bangalore</span>
                    </h1>
                    <h3 className='text-[#7D00AE] font-semibold text-xl max-[798px]:text-base'>Plug & play shared office space, Private office, Pay per seat, Metro connectivity</h3>
                    <p className='text-[#924f9b] max-[798px]:text-sm text-justify'>
                    If you want to keep all the styling of a particular React-Bootstrap component but switch the component that is 
                    finally rendered (whether it's a different React-Bootstrap component, a different custom component, or a different HTML tag)
                    you can use the as prop to do so.
                    </p>
                    <button className='bg-[#5E0094] p-2 text-white hover:bg-[#7D00AE] duration-700 ease-in-out transition-all'> <NavLink to='/pricing'>See Pricing Details</NavLink></button>
                </div>
                <div className='flex self-center justify-center items-center'>
                    <div className='w-96 max-[380px]:w-72'>
                    <img 
                        className='shadow-[15px_15px_#5E0094] object-cover'
                        src={build} alt='img'/>
                    </div>
                </div>
            </div>        
    </div>
  )
}

export default Content
