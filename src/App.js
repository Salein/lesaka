import React from 'react'
import style from './App.module.css'
import Main from './components/main/main';
import Header from './components/header/Header';
import About from './components/about_us/about'

function App() {
  return (
    <div className={style.app}>
      <Header />
      <Main />
      <About />
    </div>
  );
}

export default App;
