import React from 'react'
import Navbar from './Navbar';
import Slider from './slider';
import img from '../bg.png';

function Home() {
  return (
    <>
    <div className=' w-full  overflow-hidden flex flex-col justify-start items-start  bg-gradient-to-r from-indigo-300 from-10% via-sky-400 via-30% to-emerald-300 to-90% ...' style={{height: '550px'}}>
        <div className='w-full h-auto flex flex-col'>
          <Navbar />
        </div>
        <div className='w-full h-full flex justify-start p-10 items-center'>

        <div className='w-96 h-96'>
          <img src={img} />
        </div>
        <div className='flex flex-col justify-center items-center gap-4 ml-44'>
        <p className='home-qot'>Discover the Fragrance of Elegance</p>
        <p className='qot-cont'>Discover the beauty of fragrance<><br /></> with our collection of premium perfumes.<br /> Immerse yourself in the aroma of luxury and elevate your<br /> style</p>
        <button className='bg-gradient-to-r from-green-400 to-blue-500 p-2 rounded'>Shop Now</button>
        </div>
        </div>
    </div>
    <div className='bg-orange-200'>

            <Slider />
    </div>
    </>
  )
}

export default Home
