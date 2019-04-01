import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import { Header } from '../Fixed/Header';
import { Footer } from '../Fixed/Footer';
import { Content } from '../Fixed/Content';
import './Page.styl'
export const Page = () => (
  <BrowserRouter>
    <div className={'main-container'}>
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </div>
  </BrowserRouter>
)