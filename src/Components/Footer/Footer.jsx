import React from 'react';
import '../Header/Header.css'
import './Footer.css'

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

let footerPadding = {
    padding: "82px 0px 0px"
}

function FooterFunc() {
    return (
        <footer className='footer'>
            <div className='container'>
                <div style={footerPadding}>
                    <h2 className='footer__title'>Stay in Touch</h2>
                    <hr className='footer__line' />
                    <form className='footer__form'>
                        <input type="email" className='footer__inputE' placeholder="Enter your email address" />
                        <input type="button" className='footer__submitBtn' value="Submit" />
                    </form>
                </div>
            </div>
            <div className='footer__listCupe'>
                <div className='container'>
                    <HeaderNav />
                </div>
            </div>
        </footer>
    )
}

export default FooterFunc;