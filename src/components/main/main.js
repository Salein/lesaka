import React from "react"
import style from './main.module.css'
require('typeface-roboto')


const Main = () => {

  return(
    <div className={style.main}>
      <div className={style.wrap}>
        <div>
          <h2 className={style.h2}>ЧПУП ​​​"ЛЕСАКА"</h2>
          <p className={style.p}>Дзержинский район <br/> д.Станьково, ул. Войсковая 4</p>
        </div>
        <div>
          <ul className={style.contacts}>
            <li>lesaka212525@gmail.com</li>
            <li>+375 (29) 772 62 50</li>
            <li>+375 (29) 768 86 54</li>
          </ul>
        </div>
      </div>
      <h1 className={style.title}>ДРОВА <br/> колотые</h1>
      <p className={style.miniTitle}>Реализуем доставку дров Минск, Минский и Дзержинский районы</p>
    </div>
  )
}

export default Main