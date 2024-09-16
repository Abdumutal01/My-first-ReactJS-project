import React from 'react';
import './Header.css';

let headerLinks = ["Home ", " Categories ", " About ", " Contact "]


function HeaderItem() {
    return (
      headerLinks.map((link, index) => (
        <li key={index} className='header__item'>
          <a href="#" className='header__link'>{link}</a>
        </li>
      )))
  }
  
  function HeaderNav(){
    return(
      <nav className='header__nav'>
      <h1 className='header__logo'>Escape.</h1>
  
      <ul className='header__list'>
        <HeaderItem />
      </ul>
    </nav>
    )
  }
  

  function HeaderDiv() {
    return (
      <div className='header__box'>
        <h2 className='header__inner'>Let's do it together.</h2>
        <p className='header__text'>We travel the world in search of stories. Come along for the ride.</p>
        <button className='header__btn'>View Latest Posts</button>
      </div>
    )
  }
  
  function HeaderFunc() {
    return (
      <header className='header'>
        <div className='container'>
          <HeaderNav />
          <HeaderDiv />
        </div>
      </header>
    )
  }



  export default HeaderFunc ;
