import React from 'react'
import style from './App.module.css'
import Main from './components/main/main'
import Header from './components/header/Header'
import About from './components/about_us/about'
import Discription from './components/discription/discription'
import Products from './components/products/products'
import Headline from "./components/headline/Headline"
require('typeface-roboto')


function App() {
  
  return (
    <div className={style.app}>
      <Main />
      <Header />
      <About />
      <Discription />
      <h1 className={style.title}>Продукция</h1>
      <Products />
      <Headline />
    </div>
  );
}

export default App;
