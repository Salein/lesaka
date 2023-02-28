import React from 'react'
import style from './AdminPanel.module.css'


const AdminPanel = () => {

    
    return (
        <div>
        <div className={style.wrapper}>
            <div className={style.wrap}>
                <span className={style.title}>Хвойные породы</span>
                <label className={style.price}>Цена:</label>
                <input type="number" className={style.conifers} />
            </div>
            <div className={style.wrap}>
                <span className={style.title}>Лиственные породы</span>
                <label className={style.price}>Цена:</label>
                <input type="number" className={style.hardwoods} />
            </div>
            <div className={style.wrap}>
                <span className={style.title}>Смешанные породы</span>
                <label className={style.price}>Цена:</label>
                <input type="number" className={style.mixed} />
            </div>
        </div>
            <button>Изменить цены</button>
        </div>
    )
}


export default AdminPanel
