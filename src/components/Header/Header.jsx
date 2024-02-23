import React, { useState } from 'react';
import './Header.css';
import {LIST_HEADER} from "../../const/ListHeader"
import { Menu } from '../Menu/Menu';



export function Header() {
 const[showMenu, setShowMenu] = useState(false)

 const handleShowMenu = (e) => {
  setShowMenu(!showMenu)
 }


  return (
    <nav className='general-container-header'>
    <div className="header-container">
    <img src="https://static.cdnlogo.com/logos/d/63/didi.png" alt="" className="logo" />
    <ul className="header-list">
      {LIST_HEADER.map(item => (
        <li key={item.id}>
          <img src={item.image} alt={item.text}  className='icon-header'/>
          {item.text}
        </li>
        ))}
    </ul>
    </div>

    <div className='header-mobile'>
      {
        showMenu
        ?  <Menu items= {LIST_HEADER} />
        : null
      }
    <img src="https://static.cdnlogo.com/logos/d/63/didi.png" alt="" className="logo" />
    <button
    className='button-header'
    id='hamburger-btn'
    onClick={handleShowMenu}
    >
    <img 
    src="https://cdn-icons-png.flaticon.com/512/6499/6499731.png" 
    alt="hamburger menu"
    className="hamburger-menu" />
    </button>
    </div>
    </nav>
  );  
}


