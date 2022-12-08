import * as React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import GroupsIcon from '@mui/icons-material/Groups';

export interface CourseItemProps {}

const BoxImage = styled(Box)(() => ({
  backgroundColor: 'rgba(0, 0, 0, .1)',
  backgroundPosition: '50%',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  borderRadius: '16px',
  objectFit: 'cover',
  overflow: 'hidden',
  paddingTop: '56.25%',
  width: '100%',
  cursor: 'pointer'
}));

export default function CourseItem(props: CourseItemProps) {
  return (
    <Stack gap="12px" sx={{ userSelect: 'none' }} component="section">
      <BoxImage sx={{ backgroundImage: 'url(https://files.fullstack.edu.vn/f8-prod/courses/7.png)' }} />
      <Typography
        variant="body1"
        sx={{
          wordWrap: 'break-word',
          WebkitBoxOrient: 'vertical',
          WebkitLineClamp: '1',
          color: '#292929',
          fontWeight: '600'
        }}
      >
        Kiến thức nhập môn IT
      </Typography>
      <Stack direction="row" alignItems="center" color="#666" fontSize="14px">
        <GroupsIcon />
        <Typography variant="body1" ml="12px">
          90.755
        </Typography>
      </Stack>
    </Stack>
  );
}
