import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import Study from './Study';

export interface StudyRoutingProps {}

export default function StudyRouting(props: StudyRoutingProps) {
  return (
    <Routes>
      <Route path="study" element={<Study />}></Route>
    </Routes>
  );
}
