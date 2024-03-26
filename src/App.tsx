import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './app/Home/page';
import LikedImages from './app/LikedImages/page';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/liked" element={<LikedImages />} />
      </Routes>
    </BrowserRouter>
  );
};
