import React from 'react';
import './Footer.css';
import { lIST_FOOTER_1} from '../../const/listfooter1';
import { LIST_FOOTER_2} from '../../const/Listfooter2';

export function Footer(){
    return(
    <div className='footerContainer'>
    <div className='content-black'>.</div>
    <div className='content1'>
    <ul className='footer-list1'>
    {
        lIST_FOOTER_1.map(lIST_FOOTER_1 =>{
            const {id, text} = lIST_FOOTER_1
            return(
                <li key={id}>{text}</li>
            )
        })
    }
    </ul>
    </div>
    
    <div className='line'></div>


    <div className='content2'>
    <ul className='footer-list2'>
    {
        LIST_FOOTER_2.map(LIST_FOOTER_2 =>{
            const {id, text} = LIST_FOOTER_2
            return(
                <li key={id}>{text}</li>
            )
        })
    }
    </ul>
    </div>
    <img src="https://web.didiglobal.com/static/5b2c5116bf63ed9778a804821c6b11a0/50a91/android-ios-spanish.webp" alt="stores" className='images-apps'/>
    </div>
    )
}