import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import Blog from './Blog';

export interface BlogRoutingProps {}

export default function BlogRouting(props: BlogRoutingProps) {
  return (
    <Routes>
      <Route path="blog" element={<Blog />}></Route>
    </Routes>
  );
}
