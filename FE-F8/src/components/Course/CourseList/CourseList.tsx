import * as React from 'react';
import { Stack, Grid, Typography } from '@mui/material';
import CourseItem from '../CourseItem/CourseItem';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export interface CourseListProps {}

export default function CourseList(props: CourseListProps) {
  return (
    <Stack>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography
          variant="body1"
          component="h2"
          m="16px 0 20px"
          fontSize="24px"
          fontWeight="700"
          sx={{ cursor: 'pointer' }}
        >
          Khóa học miễn phí
        </Typography>

        <Stack direction="row" alignItems="center">
          <Typography variant="body1">Xem lộ trình</Typography>
          <KeyboardArrowRightIcon />
        </Stack>
      </Stack>

      <Grid container spacing={2}>
        <Grid item xs={3}>
          <CourseItem />
        </Grid>

        <Grid item xs={3}>
          <CourseItem />
        </Grid>

        <Grid item xs={3}>
          <CourseItem />
        </Grid>

        <Grid item xs={3}>
          <CourseItem />
        </Grid>
      </Grid>
    </Stack>
  );
}
