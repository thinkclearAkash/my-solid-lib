
import { JSX } from 'solid-js';
import { FormControl, FormControlLabel, FormLabel, RadioGroup, SRadio } from '../common';

export type RadioOption = {
  label: string | JSX.Element;
  value: unknown;
};

export type Props = {
  id: string;
  label?: string;
  labelPlacement?: 'start' | 'top' | 'bottom' | 'end';
  disabled?: boolean;
  options: RadioOption[];
  color?: 'default' | 'primary' | 'secondary';
  classes?: string;
  onClick?: (value: unknown) => void;
  flowDirection?: 'row' | 'column';
  name?: string;
  value: unknown;
  optionStyles?: Record<string, string>;
  radioStyles?: Record<string, string>;
};

export const Radio = (props: Readonly<Props>) => {
  return (
    <FormControl class={props.classes}>
      <FormLabel id={props.id}>{props.label}</FormLabel>
      <RadioGroup
        name={props.name}
        aria-labelledby={props.id}
        sx={{ flexDirection: props.flowDirection }}
      >
        {props.options.map((option) => (
          <>
            <FormControlLabel
              value={option.value}
              disabled={props.disabled}
              sx={props.optionStyles}
              control={
                <SRadio
                  checked={props.value === option.value}
                  onChange={() => props.onClick && props.onClick(option.value)}
                  color={props.color}
                  sx={{
                    color: '#016fa1ff',
                    '&.Mui-checked': {
                      color: '#016fa1ff',
                    },
                    ...props.radioStyles,
                  }}
                />
              }
              label={option.label}
              labelPlacement={props.labelPlacement || 'end'}
            />
          </>
        ))}
      </RadioGroup>
    </FormControl>
  );
}
