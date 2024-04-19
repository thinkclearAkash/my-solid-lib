/* Acceptable Format for TimepickerV2 value is '2021-09-01T12:00:00.000'
to make it work properly
and onChange it will return the same format.
*/
import { TextInput } from '../TextInput/TextInput';
import StyledProps from '@suid/system/styledProps';
import { JSXElement, mergeProps } from 'solid-js';
import './index.css';
import { DateTime } from 'luxon';

type TimepickerProps = {
  value: string;
  onChange: (value: string) => void;
  label?: string | JSXElement;
  error?: string | string[] | null;
  variant?: 'outlined' | 'filled' | 'standard';
  class?: string;
  sxProps?: StyledProps;
  disabled?: boolean;
};

export const TimePicker = (props: TimepickerProps) => {
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
    <TextInput
      InputLabelProps={{
        shrink: true,
      }}
      variant={props.variant || 'outlined'}
      type="time"
      {...props}
      value={formatTime(props.value)}
      inputProps={{
        class: 'timepicker-custom',
      }}
      onChange={(value) => {
        props.onChange(reverseFormatTime(value as string));
      }}
      label=""
      error={
        props.error !== undefined &&
        props.error !== null &&
        props.error.length > 0
          ? props.error[0]
          : ''
      }
    />
  );
};
