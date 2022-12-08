import * as React from 'react';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router } from 'react-router-dom';
import theme from './utils/theme';
import HomePageRouting from './modules/HomePage/HomePageRouting';
import HandBookRouting from './modules/HandBook/HandBookRouting';
import MainLayout from './layouts/MainLayout/MainLayout';

const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <React.Suspense fallback={<div>Loading...</div>}>
        <CssBaseline />
        <Router>
          <MainLayout>
            <HomePageRouting />
            <HandBookRouting />
          </MainLayout>
        </Router>
      </React.Suspense>
    </ThemeProvider>
  );
};

export default App;
