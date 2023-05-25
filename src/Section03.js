import React from 'react'

function Section03() {
  return (
    <div
      className='w-full  aspect-video bg-cover bg-center bg-no-repeat py-1 md:py-6 relative'
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL +'/images/section_bg.png'})`,
      }}
    >
      <div className='flex items-center  justify-between pl-5 py-5 md:pl-14 md:py-14  gap-20'>
        <div className='w-4/12 '>
          <img src={process.env.PUBLIC_URL+'/images/section03_title.png'} alt="" className='w-full' data-aos="fade-up" data-aos-duration="500"/>
        </div>
        <div className='w-8/12'>
          <img src={process.env.PUBLIC_URL+'/images/section03_p01.png'} alt="" className='w-full' data-aos="fade-up" data-aos-duration="500" data-aos-delay="500"/>
        </div>
      </div>
    </div>
  )
}

export default Section03