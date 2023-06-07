    //import 
import React from 'react';
import ReactDom from 'react-dom/client';
import App from './app';

    //get root element
const root=ReactDom.createRoot(document.getElementById('root'));
root.render(
    <>
        <App />
    </>
)