import { Box, Typography } from '@suid/material';
import logo from '@assets/logo.svg';

import classes from './classes';

const AtgLoader = () => {
  return (
    <Box class={classes.container}>
      <Box class={classes.loadingBox}>
        <img src={logo} alt="" class={classes.imgStyle} />
        <Typography class="text-sky-800">Loading...</Typography>
      </Box>
    </Box>
  );
};

export default AtgLoader;
