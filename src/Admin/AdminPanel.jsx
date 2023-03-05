import React from 'react'
import style from './AdminPanel.module.css'


const AdminPanel = () => {


    return (
        <div>
            <div className={style.wrapper}>
                <div className={style.wrap}>
                    <span className={style.title}>Хвойные породы</span>
                    <div className={style.wr}>
                        <label className={style.price}>Цена:</label>
                        <input type="number" className={style.conifers} />
                    </div>
                </div>
                <div className={style.wrap}>
                    <span className={style.title}>Лиственные породы</span>
                    <div className={style.wr}>
                        <label className={style.price}>Цена:</label>
                        <input type="number" className={style.hardwoods} />
                    </div>
                </div>
                <div className={style.wrap}>
                    <span className={style.title}>Смешанные породы</span>
                    <div className={style.wr}>
                        <label className={style.price}>Цена:</label>
                        <input type="number" className={style.mixed} />
                    </div>
                </div>
            </div>
            <div className={style.flexBtn}>
                <button className={style.btn}>Изменить цены</button>
            </div>
        </div>
    )
}


export default AdminPanel
