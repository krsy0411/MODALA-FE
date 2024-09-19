import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Router from './Router';
import BottomNavigationBar from './shared/bottom-navigationbar/BottomNavigationBar';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AnimatePresence>
        <BottomNavigationBar />
        <Router />
      </AnimatePresence>
    </BrowserRouter>
  </React.StrictMode>
);