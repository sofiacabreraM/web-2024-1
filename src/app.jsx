import React from 'react';
import './app.css';
import Counter from './components/Counter/Counter'
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

export function App (){
    return(
        <div className="container">
    <img src="https://itahora.com/wp-content/uploads/2023/03/pi.jpg" alt="" className="image" />
    <div className="content">
        <Header />
        <Counter />
        <Footer />
    </div>
</div>

    )
}