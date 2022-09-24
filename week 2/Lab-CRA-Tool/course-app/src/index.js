import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

const rootElement = createRoot(document.getElementById('root'));
rootElement.render(<App />);