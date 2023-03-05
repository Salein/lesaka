import React from 'react'
import conifers_img from './conifers_img.png'
import style from './conifers.module.css'


const Conifers = () => {

  return(
    <div className={style.wrap}>
      <div className={style.title}>Хвойные породы</div>
      <img src={conifers_img} alt='conifers' className={style.conficers} />
      <div className={style.minititle}>Ель, Сосна</div>
      <p className={style.discription}>Выделяются не только эфирные масла, но и смолы, которые идеально влияют на воздух в бане и способствуют оптимальной атмосфере внутри парилки.</p>
      <div className={style.price}>Цена: <span className={style.sum}>60р</span></div>
    </div>
  )
}

export default Conifers