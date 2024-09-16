import React from 'react';
import './App.css';
import HeaderFunc from './Components/Header/Header';
import SmallListFunc from './Components/SmallList/SmallList'
import Main from './Components/Main/Main';
import FooterFunc from './Components/Footer/Footer';

export default function App() {
  return (
    <>
      {/* Header start */}
      <HeaderFunc />

      {/* Small list start */}
      <SmallListFunc />

      {/* Main start */}
      <Main />

      {/* Footer start */}
      <FooterFunc />
    </>
  );
}

