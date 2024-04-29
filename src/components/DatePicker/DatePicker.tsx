import { mergeProps } from 'solid-js';
import { DateTime } from 'luxon';
import { FormErrorComponent } from '../FormErrorComponent';
import { FormControl, SxProps } from '../common'
import { TextInput } from '../TextInput';

export type Props = {
  // variant?: 'contained' | 'outlined' | 'text' | string;
  // size?: 'small' | 'medium' | 'large';
  sx?: SxProps;
  class?: string;
  name?: string;
  minDate?: string;
  maxDate?: string;
  handleChange: (value: string, index?: number) => void;
  value?: string;
  placeholder?: string;
  error?: string | string[];
  errorBorder?: string;
  disabled?: boolean;
  label?: string;
};
const DEFAULTS = {
  minDate: DateTime.fromISO(DateTime.now().toString()).toFormat('yyyy-MM-dd'),
  maxDate: DateTime.fromISO(
    DateTime.now().plus({ years: 5 }).toString(),
  ).toFormat('yyyy-MM-dd'),
  errorBorder:
    'w-full h-full border-red-600 border text-red-600 rounded-md py-4 px-3.5',
  class:
    'w-full h-full py-4 px-3.5 border border-gray-300 rounded-md hover:border-black',
};

export const TDatePicker = (props: Props) => {
  props = mergeProps(DEFAULTS, props);

  const formatDate = () => {
    return DateTime.fromISO(props.value as string, { zone: 'utc' })
      .setZone('local')
      .toFormat('yyyy-MM-dd');
  };

  return (
    <>
      <FormControl
        fullWidth
        variant="outlined"
        class={'bg-white rounded-md h-full'}
      >
        <TextInput
          label={props.label ?? ''}
          type="date"
          name={props.name}
          value={formatDate()}
          max={props.maxDate}
          min={props.minDate}
          onChange={(value) => {
            if (value !== '') {
              const formattedDate = DateTime.fromFormat(
                value as string,
                'yyyy-MM-dd',
              ).toISO();
              props.handleChange(formattedDate as string);
            }
          }}
          classes={Boolean(props.error) ? props.errorBorder : props.class}
          disabled={props.disabled}
          InputLabelProps={{ shrink: true }}
        />
        <FormErrorComponent error={props.error as string[]} showHelpertext />
      </FormControl>
    </>
  );
};
