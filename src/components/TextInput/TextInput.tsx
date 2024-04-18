import { Component, JSXElement, mergeProps, JSX } from 'solid-js';
import { STextField, InputAdornment, SxProps, InputProps, InputLabelProps } from '../common';

export type TextInputProps = {
  name?: string;
  label: string | JSXElement;
  id?: string;
  multiline?: boolean;
  rows?: number;
  type?:
    | 'password'
    | 'number'
    | 'search'
    | 'email'
    | 'date'
    | 'text'
    | 'time'
    | 'event';
  error?: string | string[] | null;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  helperText?: string;
  autoComplete?: string;
  variant?: 'outlined' | 'filled' | 'standard';
  size?: 'small' | 'medium';
  onBlur?: () => void;
  sxProps?: SxProps;
  classes?: string;
  value?: string | number | null;
  onChange?: (value: string | number | null | Event) => void;
  InputAdornmentPosition?: 'start' | 'end';
  InputAdornmentText?: string;
  startAdornmentFlag?: boolean;
  maxLength?: number;
  noErrorMessage?: boolean;
  icon?: JSXElement;
  significantDigits?: number;
  inputRef?: (input: HTMLInputElement) => void;
  onKeyDown?: (
    e: KeyboardEvent & {
      currentTarget: HTMLDivElement;
      target: Element;
    },
  ) => void;
  inputProps?: JSX.InputHTMLAttributes<HTMLInputElement>;
  InputProps?: Partial<InputProps>;
  onKeyPress?: (e: KeyboardEvent) => void;
  onFocus?: (e: FocusEvent) => void;
  onInput?: (e: Event) => void;
  InputLabelProps?: Partial<InputLabelProps>;
  max?: string;
  min?: string;
};
export const TextInput: Component<TextInputProps> = (props) => {
  const defaultProps: Partial<TextInputProps> = {
    type: 'text',
    error: null,
    significantDigits: props.type === 'number' ? 2 : undefined,
    placeholder: '',
    disabled: false,
    required: false,
    helperText: '',
    multiline: false,
    rows: 3,
  };

  props = mergeProps(defaultProps, props);
  const handleInputChange = (event: Event, value: string) => {
    if (props.onChange) {
      let finalValue;
      if (props.type === 'number') {
        const parsedValue = parseFloat(value);
        if (isNaN(parsedValue)) {
          finalValue = null;
        } else {
          const decimalIndex = value.indexOf('.');
          if (props.significantDigits !== undefined) {
            // eslint-disable-next-line max-depth
            if (
              decimalIndex !== -1 &&
              value.length - decimalIndex - 1 > props.significantDigits
            ) {
              finalValue = value.slice(
                0,
                decimalIndex + (props.significantDigits + 1),
              ); // Slice the string to keep only n digits after the decimal point, we use n+1 here, cause indexes
            } else {
              finalValue = value; // Store the user's input as a string
            }
          } else {
            finalValue = value; // Store the user's input as a string
          }
        }
      } else {
        finalValue = value;
      }
      props.onChange(finalValue);
    }
  };

  return (
    <STextField
      id={props.id}
      fullWidth
      inputRef={props.inputRef}
      type={props.type}
      size={props.size || 'medium'}
      label={props.label}
      name={props.name}
      multiline={props.multiline}
      rows={props.rows}
      error={Boolean(props.error)}
      placeholder={props.placeholder}
      required={props.required}
      variant={props.variant || 'outlined'}
      autoComplete="off"
      helperText={
        props.error?.length > 0 && !Boolean(props.noErrorMessage)
          ? props.error[0]
          : ''
      }
      inputProps={{
        ...props.inputProps,
        maxlength: props.maxLength,
        max: props.max,
        min: props.min,
      }}
      onKeyUp={(e) => {
        if (
          props.type === 'number' &&
          (e.key === 'ArrowUp' || e.key === 'ArrowDown')
        ) {
          e.stopPropagation();
          e.preventDefault();
        }
      }}
      onKeyDown={(e) => {
        if (props.onKeyDown) {
          return props.onKeyDown(e);
        }
        if (
          props.type === 'number' &&
          (e.key === 'ArrowUp' || e.key === 'ArrowDown')
        ) {
          e.stopPropagation();
          e.preventDefault();
        }
      }}
      onBlur={props.onBlur}
      onKeyPress={props.onKeyPress}
      sx={props.sxProps}
      class={props.classes}
      value={props.value?.toString()}
      disabled={props.disabled}
      InputProps={{
        ...props.InputProps,
        startAdornment: (props.startAdornmentFlag ?? false) && (
          <InputAdornment
            class="break-words"
            position={props.InputAdornmentPosition ?? 'start'}
          >
            {props.InputAdornmentText}
            {props.icon}
          </InputAdornment>
        ),
      }}
      onChange={props.type === 'event' ? props.onChange : handleInputChange}
      onFocus={props.onFocus}
      onInput={props.onInput}
      InputLabelProps={props.InputLabelProps}
    />
  );
};
