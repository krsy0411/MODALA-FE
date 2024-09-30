import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Router from './Router';
import BottomNavigationBar from './shared/bottom-navigationbar/BottomNavigationBar';
import User from './User';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <User>
        <AnimatePresence>
          <BottomNavigationBar />
          <Router />
        </AnimatePresence>
      </User>
    </BrowserRouter>
  </React.StrictMode>
);
