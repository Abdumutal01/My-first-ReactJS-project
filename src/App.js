import React from 'react';
import recentImg1 from './img/recentImg1.png';
import recentImg2 from './img/recentImg2.png';
import recentImg3 from './img/recentImg3.png';
import './App.css';

let headerLinks = ["Home ", " Categories ", " About ", " Contact "]
const mainLinks = ["Nature", "Photography", "Relaxation", "Vacation", "Travel", "Adventure"]
// export default App;
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

/*Small list */
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

/* Main start*/
function MainPosts() {
  return (
    <>
      <h2 className='main__title'>Featured Posts</h2>
      <div className='main__postsDiv'>
        <div className='main__postsBox'>

          <h3 className='main__postsTitle'>The Road Ahead</h3>
          <p className='main__postsText'>The road ahead might be paved - it might not be.</p>

          <li className='main__postsItem'>
            <spna className='row'>
              <img className='main__postsUserImg' src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg" />
              Mat Vogels
            </spna>
            <span>
              September 25, 2015
            </span>
          </li>

        </div>
        <div className='main__postsBox'>

          <h3 className='main__postsTitle'>From Top Down</h3>
          <p className='main__postsText'>Once a year, go someplace you’ve never been before.</p>

          <li className='main__postsItem'>
            <spna className='row'>
              <img className='main__postsUserImg' src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg" />
              William Wong
            </spna>
            <span>
              September 25, 2015
            </span>
          </li>

        </div>
      </div>
    </>
  )
}
let color = {
  color:"#7A7A7A"
}
let style = {
  color:"#7A7A7A",
  marginTop:"7px",
  fontSize:"13px"
}

function Recent(props) {
  return (
    <div className='main__recentBox'>

       <img src={props.img} className='main__recentImg' />

      <h3 className='main__recentInner'>{props.inner}</h3>
      <p className='main__postsText' style={style}>{props.text}</p>

      <hr className='main__recentLine' />
      <li className='main__postsItem' style={color}>
        <spna className='row'>
          <img className='main__postsUserImg' src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg" />
          Mat Vogels
        </spna>
        <span>
          September 25, 2015
        </span>
      </li>
    </div>
  )
}

function MainRecent() {
  return (
    <div className='main__recent'>
      <h2 className='main__title'>Most Recent</h2>
      <div className='main__recentDiv'>
        <Recent img={recentImg1} inner='Still Standing Tall' text='Life begins at the end of your comfort zone. Hello' />
        <Recent img={recentImg2} inner='Sunny Side Up' text='No place is ever as bad as they tell you it’s going to be.' />
        <Recent img={recentImg3} inner='Water Falls' text='We travel not to escape life, but for life not to escape us.' />
        <Recent img={recentImg2} inner='Through the Mist' text='Travel makes you see what a tiny place you occupy in the world.' />
        <Recent img={recentImg3} inner='Awaken Early' text='Hello veryone Not all those who wander are lost. ' />
        <Recent img={recentImg1} inner='Try it Always' text='The world is a book, and those who do not travel read only one page.' />
      </div>
    </div>
  )
}

function MainFunc() {
  return (
    <main className='main'>
      <div className='container'>
        <MainPosts />
        <MainRecent />
      </div>
    </main>
  )
}
/* Main end*/
let footerPadding  ={
  padding:"82px 0px 0px"
}

/*footer start*/
function FooterFunc(){
  return(
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
/*footer end*/

export default function App() {
  return (
    <>
      {/* Header start */}
      <HeaderFunc />

      {/* Small list start */}
      <SmallListFunc />

      {/* Main start */}
      <MainFunc />

      {/* Footer start */}
      <FooterFunc />
    </>
  );
}

