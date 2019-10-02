import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import * as Sentry from '@sentry/browser';
import './index.css';
import App from "./App"
 
Sentry.init({dsn: "https://8b1b483a6bfd4f25bcf93cf3be6c960d@sentry.io/1761396"})
ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, document.getElementById('root'));
















