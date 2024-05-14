import { JSX, Show, createEffect, createSignal, mergeProps } from 'solid-js';

import classes from './classes';
import { Placeholder } from '../Skeleton';
import { formatPhoneNumber } from '../common/utils';
import { Box, ContactProps, EmailIcon, FaxIcon, Grid, Paper, PeopleIcon, PhoneIcon, STypography } from '../common';

type RowProps = {
  icon: JSX.Element;
  text: string;
  hideIcon?: boolean;
};

const typographyStyle = {
  fontFamily: 'Roboto',
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: '24px',
  letterSpacing: '0.15px',
};

const contactStyle = {
  fontFamily: 'Roboto',
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: '24px',
  letterSpacing: '0.15px',
};

const Row = ({ icon, text, hideIcon = false }: RowProps) => (
  <Box class={classes.rowStyle}>
    <Show when={!hideIcon}>{icon}</Show>
    <STypography
      variant="subtitle1"
      sx={{ marginLeft: hideIcon ? 0 : 1, ...typographyStyle }}
    >
      {text}
    </STypography>
  </Box>
);

type ReassignContactCard<T> = {
  contact: T | undefined;
  showIcon?: boolean;
  showType?: boolean;
  type?: string;
  iconColor?: string;
  personIconSize?: string;
  isLoading?: boolean;
};

const typePhoneNumber = ['string', 'number'];

export const ReassignContactCard = <T extends ContactProps>(
  props: ReassignContactCard<T>,
) => {
  const [phoneNumber, setPhoneNumber] = createSignal<string>('-');
  props = mergeProps(
    {
      showIcon: false,
      showType: false,
      type: 'Type',
      iconColor: '#026EA1',
      isLoading: false,
    },
    props,
  );

  const CardPlaceholder = () => {
    return (
      <>
        <Grid container spacing={2} width={200}>
          <Grid item xs={12}>
            <Placeholder variant="text" height={60} />
            <Placeholder variant="rectangular" height={40} />
          </Grid>
        </Grid>
      </>
    );
  };
  createEffect(() => {
    if (Boolean(props.contact)) {
      setPhoneNumber(formatPhoneNumber(props.contact?.phone1));
    }
    const ext = props.contact?.phone1Ext;
    if (Boolean(ext)) {
      setPhoneNumber(`${phoneNumber} Ext. ${props.contact?.phone1Ext}`);
    }
  });

  return (
    <Paper
      elevation={0}
      sx={{
        backgroundColor: '#FFD190',
        paddingBottom: '8px',
      }}
    >
      <Show when={props.isLoading === false} fallback={<CardPlaceholder />}>
        <Grid container>
          <Show when={props.showIcon}>
            <Box class={`${props.personIconSize != null ? 'pr-5' : 'pr-3'}`}>
              <Box class="w-10 h-10 rounded-full bg-[#016fa1ff] flex justify-center items-center">
                <STypography class="text-[#fff] text-[20px]">A</STypography>
              </Box>
            </Box>
          </Show>
          <Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <STypography variant="body1" sx={contactStyle}>
                {props.contact?.name != null ? props.contact.name : '-'}
              </STypography>
              <div class={classes.groupsStyle}>
                <PeopleIcon
                  class={classes.personIconStyle}
                  sx={{ '& .MuiSvgIcon-root': { width: '14px' } }}
                />
                {props.contact?.accountingGroup}
              </div>
            </Box>

            <Row
              icon={<PhoneIcon sx={{ color: props.iconColor, fontSize: 16 }} />}
              text={phoneNumber()}
            />
            <Row
              icon={<EmailIcon sx={{ color: props.iconColor, fontSize: 16 }} />}
              text={props.contact?.email ?? '-'}
            />

            <Row
              icon={<FaxIcon sx={{ color: props.iconColor, fontSize: 16 }} />}
              text={
                typePhoneNumber.includes(typeof props.contact?.fax)
                  ? formatPhoneNumber(props.contact?.fax ?? '')
                  : '-'
              }
            />
          </Box>
          <Box>
            <Show when={props.showType}>
              <Box class={classes.typeBoxStyle}>
                <STypography>{props.type}</STypography>
              </Box>
            </Show>
          </Box>
        </Grid>
      </Show>
    </Paper>
  );
};
