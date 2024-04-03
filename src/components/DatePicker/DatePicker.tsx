/* Accept format in value  - 2022-01-01T00:00:00
For Error message, you must provide error Props
*/
/*eslint-disable*/
// import FormErrorComponent from '@components/forms/FormErrorComponent';
import DatePicker, {
  DatePickerProps,
  PickerValue,
} from '@rnwonder/solid-date-picker';
import CalendarMonthIcon from '@suid/icons-material/CalendarMonth';
import {
  Box,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@suid/material';
import moment from 'moment';
import {
  Accessor,
  Component,
  JSXElement,
  mergeProps,
  Setter,
  splitProps,
} from 'solid-js';

import { RangeValue } from './types';
import { convertSingleDate } from './utils';

type DatePickerPropsWithoutValue = Omit<
  DatePickerProps,
  'value' | 'disabledDays'
>;

type CommonDatePickerProps = {
  error?: string | string[] | undefined;
  customRenderInput?: JSXElement;
  label?: string;
  labelStyle?: Record<string, string>;
  disabled?: boolean;
  disabledDays?: { start: Date; end: Date };
} & DatePickerPropsWithoutValue;

export type IDatePickerProps =
  | ({
      value: string;
      type: 'single';
      handleChange: (value: string) => void;
    } & CommonDatePickerProps)
  | ({
      value: RangeValue;
      type: 'range';
      handleChange: (value: RangeValue) => void;
    } & CommonDatePickerProps);

const DEFAULTS = {
  type: 'single',
  renderInput: undefined,
  placeholder: 'Select Date.....',
  formatInputLabel: 'dd MM yyyy',
  inputWrapperWidth: '100%',
  inputClass:
    'bg-white  rounded-lg outline-none  !border-[#c4c7cc] !border-[thin]',
  inputWrapperClass: 'w-auto',
  errorBorder: '!border-[thin] border-[#d32f2f] focus:border-[#d32f2f]',
};

const Input = (props: {
  value: Accessor<PickerValue>;
  error: string | string[] | undefined;
  showDate: () => void;
  label: string;
  disabled?: boolean;
}) => {
  return (
    <FormControl fullWidth variant="outlined" class={'bg-white rounded-md'}>
      <Box
        onClick={props.showDate}
        class={`${(props.disabled ?? false) && 'pointer-events-none'}`}
      >
        <InputLabel for="outlined-adornment-password">{props.label}</InputLabel>
        <OutlinedInput
          placeholder="Select Date..."
          id="outlined-adornment-password"
          value={props.value().label}
          endAdornment={
            <InputAdornment position="end">
              <CalendarMonthIcon
                class={`${
                  props.disabled ?? false ? 'text-[#d0d0cd]' : 'text-[#026EA1]'
                }`}
              />
            </InputAdornment>
          }
          error={Boolean(props.error)}
          label={props.label}
          disabled={props.disabled}
          fullWidth
        />
        {props.error && <span>{props.error}</span>}
      </Box>
    </FormControl>
  );
};

export const SDatePicker: Component<IDatePickerProps> = (props) => {
  const [load, rest] = splitProps(props, [
    'value',
    'setValue',
    'onChange',
    'inputClass',
    'inputWrapperClass',
    'formatInputLabel',
    'placeholder',
    'label',
    'labelStyle',
    'inputWrapperWidth',
    'type',
    'zIndex',
    'error',
    'disabled',
  ]);
  const mergedProps = mergeProps(DEFAULTS, load);

  const setValue = (value: PickerValue) => {
    if (props.type === 'single') {
      const v = moment(value.value.selected).format('YYYY-MM-DDTHH:mm:ss');
      props.handleChange(v);
    }
    if (props.type === 'range') {
      props.handleChange({
        startDate: moment(value.value.start).format('YYYY-MM-DDTHH:mm:ss'),
        endDate:
          value.value.end === ''
            ? ''
            : moment(value.value.end).format('YYYY-MM-DDTHH:mm:ss'),
      });
    }
  };

  // eslint-disable-next-line prefer-const
  let dropdown: unknown | undefined = undefined;

  return (
    <DatePicker
      {...rest}
      placeholder={mergedProps.placeholder}
      type={load.type}
      value={() =>
        props.type === 'single'
          ? convertSingleDate(props.value, mergedProps.formatInputLabel)
          : convertSingleDate(props.value, mergedProps.formatInputLabel)
      }
      setValue={setValue as Setter<PickerValue>}
      shouldHighlightWeekends
      weekDaysType="single"
      renderInput={
        props.renderInput !== undefined
          ? props.renderInput
          : (props) => (
              <Input
                {...props}
                error={load.error}
                label={mergedProps.label as string}
                disabled={load.disabled}
              />
            )
      }
      inputWrapperWidth={mergedProps.inputWrapperWidth}
      inputWrapperClass={mergedProps.inputWrapperClass}
      inputClass={mergedProps.inputClass}
      zIndex={9999}
      ref={dropdown}
      shouldCloseOnSelect
      disabledDays={
        props.disabledDays && [
          {
            start: {
              year: props.disabledDays.start.getFullYear(),
              month: props.disabledDays.start.getMonth(),
              day: props.disabledDays.start.getDate(),
            },
            end: {
              year: props.disabledDays.end.getFullYear(),
              month: props.disabledDays.end.getMonth(),
              day: props.disabledDays.end.getDate() - 1,
            },
          },
        ]
      }
    />
  );
};
