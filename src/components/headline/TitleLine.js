import React from 'react'
import style from './headline.module.css'



const TitleLine = () => {

    return(
        <div>
            <span className={style.topStick}></span>
            <h1 className={style.title}>О тепле в вашем доме зимой лучше позаботиться заранее!</h1>
            <span className={style.bottomStick}></span>
        </div>
    )
}


export default TitleLine