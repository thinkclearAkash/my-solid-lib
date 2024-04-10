import { CardPlaceholder } from '../Skeleton';
import {
  CardContent,
  CardHeader,
  Grid,
  MuiCard,
  Typography,
  ArrowDropDownCircleOutlined,
  PlayCircleOutlineOutlined,
} from '../common';
import { JSX, Show, createSignal, mergeProps } from 'solid-js';

import { cardStyles } from './Card.style';
import classes from './classes';

export interface Props {
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
}

const defaultProps = {
  accordion: true,
  expanded: true,
  padding: 0,
  loading: false,
  raised: false,
  cardWarning: false,
};

export default function Card(props: Readonly<Props>) {
  const mp = mergeProps(defaultProps, props);

  const [isExpanded, setIsExpanded] = createSignal(
    mp.accordion ? mp.expanded : true,
  );

  const handleToggle = () => {
    setIsExpanded(!isExpanded());
    mp.onToggle && mp.onToggle();
  };

  return (
    <MuiCard raised={mp.raised} sx={cardStyles.card} id={props.id}>
      <CardHeader
        sx={cardStyles.cardHeader}
        title={
          <Grid
            container
            spacing={2}
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item sx={cardStyles.gridItem}>
              <Typography
                variant="body2"
                component="span"
                sx={cardStyles.accordionIcon}
                onClick={mp.accordion ? handleToggle : undefined}
              >
                {mp.accordion &&
                  (isExpanded() ? (
                    <ArrowDropDownCircleOutlined />
                  ) : (
                    <PlayCircleOutlineOutlined />
                  ))}
              </Typography>
              <Typography
                variant="body2"
                component="span"
                sx={cardStyles.startIcon}
              >
                {mp.startIcon}
              </Typography>
              <Typography variant="body2" component="span" fontSize={'1.3rem'}>
                {mp.startTitle}
              </Typography>
              <span class={classes.startTitleAction}>
                {mp.startTitleAction}
              </span>
            </Grid>
            <Grid item sx={cardStyles.gridItem}>
              <Typography
                variant="body2"
                component="span"
                sx={cardStyles.endIcon}
              >
                {mp.endIcon}
              </Typography>
              <Typography variant="body2" component="span">
                {mp.endTitle}
              </Typography>
            </Grid>
          </Grid>
        }
        action={mp.action}
      ></CardHeader>
      <CardContent
        class={mp.cardWarning ? 'border-[#E09A9A] bg-[#FF5856]/10' : ''}
        sx={cardStyles.cardContent(isExpanded(), mp.padding)}
      >
        <Show when={!mp.loading} fallback={<CardPlaceholder />}>
          {mp.children}
        </Show>
      </CardContent>
    </MuiCard>
  );
}
