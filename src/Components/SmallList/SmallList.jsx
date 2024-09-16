import React from 'react';
import '../Header/Header.css';
import '../Main/Main.css';

/*Small list */
const mainLinks = ["Nature", "Photography", "Relaxation", "Vacation", "Travel", "Adventure"]


function SmallListLinks() {
    return (
      mainLinks.map((link, index) => (
        <li key={index} className='main__item'>
          <a href="#" className='main__links'>{link}</a>
        </li>
      )))
  }
  
  function SmallListFunc() {
    return (
      <div className='container'>
        <ul className='main__list'>
          <SmallListLinks />
        </ul>
      </div>
    )
  }

export default SmallListFunc;