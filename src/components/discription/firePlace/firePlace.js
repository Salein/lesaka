import React from 'react'
import style from './firePlace.module.css'
import stick from './stick.png'
import firePlace from './firePlice_bg.png'
require('typeface-roboto')


const FirePlace = () => {

  return(
    <div className={style.wrap}>
      <img src={firePlace} alt='' className={style.firePlace} />
      <img src={stick} alt='' className={style.stick} />
      <p className={style.text}>Для любого камина, котла, печки или очага очень важное значение играет качество дров. Если использовать дрова, которые были заготовлены или хранились с нарушением правил, это приведёт к плохим показателям теплоотдачи очага. Именно поэтому правильный выбор продавца дров, который может обеспечить наличие качественного товара, считается главной задачей потребителя.</p>
    </div>
  )
}


export default FirePlace