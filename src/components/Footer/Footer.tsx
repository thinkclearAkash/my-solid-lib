import { Component } from 'solid-js';
import { Typography } from '../Typography';

const footerTextStyle = {
  fontSize: '12px',
};

const Footer: Component = () => {
  return (
    <footer class="bg-[#0B2432] text-center text-white py-2 grid gap-1">
      <Typography variant="body1" component="p" sxProps={footerTextStyle}>
        Copyright &#169; {new Date().getFullYear()} Armstrong Transport Group
        L.L.C. All rights reserved.
      </Typography>
      <Typography variant="body1" component="p" sxProps={footerTextStyle}>
        Version 4.0.0
      </Typography>
    </footer>
  );
};

export default Footer;
