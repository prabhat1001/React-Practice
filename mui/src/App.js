import * as React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import SearchAppBar from './components/AppBar';
import Tour from './Pages/Tour';

export default function MyApp() {
  return (
    <BrowserRouter>
        <SearchAppBar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<Tour />} />
        </Routes>
    </BrowserRouter>
  );
}