import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from "swiper";
// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
function Section04() {
  const imgs =[
    {image:"section04_p01_1.png"},
    {image:"section04_p01_2.png"},
    {image:"section04_p01_3.png"},
    {image:"section04_p01_4.png"},
    {image:"section04_p01_5.png"},
  ]
  const imgs2 =[
    {image:"section04_p02_1.png"},
    {image:"section04_p02_2.png"},
    {image:"section04_p02_3.png"},
  ]
  return (
    <div
      className='w-full  aspect-video bg-cover bg-center bg-no-repeat py-6 relative'
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL +'/images/section_bg.png'})`,
      }}
    >
      <div className=' absolute -bottom-0 left-1/3 w-1/5 '><img src={process.env.PUBLIC_URL+'/images/section04_c01.png'} alt="" className='w-full' /></div>
      <div className='flex justify-between items-center gap-12 p-5 md:p-14'>
        <div className='w-[40%]  relative'>
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
                      <img src={process.env.PUBLIC_URL+'/images/section04/'+ item.image} alt="" className='w-full' />
                    
                    </SwiperSlide>
                  )
                })
              }
              
          </Swiper>
        </div>
        <div className='w-[50%]  relative'>
          <img src={process.env.PUBLIC_URL+'/images/section04_title1.png'} alt="" className='w-full' data-aos="fade-up" data-aos-duration="500" data-aos-delay="500"/>
        </div>
      </div>
      <div className='flex justify-between items-start gap-12 p-5 md:p-14'>

        <div className='w-[50%]  relative'>
          <img src={process.env.PUBLIC_URL+'/images/section04_title2.png'} alt="" className='w-full' data-aos="fade-up" data-aos-duration="500" data-aos-delay="500"/>
        </div>
        <div className='w-[40%]  relative'>
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
                imgs2.map((item,index)=>{
                  return(
                    <SwiperSlide className=''>
                      <img src={process.env.PUBLIC_URL+'/images/section04/'+ item.image} alt="" className='w-full' />
                    
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

export default Section04