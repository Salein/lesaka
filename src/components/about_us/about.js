import React from "react"
import style from './about.module.css'
import stick from './stick.png'
import firewood from './firewood.png'
require('typeface-roboto')


const About = () => {

  

  return(
    <div className={style.about}>
      <img src={stick} alt='' className={style.stick} />
      <div className={ style.aboutUs}>
        <div className={style.content}>
          <h2 className={style.title}>О нас</h2>
          <p className={style.p}>Мы занимаемся заготовкой и доставкой целых и колотых дров больше 11 лет. У нас уже тысячи довольных клиентов, которые рекомендуют нас друзьям и знакомым.
          Мы поставляем исключительно качественную древесину. Доставляем товар автомобилем МАЗ 5551. 
          Главное для нас – это честность с клиентами, сколько покупатель заказал, столько и доставим.</p>
          <p className={style.p}>Если хотите обговорить доставку, длину брёвен и обсудить подробности заказа – звоните нам. За час до приезда вам позвонят, после чего, дрова доставят Вам домой.</p>
          <p className={style.p}>Нам важно качество, за более чем 11 лет каждый из наших покупателей, получил товар в целости и сохранности, 
          а главное вовремя.</p>
        </div>
        <img src={firewood} alt='' className={style.firewoods} />
      </div>
    </div>
  )
}


export default About