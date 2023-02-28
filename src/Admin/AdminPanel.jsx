import React from 'react'
import style from './AdminPanel.module.css'


const AdminPanel = () => {

    
    return (
        <div className={style.wrapper}>
            <div className={style.wrap}>
                <h1 className={style.title}>Хвойные породы</h1>
                <label className={style.price}>Цена:</label>
                <input type="number" className={style.conifers} />
            </div>
            <div className={style.wrap}>
                <h1 className={style.title}>Лиственные породы</h1>
                <label className={style.price}>Цена:</label>
                <input type="number" className={style.hardwoods} />
            </div>
            <div className={style.wrap}>
                <h1 className={style.title}>Смешанные породы</h1>
                <label className={style.price}>Цена:</label>
                <input type="number" className={style.mixed} />
            </div>
        </div>
    )
}


export default AdminPanel
