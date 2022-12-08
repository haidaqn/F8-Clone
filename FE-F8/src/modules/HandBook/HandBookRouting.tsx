import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import HandBook from './HandBook';

export interface HandBookRoutingProps {}

export default function HandBookRouting(props: HandBookRoutingProps) {
  return (
    <Routes>
      <Route path="/hand-book" element={<HandBook />}></Route>
    </Routes>
  );
}
