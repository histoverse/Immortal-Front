import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Home, Lessons } from '../../pages';

import { routes } from './routes';

export const LayoutRoutes: FC = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/" />} />
      <Route path={routes.home.root} element={<Home />} />
      <Route path={routes.lessons.root} element={<Lessons />} />
    </Routes>
  );
};
