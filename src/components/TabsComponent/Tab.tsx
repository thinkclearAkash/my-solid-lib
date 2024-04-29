import { Typography } from '../Typography';
import { Box } from '../common';
import { JSXElement } from 'solid-js';

type TabProps = {
  children?: JSXElement | string;
  onClick?: (index: number) => void;
};

const tabItemStyle = {
  minWidth: '100%',
  whiteSpace: 'nowrap',
  color: '#0E2C3B',
  textAlign: 'center',
  fontFamily: 'Roboto',
  fontSize: '14px',
  fontStyle: 'normal',
  fontWeight: '500',
  lineHeight: '24px',
  letterSpacing: '0.4px',
  textTransform: 'uppercase',
};

export const Tab = (props: TabProps) => {
  return (
    <Box class=" flex items-center gap-2" onClick={() => props.onClick}>
      <Box class="flex flex-col items-center">
        <Typography component="p" variant="body1" sxProps={tabItemStyle}>
          {props.children}
        </Typography>
      </Box>
    </Box>
  );
};
