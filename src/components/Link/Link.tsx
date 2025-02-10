import { Box, Link } from '@suid/material';

export interface LinkProps {
  title: string;
  url: string;
  target?: string;
}

const LinkComponent = ({ title, url, target }: LinkProps) => {
  const linkContent = (
    <Box
      sx={{
        display: 'flex',
      }}
    >
      <Link
        href={url}
        target={target}
        sx={{
          lineHeight: '24px',
          letterSpacing: '0.15px',
          fontSize: '16px',
          fontStyle: 'normal',
          fontWeight: '400',
        }}
      >
        {title}
      </Link>
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
