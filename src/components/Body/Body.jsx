import React from 'react';
import { LostItem } from './LostItem/LostItem';
import { Info } from './info/Info';
import {Register} from './Register/Register'

export function Body() {
    return (
        <div>
        <Info />
        <Register />
        <LostItem /></div>
    )}