import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import RoadMap from './RoadMap';

export default function RoadMapRouting() {
  return (
    <Routes>
      <Route path="road-map" element={<RoadMap />}></Route>
    </Routes>
  );
}
