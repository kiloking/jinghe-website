import React from 'react'

function Section05() {
  return (
    <div
    className='w-full  aspect-video bg-cover bg-center bg-no-repeat py-6 relative'
    style={{
      backgroundImage: `url(${process.env.PUBLIC_URL +'/images/section_bg.png'})`,
    }}
    >
      <div className='flex items-center  justify-between p5  md:p-14   gap-20'>
        <div className='w-6/12'>
          <img src={process.env.PUBLIC_URL+'/images/section05_p01.png'} alt="" className='w-full' data-aos="fade-up" data-aos-duration="500" data-aos-delay="500"/>
        </div>
        <div className='w-6/12 '>
          <img src={process.env.PUBLIC_URL+'/images/section05_title.png'} alt="" className='w-full' data-aos="fade-up" data-aos-duration="500"/>
        </div>

      </div>
    </div>
  )
}

export default Section05