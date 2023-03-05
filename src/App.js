import React from 'react'
import style from './App.module.css'
import Main from './components/main/main'
import About from './components/about_us/about'
import Discription from './components/discription/discription'
import Products from './components/products/products'
import TitleLine from "./components/headline/TitleLine"
import Footer from './components/footer/footer'
require('typeface-roboto')


function App() {
  
  return (
    <div className={style.app}>
      <Main />
      <About />
      <Discription />
      <h4 className={style.title}>Продукция</h4>
      <Products />
      <TitleLine />
      <Footer />
    </div>
  );
}

export default App;
