import Image from 'next/image'
import React from 'react'
import logo from '@/assets/cg-logo.jpg'

const Nav = () => {
  return (
    <section className='flex justify-between px-8 md:px-20 items-center pt-6'>
        <div>
            <Image src={logo} alt='cg-logo' width={70}  />
        </div>

        <div>
            <ul className='flex gap-6 items-center text-white font-semibold'>
                <li>Home</li>
                <li>About Us</li>
                <li>Gallery</li>
                <li>Contact Us</li>
                <button className='px-6 py-3 bg-sky-500'>Donate Now</button>
                
            </ul>
        </div>
      
    </section>
  )
}

export default Nav
