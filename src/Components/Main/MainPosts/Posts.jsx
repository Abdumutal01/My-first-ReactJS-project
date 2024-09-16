import React from 'react';
import '../Main.css'
import './Posts.css';

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

export default MainPosts;
