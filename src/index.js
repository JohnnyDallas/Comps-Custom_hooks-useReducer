import './index.css';
import React from 'react'; //1
import ReactDOM from 'react-dom/client'; //2
import App from './App'; //5
import { NavigationProvider } from './context/navigation';

const el = document.getElementById('root'); //3
const root = ReactDOM.createRoot(el); //4

root.render(
  <NavigationProvider> 
    <App />
  </NavigationProvider>   
); 