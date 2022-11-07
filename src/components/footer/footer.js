import React from "react"
import style from './footer.module.css'
require('typeface-roboto')


const Footer = () => {

    return(
        <div className={style.bg}>
            <ul>
                <li className={style.title}>ЧПУП ​​​"ЛЕСАКА"</li>
                <li className={style.unp}>УНП<br/>690782439</li>
            </ul>
            <ul>
                <li className={style.title}>Режим работы</li>
                <li className={style.list}>Пн-Вск 8:00-21:00</li>
                <li className={style.list}>Беларусь, Минская область<br/>
                    Дзержинский район<br/>
                    Станьково, Войсковая 4</li>
            </ul>
            <ul>
                <li className={style.title}>Контактная информация</li>
                <li className={style.list}>+375 (29) 772 62 50</li>
                <li className={style.list}>+375 (29) 768 86 54</li>
                <li className={style.list}>lesaka212525@gmail.com</li>
            </ul>
        </div>
    )
}


export default Footer