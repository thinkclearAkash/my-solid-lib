/* Acceptable Format for TimepickerV2 value is '2021-09-01T12:00:00.000'
to make it work properly
and onChange it will return the same format.
*/
import TextField from '@suid/material/TextField';
import StyledProps from '@suid/system/styledProps';
import { JSXElement, mergeProps } from 'solid-js';
import './index.css';
import { DateTime } from 'luxon';

export type TimepickerV2Props = {
  value: string;
  onChange: (value: string) => void;
  label?: string | JSXElement;
  error?: string | string[] | null;
  variant?: 'outlined' | 'filled' | 'standard' ;
  class?: string;
  sxProps?: StyledProps;
  disabled?: boolean;
};

export const TimepickerV2 = (props: TimepickerV2Props) => {
  props = mergeProps(
    {
      helperText: ['Invalid time'],
      fullWidth: true,
    },
    props,
  );

  const formatTime = (value: string) => {
    if (typeof value !== 'string') return '';
    const parts = value.split('T');
    if (parts.length < 2) return '';
    return parts[1].substring(0, 5);
  };

  const reverseFormatTime = (time: string) => {
    const dateParts = props.value
      ? props.value.split('T')
      : DateTime.now().toISO().split('T');
    return `${dateParts[0]}T${time}:00`;
  };

  return (
    <TextField
      InputLabelProps={{
        shrink: true,
      }}
      type="time"
      {...props}
      variant={props.variant ?? 'outlined'}
      value={formatTime(props.value)}
      inputProps={{
        class: 'timepicker-custom',
      }}
      onChange={(e) => {
        props.onChange(reverseFormatTime(e.target.value));
      }}
      error={Boolean(props.error)}
      helperText={
        props.error !== undefined &&
        props.error !== null &&
        props.error.length > 0
          ? props.error[0]
          : ''
      }
    />
  );
};
