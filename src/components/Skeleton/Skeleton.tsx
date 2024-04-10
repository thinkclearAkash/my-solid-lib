import { splitProps, mergeProps, For } from 'solid-js';

import { WarningAmber, Paper, Grid, Stack, Skeleton } from '../common';
type SkeletonVariant = 'text' | 'circular' | 'rectangular';

export interface PlaceholderProps {
  variant: SkeletonVariant;
  height?: number;
  width?: number;
  count?: number; // Optional, default to 1
}

export function Placeholder(props: PlaceholderProps) {
  const defaultProps = { count: 1 };
  const mergedProps = mergeProps(defaultProps, props);
  const [local, skeletonProps] = splitProps(mergedProps, ['count']);

  const skeletons = Array.from({ length: local.count });

  return (
    <Stack spacing={1}>
      <For each={skeletons}>
        {() => (
          <Skeleton
            variant={skeletonProps.variant}
            height={skeletonProps.height}
            width="100%"
          />
        )}
      </For>
    </Stack>
  );
}

export function WarningPlaceholder(props: { message: string }) {
  return (
    <Paper
      sx={{
        background: '#F2DEDE',
      }}
    >
      <Grid container height={'100px'} alignItems="center" paddingLeft={4}>
        <Grid item xs={1}>
          <WarningAmber
            sx={{ height: '50px', width: '50px', color: 'red' }}
          />
        </Grid>
        <Grid item xs={11} color="red">
          {props.message}
        </Grid>
      </Grid>
    </Paper>
  );
}

export function CardPlaceholder() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Placeholder variant="text" height={60} />
        <Placeholder variant="rectangular" height={40} />
      </Grid>
      <Grid item xs={6}>
        <Placeholder variant="text" height={60} />
        <Placeholder variant="rectangular" height={40} />
      </Grid>
      <Grid item xs={6}>
        <Placeholder variant="text" height={60} />
        <Placeholder variant="rectangular" height={40} />
      </Grid>
      <Grid item xs={12}>
        <Placeholder variant="text" height={60} />
        <Placeholder variant="rectangular" height={40} />
      </Grid>
    </Grid>
  );
}

export function TextPlaceholder() {
  return (
    <Placeholder variant="text" width={210} height= {18} count={3} />
  );
}

export function CircularPlaceholder() {
  return (
    <Placeholder
      variant="circular"
      width={40}
      height={40}
      count={3}
    />
  );
}
