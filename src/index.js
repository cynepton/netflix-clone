import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import "normalize.css";
import App from './App';
import { GlobalStyles } from './global-styles';

render(
    <React.StrictMode>
        <GlobalStyles />
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);