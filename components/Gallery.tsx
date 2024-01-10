import React from 'react'
import gal1 from '../assets/gallery1.jpg'
import gal2 from '../assets/gallery2.jpg'
import gal3 from '../assets/gallery3.jpg'
import gal4 from '../assets/gallery4.jpg'
import gal5 from '../assets/gallery5.jpg'
import gal6 from '../assets/gallery6.jpg'
import gal7 from '../assets/gallery7.jpg'
import gal8 from '../assets/hero-bg1.jpg'
import Image from 'next/image'


const Gallery = () => {
    const pictures = [gal1, gal2, gal3, gal4, gal5, gal6, gal7, gal8]
  return (
    <div className='px-10 md:px-20 py-24 bg-gray-50'>
      <div className='text-black flex flex-col gap-2 justify-center items-center text-center mt-6 mb-14'>
          <h2 className='text-3xl font-bold text-gray-500'>CG Foundation Gallery</h2>
          <p className='text-gray-600'>Enjoy beautiful images of various outreaches we have engaged in over the past 3 years of our operation.</p>
      </div>

      <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-6'>
        {pictures.map((pic, index) => (
            <div key={index}>
                <Image src={pic} className='object-cover shadow-lg w-full h-[200px]' alt='gallery-img' />
            </div>
        ))}
      </div>

      <button className='flex items-center gap-1 text-base px-4 py-2 border text-white my-6 mx-auto rounded-xl bg-sky-700 hover:bg-sky-800'> 
        <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
        </span> 
        <span>View More</span>
      </button>
    </div>
  )
}

export default Gallery
