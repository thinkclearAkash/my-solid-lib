import { Component, JSXElement, mergeProps } from 'solid-js';

import { TextInput } from '../TextInput/TextInput';

type TextAreaFieldProps = {
  name?: string;
  label: string | JSXElement;
  value?: string;
  onChange?: (value: string) => void;
  error?: string | string[] | null;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  rows?: number;
  maxRows?: number;
  defaultValue?: string;
  onBlur?: (ev: HTMLInputElement) => void;
  maxLength?: number;
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
    <TextInput
      label={mp.label}
      multiline
      rows={4}
      name={mp.name}
      error={(props.error && props.error.length > 0) ? props.error[0] : ''}
      placeholder={mp.placeholder}
      disabled={mp.disabled}
      required={mp.required}
      variant="outlined"
      value={mp.value}
      onChange={handleInputChange}
      maxLength={mp.maxLength}
    />
  );
};
