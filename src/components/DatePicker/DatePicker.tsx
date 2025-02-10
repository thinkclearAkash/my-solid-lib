// NOTE:- Return format will be in 'YYYY-MM-DDTHH:MM:SS' format always
// NOTE:- Do any necessary conversion in the parent component if needed not here

import { TextInput } from '../TextInput';
import { FormControl } from '@suid/material';
import { SxProps } from '@suid/system';
import { isEmpty, isNumber } from 'lodash';
import { DateTime } from 'luxon';
import { createSignal, mergeProps } from 'solid-js';

export type DatePickerProps = {
  sx?: SxProps;
  class?: string;
  name?: string;
  handleChange: (value: string, index?: number) => void;
  value?: string;
  placeholder?: string;
  error?: string[] | null | undefined;
  errorBorder?: string;
  disabled?: boolean;
  label?: string;
  required?: boolean;
  size?: 'medium' | 'small' | undefined;
  type?: 'date' | 'time';
  isUTC?: boolean;
  fullWidth?: boolean;
  fontSize?: string;
  noBackground?: boolean;
  asRawDate?: boolean;
  dataTestId?: string;
};
const DEFAULTS = {
  errorBorder:
    'w-full h-full border-red-600 border text-red-600 rounded-md py-4 px-3.5',
  class:
    'w-full h-full py-4 px-3.5 border border-gray-300 rounded-md hover:border-black',
  noBackground: true,
};

export const DatePicker = (props: DatePickerProps) => {
  props = mergeProps(DEFAULTS, props);
  const [errorMessage, setErrorMessage] = createSignal<string | undefined>('');

  const formatDate = () => {
    return DateTime.fromISO(props.value as string, {
      zone: 'utc',
    }).toFormat('yyyy-MM-dd');
  };

  return (
    <>
      <FormControl
        fullWidth={props.fullWidth === undefined ? true : props.fullWidth}
        variant="outlined"
        class={`${
          Boolean(props.noBackground) ? 'rounded-md' : 'bg-white rounded-md'
        }`}
        sx={{ ...props.sx }}
        disabled={props.disabled}
      >
        <TextInput
          fontSize={props.fontSize}
          label={props.label ?? ''}
          required={props.required}
          type={props.type ?? 'date'}
          name={props.name}
          value={formatDate()}
          onChange={(value) => {
            if (props.asRawDate === true) {
              props.handleChange(value as string);
              return;
            }

            const d = DateTime.fromFormat(value as string, 'yyyy-MM-dd')
              .set({
                hour: 0,
                minute: 0,
                second: 0,
              })
              .toISO({ includeOffset: false, suppressMilliseconds: true });
            props.handleChange(d!);
          }}
          onBlur={() => {
            const date = new Date(formatDate());
            if (isNaN(date.getTime())) {
              setErrorMessage('Invalid Date');
            } else if (
              isNumber(date.getFullYear()) &&
              date.getFullYear() < 2000
            ) {
              setErrorMessage('Invalid Date');
            } else {
              !isEmpty(errorMessage()) && setErrorMessage('');
            }
          }}
          error={props.error || errorMessage()}
          classes={Boolean(props.error) ? props.errorBorder : props.class}
          disabled={props.disabled}
          InputLabelProps={{ shrink: true }}
          size={props.size}
          InputProps={{ inputProps: { min: '2000-01-01' } }}
          dataTestId={props.dataTestId}
        />
      </FormControl>
    </>
  );
};
