import React, {useState} from 'react'
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { block } from "million/react";


const AppBlock = block(App);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppBlock initial={{count: 0}} />
  </React.StrictMode>,
)
