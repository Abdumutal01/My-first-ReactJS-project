import React from 'react';
import recentImg1 from './img/recentImg1.png';
import recentImg2 from './img/recentImg2.png';
import recentImg3 from './img/recentImg3.png';
import '../Main.css'
import './Recent.css';

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


export default MainRecent;