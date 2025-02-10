import { FormControl } from '@suid/material';
import { Component, JSXElement, mergeProps } from 'solid-js';

import { TextInput } from '../TextInput';

export type TextAreaFieldProps = {
  name?: string;
  label?: string | JSXElement;
  value?: string;
  onChange?: (value: string) => void;
  error?: string | string[] | null;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  rows?: number;
  maxRows?: number;
  defaultValue?: string;
  onBlur?: (e: FocusEvent) => void;
  maxLength?: number;
  onKeyPress?: (e: KeyboardEvent) => void;
  class?: string;
  shrink?: boolean;
  backgroundColor?: string;
  invertPadding?: boolean;
  inputProps?: Record<string, unknown>;
  onFocus?: () => void;
};

export const TextAreaField: Component<TextAreaFieldProps> = (props) => {
  const defaultProps: Partial<TextAreaFieldProps> = {
    error: '',
    placeholder: 'Enter text',
    disabled: false,
    required: false,
  };
  const handleInputChange = (value: string | number | Event | null) => {
    if (props.onChange) {
      props.onChange(value as string);
    }
  };

  const mp = mergeProps(defaultProps, props);

  return (
    <FormControl
      fullWidth
      sx={{
        '& .MuiOutlinedInput-root': {
          backgroundColor: props.backgroundColor,
          ...(Boolean(props.invertPadding)
            ? {
                padding: '0',
                '& > textarea': {
                  padding: '8.5px 14px',
                },
              }
            : {}),
        },
      }}
    >
      <TextInput
        label={mp.label}
        multiline
        rows={mp.rows}
        name={mp.name}
        onKeyPress={mp.onKeyPress}
        error={Boolean(props.error)}
        helperText={
          Array.isArray(props.error) && props.error.length > 0
            ? props.error[0]
            : Boolean(props.error)
              ? props.error
              : ''
        }
        placeholder={mp.placeholder}
        disabled={mp.disabled}
        required={mp.required}
        variant="outlined"
        value={mp.value}
        onChange={handleInputChange}
        onFocus={mp.onFocus}
        maxLength={mp.maxLength}
        onBlur={mp.onBlur}
        InputLabelProps={{ shrink: mp.shrink }}
        classes={mp.class}
        inputProps={{ maxLength: mp.maxLength, ...mp.inputProps }}
      />
    </FormControl>
  );
};
