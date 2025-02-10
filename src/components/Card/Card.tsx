import { CardPlaceholder } from '../Skeleton';
import { KeyboardArrowDown, KeyboardArrowRight } from '@suid/icons-material';
import {
  Box,
  CardContent,
  CardHeader,
  Card as MuiCard,
  Typography,
} from '@suid/material';
import { JSX, Show, createSignal, mergeProps } from 'solid-js';

import { cardStyles } from './Card.style';
import classes from './classes';

export type CardProps = {
  textColor?: string;
  bannerColor?: string;
  bannerHeight?: string;
  contentClass?: string;
  startTitle?: string | JSX.Element;
  startTitleAction?: JSX.Element;
  endTitle?: string | JSX.Element;
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
  children: JSX.Element | string;
  raised?: boolean;
  action?: JSX.Element;
  accordion?: boolean;
  expanded?: boolean;
  onToggle?: () => void;
  padding?: number;
  loading?: boolean;
  cardWarning?: boolean;
  id?: string;
  maxContentHeight?: number;
  minHeight?: string;
  customCardStyles?: Record<string, string>;
};

const defaultProps = {
  accordion: true,
  expanded: true,
  padding: 0,
  loading: false,
  raised: false,
  cardWarning: false,
};

export function Card(props: CardProps) {
  const mp = mergeProps(defaultProps, props);

  const [isExpanded, setIsExpanded] = createSignal(
    mp.accordion ? mp.expanded : true,
  );

  const handleToggle = () => {
    setIsExpanded(!isExpanded());
    mp.onToggle && mp.onToggle();
  };

  return (
    <MuiCard
      raised={mp.raised}
      sx={{
        ...cardStyles.card,
        ...props.customCardStyles,
      }}
      id={props.id}
      style={{ 'min-height': props.minHeight }}
    >
      <CardHeader
        class={`!rounded-t-lg !py-[5px] !px-[7px]
        ${props.bannerHeight ?? ''}
        ${props.bannerColor ?? 'bg-[#026EA1]'}
        ${props.textColor ?? 'text-white'}
        `}
        title={
          <Box class={cardStyles.flexClass}>
            <Box class={cardStyles.flexClass}>
              <Show when={mp.accordion}>
                <Typography
                  variant="body2"
                  component="span"
                  sx={cardStyles.accordionIcon}
                  onClick={mp.accordion ? handleToggle : undefined}
                >
                  <Box>
                    {isExpanded() ? (
                      <KeyboardArrowDown />
                    ) : (
                      <KeyboardArrowRight />
                    )}
                  </Box>
                </Typography>
              </Show>

              <Typography
                variant="body2"
                component="span"
                sx={cardStyles.startIcon}
              >
                {mp.startIcon}
              </Typography>
              <div class="text-lg font-medium">{mp.startTitle}</div>
              <div class={classes.startTitleAction}>{mp.startTitleAction}</div>
            </Box>
            <Box class={`${cardStyles.flexClass} ml-auto`}>
              <Show when={mp.endIcon}>
                <Typography variant="body2" component="span">
                  {mp.endIcon}
                </Typography>
              </Show>
              <Typography variant="body2" component="span">
                {mp.endTitle}
              </Typography>
            </Box>
          </Box>
        }
        action={mp.action}
      ></CardHeader>
      <CardContent
        class={
          mp.cardWarning
            ? `border-[#E09A9A] bg-[#FF5856]/10 ${mp.contentClass}`
            : `bg-[#F2F6F8] ${mp.contentClass}`
        }
        // @ts-expect-error  sx type
        sx={cardStyles.cardContent(
          isExpanded(),
          mp.padding,
          mp.maxContentHeight,
        )}
      >
        <Show when={!mp.loading} fallback={<CardPlaceholder />}>
          {mp.children}
        </Show>
      </CardContent>
    </MuiCard>
  );
}
