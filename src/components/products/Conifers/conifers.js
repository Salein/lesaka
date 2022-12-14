import React from 'react'
import conifers_img from './conifers_img.png'
import style from './conifers.module.css'



const Conifers = () => {

  return(
    <div className={style.wrap}>
      <h1 className={style.title}>Хвойные породы</h1>
      <img src={conifers_img} alt='conifers' className={style.conficers} />
      <h4 className={style.minititle}>Ель, Сосна</h4>
      <p className={style.discription}>Выделяются не только эфирные масла, но и смолы, которые идеально влияют на воздух в бане и способствуют оптимальной атмосфере внутри парилки.</p>
      <div className={style.price}>Цена: <span>60р</span></div>
    </div>
  )
}

export default Conifers