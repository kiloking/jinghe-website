import React from 'react'

function Section07() {
  return (
  <div
    className='w-full  aspect-video bg-cover bg-center bg-no-repeat py-6 relative'
    style={{
      backgroundImage: `url(${process.env.PUBLIC_URL +'/images/section07_bg.png'})`,
    }}
    >
      <div className='flex items-start  justify-between pr-5 py-5 md:pr-14 md:py-14 gap-10  md:gap-20'>
        <div className='w-7/12'>
          <img src={process.env.PUBLIC_URL+'/images/section07_p01.png'} alt="" className='w-full' data-aos="fade-up" data-aos-duration="500" data-aos-delay="500"/>
        </div>
        <div className='w-5/12  pt-5 md:pt-16'>
          <img src={process.env.PUBLIC_URL+'/images/section07_title.png'} alt="" className='w-full' data-aos="fade-up" data-aos-duration="500"/>
        </div>

      </div>
    </div>
  )
}

export default Section07