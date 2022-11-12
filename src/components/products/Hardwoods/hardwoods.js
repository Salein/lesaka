import React from "react"
import style from './hardwoods.module.css'
import hardwoods_img from './hardwoods_img.png'



const Hardwoods = () => {

  return(
    <div className={style.wrap}>
      <h1 className={style.title}>Лиственные породы</h1>
      <img src={hardwoods_img} alt='hardwoods' className={style.hardwood} />
      <h4 className={style.minititle}>Берёза, Ольха</h4>
      <p className={style.discription}> Лиственные породы являются наилучшими для топки печей, так как имеют более плотное структурное строение, что значительно увеличивает время их горения с постоянной высокой энергоотдачей.</p>
      <div className={style.price}>Цена: <span>90р</span></div>
    </div>
  )
}

export default Hardwoods