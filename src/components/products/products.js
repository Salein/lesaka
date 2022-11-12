import React from 'react'
import Conifers from './Conifers/conifers'
import Hardwoods from './Hardwoods/hardwoods'
import Mixed from './Mixed/mixed'
import style from './products.module.css'
import { useMediaQuery } from 'react-responsive'
import Swipers from './Swipers'


const Products = () => {

  const isDesktop = useMediaQuery({ query: '(min-width: 600px)' }) 
  const isMobile = useMediaQuery({ query: '(max-width: 500px)' })
  
  return(
    <div className={style.products}>
      {isDesktop && <Hardwoods />}
      {isDesktop && <Conifers />}
      {isDesktop && <Mixed />}
      {isMobile && <Swipers />}
    </div>
  )
}

export default Products