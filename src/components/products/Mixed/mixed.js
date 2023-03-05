import React from 'react'
import mixed_img from './mixed_img.png'
import style from './mixed.module.css'


const Mixed = () => {

  return(
    <div className={style.wrap}>
    <div className={style.title}>Смешанные породы</div>
    <img src={mixed_img} alt='firewoods' className={style.mixed} />
    <p className={style.discription}>Смешанные дрова изготавливаются из лиственных и хвойных пород древесины. Древесина является оптимально (умеренно) просушенной, что обеспечивает быстрый розжиг, равномерное горение.</p>
    <div className={style.price}>Цена: <span className={style.sum}>70р</span></div>
  </div>
  )
}

export default Mixed