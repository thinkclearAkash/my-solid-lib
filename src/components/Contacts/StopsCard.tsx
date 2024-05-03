import { Apartment, Box, LocationOn, Paper, Phone } from '../common';
import { addressFormatter } from '../common/utils';

type StopProps = {
  address1?: string | null;
  city?: string | null;
  state?: string | null;
  zip: string;
  locationName?: string | null;
  phone?: string | null;
};

export type StopsCardProps<T> = {
  stop: T;
  stopCardClick: (stop: T) => void;
};

export const StopsCard = <T extends StopProps>(props: StopsCardProps<T>) => {
  const { address1, city, state, zip, locationName = '', phone } = props.stop;
  return (
    <Paper
      elevation={0}
      sx={{
        padding: '8px',
        backgroundColor: '#E2EDF8',
        cursor: 'pointer',
        '&:hover': {
          backgroundColor: '#FFE3BC',
        },
      }}
      onClick={() => props.stopCardClick(props.stop)}
    >
      <div class="flex flex-col">
        <Box class="flex items-center my-1">
          <LocationOn
            sx={{ color: '#026EA1', height: '20px', marginRight: '8px' }}
          />
          <div class="text-md font-medium">{locationName ?? '-'}</div>
        </Box>
        <Box class="flex items-center  my-1">
          <Apartment sx={{ color: '#026EA1', marginRight: '8px' }} />
          <div class="text-sm text-[#5d6062]">
            {addressFormatter(address1, city, state, zip)}
          </div>
        </Box>
        <Box class="flex items-center  my-1">
          <Phone sx={{ color: '#026EA1', marginRight: '8px' }} />
          <div class="text-sm text-[#5d6062]">
            {Boolean(phone) ? phone : '-'}
          </div>
        </Box>
      </div>
    </Paper>
  );
};
