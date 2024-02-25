import './style.css'
import React from 'react'
import{createRoot} from "react-dom/client"
import { App } from './app'

const appContainer = document.querySelector("#app") //estamos seleccionando un elemento 
const root = createRoot(appContainer)


root.render(<App />)