import React from 'react'

const Donate = () => {
  return (
    <div className='bg-donate-bg bg-fixed mix-blend-overlay bg-cover bg-center '>
      <div className='px-2 md:px-32 py-40 bg-slate-900/70 flex flex-col items-center text-center gap-4'>
        <h2 className='uppercase text-3xl font-bold'>Help an <span className='text-sky-600'>Orphan</span>, Widow or a <span className='text-red-600'>sick person</span> Today</h2>
        <div className='bg-sky-600 h-1 -mt-2 w-32 mx-auto' />

        <p className='px-8'>Orphan Care is committed to helping wounded kids find their place in this world. Our holistic
            approach begins by nurturing orphans in the cradle and ends with them becoming
            interdependent, contributing members of society</p>

            <div className='flex items-center gap-2'>
              <button className='bg-red-600 hover:bg-red-700 px-4 font-semibold py-2.5 rounded-md text-white'>MAKE A DONATION</button>
              <button className='bg-sky-600 uppercase hover:bg-sky-700 px-4 font-semibold py-2.5 rounded-md text-white'>Join Us</button>
            </div>
      </div>
    </div>
  )
}

export default Donate
