import * as React from 'react';
import { Stack, Box, Typography } from '@mui/material';
import { IconAdd, SideBarItem } from './SideBarStyles';
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';

export interface SideBarProps {}

export default function SiderBar(props: SideBarProps) {
  return (
    <Stack
      width="96px"
      alignItems="center"
      padding="0 8px"
      position="fixed"
      zIndex="10"
      sx={{ left: '0', top: '74px' }}
    >
      <Box pb="12px">
        <IconAdd>
          <AddIcon />
        </IconAdd>
      </Box>

      <Stack>
        <SideBarItem className="active">
          <HomeIcon />
          <Typography variant="body1" color="initial" fontSize="12px" fontWeight="600">
            Home
          </Typography>
        </SideBarItem>
        <SideBarItem className="">
          <HomeIcon />
          <Typography variant="body1" color="initial" fontSize="12px" fontWeight="600">
            Home
          </Typography>
        </SideBarItem>
      </Stack>
    </Stack>
  );
}
