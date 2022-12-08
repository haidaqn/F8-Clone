import { Box, Stack } from '@mui/material';
import * as React from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import SiderBar from './components/Siderbar/SideBar';

export interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <Box>
      <Header />
      <Stack pt="12px" flexDirection="row" mt="66px" overflow="hidden overlay">
        <SiderBar />
        <Box maxWidth="calc(100vw - 96px)" padding="0 40px 0 20px" flex="1" ml="96px">
          {children}
        </Box>
      </Stack>
      <Footer />
    </Box>
  );
}
