import * as React from 'react';
import { Route, Routes } from 'react-router-dom';

import HomePage from './HomePage';

export interface HomePageRoutingProps {}

export default function HomePageRouting(props: HomePageRoutingProps) {
  return (
    <Routes>
      <Route path="" element={<HomePage />}></Route>
    </Routes>
  );
}
