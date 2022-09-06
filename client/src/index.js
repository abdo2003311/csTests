import React from 'react';
import App from './App';
import './components/css/main.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');

const root = createRoot(container);
root.render(
<React.StrictMode>
    <App />
</React.StrictMode>);