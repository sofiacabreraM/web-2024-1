import React from 'react';
import { LostItem } from './LostItem/LostItem';
import { Info } from './info/Info';
import {Register} from './Register/Register'
import { UseDiDi } from './UseDiDi/UseDiDi';
import { Banner } from './Banner/Banner';

export function Body() {
    return (
        <div>
        <Banner />  
        <Info />
        <LostItem />
        <UseDiDi />
        <Register />
        
       
        </div>
    )}