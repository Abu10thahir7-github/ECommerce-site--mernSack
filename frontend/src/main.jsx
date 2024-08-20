// src/main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import App from './App';
import './index.css';
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <Router> {/* Wrap the App with Router */}
      <App />
    </Router>
  </Provider>
);
