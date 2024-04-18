import { JSX, splitProps } from 'solid-js';
import { STypography } from '../common';

export type TypographyVariant =
  | 'inherit'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'button'
  | 'caption'
  | 'overline';

export interface TypographyProps {
  variant: TypographyVariant;
  component?: keyof JSX.IntrinsicElements;
  sxProps?: Record<string, string>;
  children: JSX.Element | string | number;
  onClick?: () => void;
  class?: string;
}

export const Typography = (props: TypographyProps) => {
  const [load, rest] = splitProps(props, [
    'variant',
    'component',
    'sxProps',
    'children',
    'class',
  ]);

  return (
    <STypography
      variant={load.variant}
      component={load.component ?? 'span'}
      sx={load.sxProps}
      class={load.class}
      {...rest}
    >
      {load.children}
    </STypography>
  );
};
