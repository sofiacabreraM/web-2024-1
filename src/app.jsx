import React from 'react';
import { Header } from './components/Header/Header';
import { Banner } from './components/Banner/Banner';
import { Info } from './components/info/Info';
import {Footer} from './components/Footer/Footer'
import { Register } from './components/Register/Register';
import { LostItem } from './components/LostItem/LostItem';

export function App() {
  return (
    <div>
    <Header />
    <Banner/>
    <Info />
    <Register />
    <Footer />
    <LostItem />
    
     
      
      
    </div>
  );
}