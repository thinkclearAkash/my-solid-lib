import { Show, createSignal } from 'solid-js';
import { Typography } from '../Typography';

interface StarProps {
  filled: boolean;
  onClick: () => void;
  sx?: Record<string, string>;
  class?: string;
}

const Star = ({ filled, onClick, sx, class: starClass }: StarProps) => (
  <span
    class={`star ${filled ? 'filled' : 'unfilled'} ${starClass} cursor-pointer`}
    onClick={onClick}
    style={sx}
    // class={class}
  >
    {filled ? '★' : '☆'}
  </span>
);

export interface RatingProps {
  readOnly: boolean;
  currentRating: number;
  totalRatings: number;
  sxProps?: Record<string, string>;
  class?: string;
  ratingClass?: string;
  onChange?: (newRating: number) => void;
}

export const Rating = (props: RatingProps) => {
  const [rating, setRating] = createSignal(props.currentRating);

  const renderStars = (currentRatting: number, totalRatings: number) => {
    return Array.from({ length: totalRatings }, (_, index) => {
      const starIndex = index + 1;
      return (
        <Star
          filled={starIndex <= currentRatting}
          onClick={() => {
            setRating(starIndex);
            if (props.onChange) {
              props.onChange(starIndex);
            }
          }}
          sx={props.sxProps}
          class={props.class}
        />
      );
    });
  };

  return (
    <>
      {renderStars(rating(), props.totalRatings)}
      <Show when={!props.readOnly}>
        <Typography variant="h6" class="text-[#616161] px-8">
          {`${rating()} out of ${props.totalRatings}`}
        </Typography>
      </Show>
    </>
  );
};
