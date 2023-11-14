"use client"
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Carousel from './components/swiper'
import CardList from './components/cardlist/cardList'
import CardBerita from './components/berita/cardBerita'
import ScrollToTop from 'react-scroll-up'
import { AiOutlineArrowUp } from "react-icons/ai";


const Dashboard = () => {
  useEffect(() => {
     AOS.init({
          duration: 800,
          once: false,
        })
  }, [])
  return (
    <>
    
    <div data-aos="zoom-in">
      
      <Carousel/>
      <CardList/>
      <CardBerita/>
    </div>
    <ScrollToTop showUnder={160}>
        <div className=' bg-blue-300 p-3 rounded-full'> <AiOutlineArrowUp/></div>
    </ScrollToTop>

    </>
  )
}

export default Dashboard
