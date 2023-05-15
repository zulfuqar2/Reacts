import React from 'react';
import ReactDom from 'react-dom/client';
import './index.css';


const root=document.querySelector('#root');
const rootElement =<h1 className='title'>Salam Dunya </h1>;


ReactDom.createRoot(root).render(rootElement)