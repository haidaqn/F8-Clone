import * as React from 'react';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router } from 'react-router-dom';
import theme from './utils/theme';
import MainLayout from './layouts/MainLayout/MainLayout';

const HomeComponent = React.lazy(() => import('./modules/HomePage/HomePageRouting'));
const RoadMapComponent = React.lazy(() => import('./modules/RoadMap/RoadMapRouting'));
const StudyComponent = React.lazy(() => import('./modules/Study/StudyRouting'));
const BlogComponent = React.lazy(() => import('./modules/Blog/BlogRouting'));

const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <React.Suspense fallback={<div>Loading...</div>}>
        <CssBaseline />
        <Router>
          <MainLayout>
            <HomeComponent />
            <RoadMapComponent />
            <StudyComponent />
            <BlogComponent />
          </MainLayout>
        </Router>
      </React.Suspense>
    </ThemeProvider>
  );
};

export default App;
