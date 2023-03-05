import React, { useState } from 'react'
import Conifers from './../components/products/Conifers/conifers'
import Hardwoods from './../components/products/Hardwoods/hardwoods'
import Mixed from './../components/products/Mixed/mixed'
import style from './AdminPanel.module.css'


const AdminPanel = () => {

    let [price, setPrice] = useState([
        {conifers: 60},
        {hardwoods: 90},
        {mixed: 70}
    ])

    let [conifers, setConifers] = useState()
    let [hardwoods, setHarwoods] = useState()
    let [mixed, setMixed] = useState()

    const addNewPrice = () => {
        const priceChanged = {
            conifers,
            hardwoods,
            mixed
        }
        setPrice(priceChanged)
        setConifers('')
        setHarwoods('')
        setMixed('')
    }

    return (
        <div className={style.flexBtn}>
            <div className={style.wrapper}>
                <Conifers price={price}/>
                <Hardwoods price={price} />
                <Mixed price={price} />
            </div>
            <input
            value={conifers}
            onChange={e => setConifers(e.target.value)}
            placeholder='Введите цену...'
            className={style.changePrice} />
            <input
             value={hardwoods}
             onChange={e => setHarwoods(e.target.value)}
             placeholder='Введите цену...'
            className={style.changePrice} />
            <input
             value={mixed}
             onChange={e => setMixed(e.target.value)}
             placeholder='Введите цену...'
            className={style.changePrice} />
            <button
            onClick={addNewPrice}
            className={style.btn}>Изменить цену</button>
        </div>
    )
}


export default AdminPanel
