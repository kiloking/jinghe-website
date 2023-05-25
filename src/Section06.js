import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from "swiper";
// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
function Section06() {
  const imgs =[
    {image:"section06_p01_1.png"},
    {image:"section06_p01_2.png"},
    {image:"section06_p01_3.png"},

  ]
  return (
  <div
    className='w-full  aspect-video bg-cover bg-center bg-no-repeat py-6 relative'
    style={{
      backgroundImage: `url(${process.env.PUBLIC_URL +'/images/section06_bg.png'})`,
    }}
    >
      <div className='flex items-start  justify-between pl-5 py-5 md:pl-14 md:py-14  gap-20'>
        <div className='w-4/12 pt-5 md:pt-16 '>
          <img src={process.env.PUBLIC_URL+'/images/section06_title.png'} alt="" className='w-full' data-aos="fade-up" data-aos-duration="500"/>
        </div>
        <div className='w-[55%]  relative'>
          <Swiper
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              pagination={{
                clickable: true,
              }} 
              modules={[Pagination,Autoplay]}
              autoplay={{delay:2000}}
              centeredSlides={true}
              className='w-full'
            >
              {
                imgs.map((item,index)=>{
                  return(
                    <SwiperSlide className=''>
                      <img src={process.env.PUBLIC_URL+'/images/section06/'+ item.image} alt="" className='w-full' />
                    
                    </SwiperSlide>
                  )
                })
              }
              
          </Swiper>
        </div>

      </div>
    </div>
  )
}

export default Section06