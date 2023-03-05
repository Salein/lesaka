import React from "react"
import style from './hardwoods.module.css'
import hardwoods_img from './hardwoods_img.png'



const Hardwoods = () => {

  return(
    <div className={style.wrap}>
      <div className={style.title}>Лиственные породы</div>
      <img src={hardwoods_img} alt='hardwoods' className={style.hardwood} />
      <div className={style.minititle}>Берёза, Ольха</div>
      <p className={style.discription}> Лиственные породы являются наилучшими для топки печей, так как имеют более плотное структурное строение, что значительно увеличивает время их горения с постоянной высокой энергоотдачей.</p>
      <div className={style.price}>Цена: <span className={style.sum}>90р</span></div>
    </div>
  )
}

export default Hardwoods