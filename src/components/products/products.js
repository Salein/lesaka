import React from 'react'
import Conifers from './Conifers/conifers'
import Hardwoods from './Hardwoods/hardwoods'
import Mixed from './Mixed/mixed'
import style from './products.module.css'


const Products = () => {

  return(
    <div className={style.products}>
      <Hardwoods />
      <Conifers />
      <Mixed />
    </div>
  )
}

export default Products