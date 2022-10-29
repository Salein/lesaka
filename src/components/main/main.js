import React from "react"
import style from './main.module.css'
require('typeface-roboto')


const Main = () => {

  return(
    <div className={style.main}>
      <h1 className={style.title}>ДРОВА <br/> колотые</h1>
      <p className={style.miniTitle}>Реализуем доставку дров Минск, Минский и Дзержинский районы</p>
      <span className={style.stick}></span>
    </div>
  )
}

export default Main