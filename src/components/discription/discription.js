import React from 'react'
import style from './discription.module.css'
import FireWoods from './FireWoods/FireWoods'
import FirePlace from './firePlace/firePlace'



const Discription = () => {


  return(
    <div className={style.discription}>
      <FireWoods />
      <FirePlace />
    </div>
  )
}

export default Discription