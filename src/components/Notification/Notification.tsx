import { SChip, Grid, Stack, STypography, Info, Warning, WarningAmber } from '../common';
import { JSX, createSignal, mergeProps } from 'solid-js';

import cls, { colors, notificationStyles } from './classes';

type typeOptions =
  | 'warning'
  | 'info'
  | 'error'
  | 'Red Flag'
  | 'Green Flag'
  | 'Blue Flag'
  | 'Yellow Flag'
  | 'Orange Flag'
  | 'Needs Approval'
  | 'Get Paperwork'
  | 'Refund Request'
  | 'Efs Issued'
  | 'Missing Paperwork'
  | 'Hot Load'
  | 'Billing Hold'
  | 'Billing Note'
  | 'tableError'
  | '';

interface NotificationProps {
  startIcon?: string;
  type: typeOptions;
  text?: JSX.Element | string;
  subText?: JSX.Element | string;
  endIcon?: JSX.Element;
  playIcon?: JSX.Element;
  accordion?: boolean | undefined;
  expanded?: boolean;
  cleared?: boolean;
  disputed?: boolean;
  onToggle?: () => void;
  onClick?: () => void;
  tableRowNotification?: boolean;
  sxProps?: string;
  imgIcon?: string;
}

const defaultProps = {
  accordion: true,
  expanded: false,
  tableRowNotification: false,
};

const iconMap = (type: string): JSX.Element => {
  switch (type) {
    case 'warning':
      return <Warning style={{ 'font-size': '24px', color: colors.warning }} />;
    case 'error':
    case 'tableError':
      return (
        <WarningAmber style={{ 'font-size': '24px', color: colors.error }} />
      );
    case 'info':
      return <Info style={{ 'font-size': '24px', color: colors.info }} />;
    default:
      return <Info style={{ 'font-size': '24px', color: colors.info }} />;
  }
};

export const conditionalCursor = (condition: boolean) => ({
  cursor: condition ? 'pointer' : 'default',
});

const Notification = (props: NotificationProps): JSX.Element => {
  const mp = mergeProps(defaultProps, props);
  const [isExpanded, setIsExpanded] = createSignal(
    mp.accordion ? mp.expanded : false,
  );
  const handleToggle = () => {
    setIsExpanded(!isExpanded());
    mp.onToggle && mp.onToggle();
  };
  return (
    <Grid
      container
      flexDirection="row"
      gap={3}
      alignItems="center"
      class={`${cls.container} ${mp.sxProps} ${
        mp.tableRowNotification && '!my-0'
      } ${cls[mp.type] || ''}`}
      sx={{
        boxShadow: mp.tableRowNotification
          ? ''
          : '0px 8px 5px rgba(0, 0, 0, 0.16)',
        opacity: Boolean(props.cleared) ? 0.6 : 1,
      }}
      onClick={mp.onClick}
    >
      <Grid>
        {Boolean(mp.imgIcon) ? (
          <img src={mp.imgIcon} class="size-[44px]" alt="alt flag" />
        ) : (
          iconMap(mp.type)
        )}
      </Grid>
      <Grid class="flex-1">
        <Grid container direction="column" item xs={12}>
          <Grid item style={cls.content} width={'100%'}>
            <Grid
              item
              xs={12}
              container
              direction="column"
              flexWrap="nowrap"
              alignContent="flex-end"
            >
              <Grid item xs={12}>
                <Stack direction="row">
                  {mp.text}
                  {props.disputed ?? false ? (
                    <SChip label="Disputed" size="small" color="warning" />
                  ) : undefined}
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <div>{mp.subText}</div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <STypography
              variant="body2"
              component="span"
              sx={{
                ...notificationStyles.alignRight,
                ...conditionalCursor(mp.subText !== ''),
              }}
              onClick={mp.accordion ? handleToggle : undefined}
            >
              {mp.accordion && (isExpanded() ? mp.endIcon : mp.playIcon)}
            </STypography>
          </Grid>
        </Grid>
        {isExpanded() && mp.subText !== '' && <Grid item>{mp.subText}</Grid>}
      </Grid>
    </Grid>
  );
};

export default Notification;
