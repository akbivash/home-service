import React from 'react'

const Home = () => {
  return (
    <div className='bg-red-200 relative h-[90vh]'>
      <div className='absolute z-20 top-[50%] translate-y-[-50%] text-xl grid gap-8 place-items-start p-10 lg:p-20'>
<h1 className='text-4xl md:text-8xl font-bold'>Find a Home</h1>
<h1 className=' text-4xl md:text-8xl font-bold'>You'll Love</h1>
<span>Discover a Place You'll Love to Live</span>
<button className='bg-teal-600 px-10 py-2 rounded-sm'>Explore</button>
      </div>

<img src="https://cdn.wallpapersafari.com/27/74/XtkN6u.jpg" alt="" className='w-full object-cover h-[90vh]' />
  <div className='w-full absolute bg-[rgba(0,0,0,0.5)] top-0 left-0 h-[90vh]'></div>
     </div>
  )
}

export default Home