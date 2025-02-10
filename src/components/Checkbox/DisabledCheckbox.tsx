import { Checkbox, FormControlLabel, Typography } from '@suid/material';

export type Props = {
  checked: boolean | undefined;
  label: string;
};

function DisabledCheckbox(props: Props) {
  return (
    <FormControlLabel
      label={
        <Typography
          sx={{
            '&.Mui-disabled': {
              color: 'black',
            },
          }}
        >
          {props.label}
        </Typography>
      }
      control={
        <Checkbox
          checked={props.checked}
          disabled
          sx={{
            '&.Mui-disabled': {
              color: 'gray',
            },
          }}
        />
      }
    />
  );
}

export default DisabledCheckbox;
