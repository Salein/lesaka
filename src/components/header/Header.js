import React from "react"
import style from './Header.module.css'


const Header = () => {


  return(
    <div className={style.Header}>
      <h2 className={style.h2}>ЧПУП ​​​"ЛЕСАКА"</h2>
      <p className={style.p}>Дзержинский район <br/> д.Станьково, ул. Войсковая 4</p>
      <ul className={style.contacts}>
        <li>lesaka212525@gmail.com</li>
        <li>+375 (29) 772 62 50</li>
        <li>+375 (29) 768 86 54</li>
      </ul>
    </div>
  )
}

export default Header