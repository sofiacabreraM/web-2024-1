import React from 'react';
import { Header } from './components/Header/Header';
import { Banner } from './components/Banner/Banner';
import {Footer} from './components/Footer/Footer'
import { Body } from './components/Body/Body';


export function App() {
  return (
    <div>
    <Header />
    <Banner/>
    <Body />
    <Footer />
    
        
    </div>
  );
}