import React from 'react'
import style from './FireWoods.module.css'



const FireWoods = () => {

  return(
    <div className={style.bg}>
      <h1 className={style.title}>Дрова</h1>
      <span className={style.stick}></span>
      <p className={style.text}>Когда топишь камин дровами – наслаждаешься природным теплом.<br/>
        Дрова – самое сбалансированное топливо в плане экологии.<br/>
        Когда сжигают дерево выделяется столько углерода, сколько оно впитало за всю жизнь.<br/>
        Сжигают дерево или оно гниёт – в итоге выделится одинаковое количество углекислого газа.<br/>Использование дров не наносит ущерб окружающей среде.<br/>
        Зола – это отличное удобрение для почвы и комнатных растений.</p>
    </div>
  )
}


export default FireWoods