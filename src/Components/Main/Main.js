import React from 'react';
import '../Header/Header.css';
import './Main.css'
import MainPosts from './MainPosts/Posts'
import MainRecent from './Recent/Recent'
const Main = () => {
    return (
        <div className='container'>
            <MainPosts />
            <MainRecent />
        </div>
    );
};



export default Main;