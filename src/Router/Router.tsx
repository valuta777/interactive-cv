import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from '../components/Layout/Layout';
import { HomePage } from '../pages/HomePage/HomePage';

export const Router: React.FC = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route path="/" element={<HomePage />} />
    </Route>
  </Routes>
);
