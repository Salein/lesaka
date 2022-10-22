import React from 'react'
import mixed_img from './mixed_img.png'
import style from './mixed.module.css'


const Mixed = () => {

  return(
    <div className={style.wrap}>
    <h1 className={style.title}>Смешанные породы</h1>
    <img src={mixed_img} alt='firewoods' />
    <p className={style.discription}>Смешанные дрова изготавливаются из лиственных и хвойных пород древесины. Древесина является оптимально (умеренно) просушенной, что обеспечивает быстрый розжиг, равномерное горение.</p>
    <span className={style.price}>Цена: 70р</span>
  </div>
  )
}

export default Mixed