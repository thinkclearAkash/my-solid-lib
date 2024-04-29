
import { Box, Link } from '../common';
import { ForwardArrow } from '../../assets';

export interface LinkProps {
  title: string;
  url: string;
  target?: string;
}

const ArrowIcon = () => (
  <span
    style={{
      width: '28px',
      height: '28px',
      'flex-shrink': '0',
      'margin-left': '5px',
    }}
  >
    <img src={ForwardArrow} alt="forward arrow" />
  </span>
);

const LinkComponent = (props: LinkProps) => {
  const linkContent = (
    <Box
      sx={{
        display: 'flex',
      }}
    >
      <Link
        href={props.url}
        target={props.target}
        sx={{
          lineHeight: '24px',
          letterSpacing: '0.15px',
          fontSize: '16px',
          fontStyle: 'normal',
          fontWeight: '400',
        }}
      >
        {props.title}
      </Link>
      <ArrowIcon />
    </Box>
  );

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {linkContent}
    </Box>
  );
};

export default LinkComponent;
