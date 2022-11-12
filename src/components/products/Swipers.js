import React from "react"
import Hardwoods from "./Hardwoods/hardwoods"
import Conifers from "./Conifers/conifers"
import Mixed from "./Mixed/mixed"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import { useMediaQuery } from 'react-responsive'
import style from './products.module.css'
import 'swiper/css/bundle'



const Swipers = () => {

  const isMobile = useMediaQuery({ query: '(max-width: 500px)' })

    return(
        <>
        <Swiper
      modules={[Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
>
      <SwiperSlide className={style.hardwoods}>{isMobile && <Hardwoods />}</SwiperSlide>
      <SwiperSlide className={style.conifers}>{isMobile && <Conifers />}</SwiperSlide>
      <SwiperSlide className={style.mixed}>{isMobile && <Mixed />}</SwiperSlide>
      ...
    </Swiper>
        </>
    )
}

export default Swipers