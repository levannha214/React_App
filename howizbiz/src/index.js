import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './views/login';
import { Layout } from './views/layout';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        <Route index element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user_management" element={<Layout />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
