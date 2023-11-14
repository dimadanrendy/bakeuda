"use client"

import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
  
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import foto1 from '../../../../public/foto1.jpg';
import foto2 from '../../../../public/foto2.jpg';
import foto3 from '../../../../public/foto3.jpg';
import logobakeuda from '../../../../public/logobakeuda.png';
import logo from '../../../../public/logo.png';
import Image from 'next/image';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Carousel = () => {

  

  return (

    <div className='mb-10 min-[365px]:-mr-26 md:mr-0 z-0'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        
        <SwiperSlide>
           <Image src={foto1} alt='fotosq'  />
        </SwiperSlide>
        {/* <SwiperSlide>
           <Image src={foto2} alt='fotosq'  />
        </SwiperSlide>
        <SwiperSlide>
           <Image src={foto3} alt='fotosw'  />
        </SwiperSlide> */}
        <SwiperSlide>
           <Image src={logobakeuda} alt='fotosw'  />
        </SwiperSlide>
        <SwiperSlide>
           <Image src={logo} alt='fotosw'  />
        </SwiperSlide>
      </Swiper>
      </div>
    
  
    


//     <>
//     <div className="carousel rounded-box">
//       <div className="carousel-item">
//         <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" alt="Burger" />
//       </div> 
//       <div className="carousel-item">
//         <img src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" alt="Burger" />
//       </div> 
//       <div className="carousel-item">
//         <img src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" alt="Burger" />
//       </div> 
//       <div className="carousel-item">
//         <img src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" alt="Burger" />
//       </div> 
//       <div className="carousel-item">
//         <img src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" alt="Burger" />
//       </div> 
//       <div className="carousel-item">
//         <img src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" alt="Burger" />
//       </div> 
//       <div className="carousel-item">
//         <img src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" alt="Burger" />
//       </div>
//       <div className="carousel-item">
//         <img src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" alt="Burger" />
//       </div>
//       <div className="carousel-item">
//         <img src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" alt="Burger" />
//       </div>
//       <div className="carousel-item">
//         <img src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" alt="Burger" />
//       </div>
//       <div className="carousel-item">
//         <img src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" alt="Burger" />
//       </div>
//     </div>

//     <div className="carousel w-full">
//       <div id="item1" className="carousel-item w-full">
//         <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" />
//       </div> 
//       <div id="item2" className="carousel-item w-full">
//         <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
//       </div> 
//       <div id="item3" className="carousel-item w-full">
//         <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
//       </div> 
//       <div id="item4" className="carousel-item w-full">
//         <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
//       </div>
//     </div> 
//     <div className="flex justify-center w-full py-2 gap-2">
//       <a href="#item1" className="btn btn-xs">1</a> 
//       <a href="#item2" className="btn btn-xs">2</a> 
//       <a href="#item3" className="btn btn-xs">3</a> 
//       <a href="#item4" className="btn btn-xs">4</a>
//     </div>
// </>
  )
}

export default Carousel;
