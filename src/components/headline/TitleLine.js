import React from 'react'
import style from './headline.module.css'
import stick from './stick.png'


const TitleLine = () => {

    return(
        <div className={style.titleLine}>
            <img src={stick} alt='' className={style.topStick} />
            <h5 className={style.title}>О тепле в вашем доме зимой лучше позаботиться заранее!</h5>
            <img src={stick} alt='' className={style.bottomStick} />
        </div>
    )
}


export default TitleLine