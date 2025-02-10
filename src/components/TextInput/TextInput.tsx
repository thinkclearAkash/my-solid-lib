/* eslint-disable complexity */
import { InputAdornment, TextField as STextField } from '@suid/material';
import InputProps from '@suid/material/Input/InputProps';
import InputLabelProps from '@suid/material/InputLabel/InputLabelProps';
import { SxProps } from '@suid/system';
import { isArray } from 'lodash';
import {
  Component,
  createEffect,
  createSignal,
  JSX,
  JSXElement,
  mergeProps,
} from 'solid-js';

export type TextInputProps = {
  name?: string;
  label?: string | JSXElement;
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
    | 'event'
    | 'file';
  error?: string | string[] | null | boolean;
  placeholder?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  required?: boolean;
  helperText?: string | string[] | null;
  autoComplete?: string;
  variant?: 'outlined' | 'filled' | 'standard';
  size?: 'small' | 'medium';
  onBlur?: (e: FocusEvent) => void;
  sxProps?: SxProps;
  classes?: string;
  value?: string | number;
  onChange?:
    | ((value: string | number | null | Event) => void)
    | ((value: string) => void);
  InputAdornmentPosition?: 'start' | 'end';
  InputAdornmentText?: string;
  startAdornmentFlag?: boolean;
  maxLength?: number;
  noErrorMessage?: boolean;
  icon?: JSXElement;
  significantDigits?: number;
  onFocus?: (event: FocusEvent) => void;
  onKeyDown?: (e: KeyboardEvent) => void;
  inputRef?: (input: HTMLInputElement) => void;
  inputProps?: JSX.InputHTMLAttributes<HTMLInputElement>;
  InputProps?: Partial<InputProps>;
  onKeyPress?: (e: KeyboardEvent) => void;
  onInput?: (e: Event) => void;
  InputLabelProps?: Partial<InputLabelProps>;
  max?: string;
  min?: string;
  endAdornment?: JSXElement;
  fontSize?: string;
  dataTestId?: string;
  noBackground?: boolean;
  showInCurrencyFormat?: boolean;
  //NOTE: Make the change in the TextInput component to provide a wrapper for this and remove the condition
  formatAmount?: (amount: number, options?: {}, customFallback?: string, showInCurrencyFormat?: boolean) => string;
};

export const TextInput: Component<TextInputProps> = (props) => {
  const [isFocused, setIsFocused] = createSignal(false);

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
    noBackground: true,
  };

  props = mergeProps(defaultProps, props);
  const [value, setValue] = createSignal(props.value);

  createEffect(() => {
    setValue(() => {
      if (!isFocused() && Boolean(props.showInCurrencyFormat)) {
        if (Boolean(props.value)) {
          return props.formatAmount && props.formatAmount(
            Number(props.value),
            {},
            '-',
            props.showInCurrencyFormat,
          );
        }

        return Boolean(props.name) ? undefined : '';
      }

      return props.value ?? (Boolean(props.name) ? undefined : '');
    });
  });

  const handleInputChange = (event: Event, value: string) => {
    if (props.type === 'event') {
      (props.onChange as (value:Event) => void)?.(event);
    } else {
      if (props.onChange) {
        let finalValue;
        if (
          (Boolean(props.maxLength) && value.length < props.maxLength! + 1) ||
          props.maxLength === undefined
        ) {
          if (props.type === 'number') {
            const decimalIndex = value.indexOf('.');
            // eslint-disable-next-line max-depth
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
          } else {
            finalValue = value;
          }
          props.onChange(finalValue);
        }
      }
    }
  };

  //Here be dragons
  //This is a last resort solution, how javascript handles numbers, and SUID's number input (and also generally the <input type="number"> html element) are to blame.
  //Why on earth do browsers have to implement this so differently? It's a number input, it should only accept numbers, right? But no, it's a mess.
  //So, we have to resort to this, to prevent the user from inputting anything other than numbers, and "-", and ".".
  const isAllowedKey = (k: string) => {
    const retr = [
      'ArrowRight',
      'ArrowLeft',
      'Backspace',
      '.',
      '-',
      '0',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      'Tab',
    ].includes(k);
    return retr;
  };

  /* Here be dragons. The type="number" dealio will not work like anyone wants it to. See comment for isallowedkeys*/
  return (
    <STextField
      id={props.id}
      fullWidth={props.fullWidth ? props.fullWidth : true}
      inputRef={props.inputRef}
      type={props.type === 'number' ? 'text' : props.type}
      size={props.size || 'small'}
      label={props.label}
      name={props.name}
      multiline={props.multiline}
      rows={props.rows}
      error={Boolean(props.error)}
      placeholder={props.placeholder}
      required={props.required}
      variant={props.variant || 'outlined'}
      autoComplete="new-password"
      helperText={
        !Boolean(props.noErrorMessage)
          ? typeof props.error === 'string'
            ? props.error
            : isArray(props.error) && props.error[0] || ''
          : ''
      }
      onKeyUp={(e: KeyboardEvent) => {
        if (props.type === 'number' && !isAllowedKey(e.key)) {
          e.stopPropagation();
          e.preventDefault();
        }
      }}
      onKeyDown={(e: KeyboardEvent) => {
        if (props.type === 'number' && !isAllowedKey(e.key)) {
          e.stopPropagation();
          e.preventDefault();
        } else {
          props.onKeyDown?.(e);
        }
      }}
      onBlur={(e) => {
        setIsFocused(false);
        props.onBlur?.(e);
      }}
      onKeyPress={props.onKeyPress}
      sx={{
        '& .MuiInputLabel-root.Mui-focused': {
          fontWeight: 600, // Font weight when focused
        },
        '& .MuiInputLabel-root.MuiFormLabel-filled:not(.Mui-disabled):not(.Mui-error)':
          {
            fontWeight: 600, // Font weight when there is a value
            color: '#123b50',
          },
        minHeight: !Boolean(props.multiline) ? '36px' : undefined,
        '& label': {
          fontSize: '14px',
        },
        '& input': {
          fontSize: '14px',
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderWidth: '1px',
            borderColor: '#80b6cf',
            fontSize: '14px',
            color: '#123b50',
            fontWeight: 600,
          },
        },
        //font size override, not recommended unless no label is used
        '& .MuiInputBase-input': {
          fontSize: props.fontSize,
        },
        backgroundColor: Boolean(props.noBackground) ? '' : 'White',
        ...props.sxProps,
      }}
      class={props.classes}
      value={value()}
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
        endAdornment: props.endAdornment,
        class: 'h-full bg-white',
        inputProps: {
          min: props.min,
          max: props.max,
          maxLength: props.maxLength,
          ...props.inputProps,
        },
      }}
      onChange={handleInputChange}
      onFocus={(e) => {
        setIsFocused(true);
        props.onFocus?.(e);
      }}
      onInput={props.onInput}
      InputLabelProps={props.InputLabelProps}
    />
  );
};
