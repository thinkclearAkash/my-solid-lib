import { JSX, Show, mergeProps } from 'solid-js';

import classes from './classes';
import { Placeholder } from '../Skeleton';
import { Box, ContactProps, EmailIcon, FaxIcon, Grid, Person, PhoneIcon, STypography } from '../common';
import { formatPhoneNumber } from '../common/utils';

type RowProps = {
  icon: JSX.Element;
  text: string;
  hideIcon?: boolean;
};
const typographyStyle = {
  fontFamily: 'Roboto',
  fontSize: '14px',
  fontWeight: 400,
  lineHeight: '24px',
  color: 'rgba(0, 0, 0, 0.6)',
  overflowWrap: 'anywhere',
};

const Row = ({ icon, text, hideIcon = false }: RowProps) => (
  <Box class={classes.rowStyle}>
    <Show when={!hideIcon}>
      <Box sx={{ '& .MuiSvgIcon-root': { width: 16, height: 'auto' } }}>
        {icon}
      </Box>
    </Show>
    <Box
      component={'div'}
      style={{ 'margin-left': hideIcon ? '0px' : '8px', ...typographyStyle }}
    >
      {text}
    </Box>
  </Box>
);

export type AddressCardProps<T> = {
  contact: T | undefined;
  showIcon?: boolean;
  showType?: boolean;
  type?: string;
  mode: 'warning' | 'regular' | 'info';
  iconColor?: string;
  personIconSize?: string;
  isLoading?: boolean;
  isActive?: boolean;
};

const modeColorMap = {
  regular: {
    normal: 'white',
    hover: '#D2E2ED',
    active: '#EDF3F7',
  },
  warning: {
    normal: '#FFE3BC',
    hover: '#FFD190',
    active: '#FFECD2',
  },
  info: {
    normal: '#E2EDF8',
    hover: '#FFE3BC',
    active: '#FFF3E4',
  },
};

const typePhoneNumber = ['string', 'number'];

export const AddressCard = <T extends ContactProps>(
  props: AddressCardProps<T>,
) => {
  props = mergeProps(
    {
      showIcon: false,
      showType: false,
      type: 'Type',
      mode: 'regular',
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

  let phoneNumber = '-';

  if (
    props.contact !== undefined &&
    typePhoneNumber.includes(typeof props.contact.phone1)
  ) {
    phoneNumber = formatPhoneNumber(props.contact.phone1);
    const ext = props.contact.extension1;

    if (ext !== undefined) {
      phoneNumber = `${phoneNumber} Ext. ${ext}`;
    }
  }

  return (
    <Grid
      class={`!w-[100%] p-3 hover:${modeColorMap[props.mode].hover}`}
      sx={{
        backgroundColor:
          props.isActive ?? false
            ? modeColorMap[props.mode].active
            : modeColorMap[props.mode].normal,
        '&:hover': {
          backgroundColor: modeColorMap[props.mode].hover,
        },
      }}
    >
      <Show when={props.isLoading === false} fallback={<CardPlaceholder />}>
        <Grid container class="!m-0 !p-0 !w-[100%]">
          <Show when={props.showIcon}>
            <Grid
              item
              class={`${
                props.personIconSize != null ? 'pr-5' : 'pr-3'
              } flex !pl-0 !pt-0`}
            >
              <Person
                class={classes.personIconStyle}
                sx={{
                  width: props.personIconSize ?? '24px',
                  height: props.personIconSize ?? '24px',
                }}
              />
            </Grid>
          </Show>
          <Grid item class="!p-0">
            <Box>
              <span style={typographyStyle}>
                {(props.contact && props.contact.name != null) || '-'}
              </span>
            </Box>

            <Row
              icon={<PhoneIcon sx={{ color: props.iconColor }} />}
              text={phoneNumber}
            />
            <Row
              icon={<EmailIcon sx={{ color: props.iconColor }} />}
              text={(props.contact && props.contact.email) ?? '-'}
            />
            <Row
              icon={<FaxIcon sx={{ color: props.iconColor }} />}
              text={
                typePhoneNumber.includes(
                  typeof (props.contact && props.contact.fax),
                )
                  ? formatPhoneNumber(props.contact?.fax ?? '')
                  : '-'
              }
            />
          </Grid>
          <Grid xs={3} class="!ml-auto">
            <Show when={props.showType}>
              <Box class={classes.typeBoxStyle}>
                <STypography>{props.type}</STypography>
              </Box>
            </Show>
          </Grid>
        </Grid>
      </Show>
    </Grid>
  );
};
