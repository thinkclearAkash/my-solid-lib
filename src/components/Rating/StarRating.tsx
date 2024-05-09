import { Box } from '@suid/material';
import { Show } from 'solid-js';

interface StarProps {
  filled: boolean;
  onClick?: () => void;
  sx?: Record<string, string>;
  class?: string;
}

const Star = ({ filled, sx }: StarProps) => (
  <span class={`star ${filled ? 'filled' : 'unfilled'}  `} style={sx}>
    {filled ? '★' : '☆'}
  </span>
);

export interface RatingProps {
  currentRating: number;
  starCount: number;
  numberOfRatings: number | undefined;
  ratingClass?: string;
  onChange?: (newRating: number) => void;
  showCount: boolean;
}

const renderStars = (currentRating: number, starCount: number) => {
  return Array.from({ length: starCount }, (_, index) => {
    const starIndex = index + 1;
    return (
      <Star filled={starIndex <= currentRating} sx={{ color: '#FF9800' }} />
    );
  });
};

export const StarRating = (props: RatingProps) => {
  return (
    <Box class="flex flex-col">
      <Box>{renderStars(props.currentRating, props.starCount)}</Box>
      <Show when={props.showCount}>
        <Box>{`${props.numberOfRatings ?? 0} Ratings`}</Box>
      </Show>
    </Box>
  );
};
