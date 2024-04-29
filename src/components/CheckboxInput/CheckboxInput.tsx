import { Checkbox, FormControlLabel, FormLabel } from '@suid/material';
import * as ST from '@suid/types';
import { Component, createSignal, mergeProps } from 'solid-js';
import { SxProps } from '@suid/system';
import FormErrorComponent from '../FormErrorComponent/FormErrorComponent';

type CheckboxFieldProps = {
  name?: string;
  label: string;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  color?: 'primary' | 'secondary' | 'default';
  required?: boolean;
  error?: string | string[] | null;
  disabled?: boolean;
  inputProps?: ST.InferPropsType<typeof Checkbox>['inputProps'];
  id?: string;
  sxProps?: SxProps;
  size?: 'small' | 'medium';
  disableStyles?: boolean;
};
export const CheckboxInput: Component<CheckboxFieldProps> = (props) => {
  props = mergeProps(
    {
      required: false,
    },
    props,
  );
  const [value, setValue] = createSignal(props.checked);
  const handleCheckboxChange = (
    _: ST.ChangeEvent<HTMLInputElement>,
    checked: boolean,
  ) => {
    setValue(checked);
    props.onChange && props.onChange(checked);
  };
  return (
    <>
      <FormControlLabel
        control={
          <Checkbox
            id={props.id}
            size={props.size}
            inputProps={props.inputProps}
            checked={value()}
            onChange={handleCheckboxChange}
            disabled={props.disabled}
            sx={
              Boolean(props.disableStyles)
                ? {
                    '&.Mui-disabled': {
                      color: 'text-[#000000] opacity-40',
                    },
                  }
                : undefined
            }
          />
        }
        label={
          <FormLabel
            required={props.required}
            component="legend"
            error={Boolean(props.error)}
            class={
              Boolean(props.disableStyles)
                ? '!text-[#000000]'
                : Boolean(props.disabled)
                  ? 'text-[#000000] opacity-40'
                  : ''
            }
          >
            {props.label}
          </FormLabel>
        }
        labelPlacement="end"
        sx={props.sxProps}
      />
      <FormErrorComponent error={props.error} />
    </>
  );
};
