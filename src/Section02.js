import React from 'react'

function Section02() {
  return (
    <div
    className='w-full  aspect-video bg-cover bg-center bg-no-repeat py-6 relative'
    style={{
      backgroundImage: `url(${process.env.PUBLIC_URL +'/images/section_bg.png'})`,
    }}
    >
      <div className='w-1/2 mx-auto my-20'>
        <img src={process.env.PUBLIC_URL+'/images/section02_title.png'} alt="" className='w-full' data-aos="fade" data-aos-duration="900"/>
      </div>
      <div className='w-10/12 mx-auto grid grid-cols-3 gap-16'>
        <div><img src={process.env.PUBLIC_URL+'/images/section02_p01.png'} alt="" className='w-full' data-aos="fade-up" data-aos-duration="500"/></div>
        <div><img src={process.env.PUBLIC_URL+'/images/section02_p02.png'} alt="" className='w-full' data-aos="fade-up" data-aos-duration="800"/></div>
        <div><img src={process.env.PUBLIC_URL+'/images/section02_p03.png'} alt="" className='w-full' data-aos="fade-up" data-aos-duration="1200"/></div>
      </div>
    </div>
  )
}

export default Section02