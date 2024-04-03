import { Checkbox as SCheckbox, FormControlLabel } from '@suid/material';
import { SxProps } from '@suid/system';
import { splitProps } from 'solid-js';

export type Props = {
  label: string;
  id?: string;
  disabled?: boolean;
  checked?: boolean;
  value?: boolean;
  onChange?: (val: boolean) => void;
  color?: 'default' | 'primary' | 'secondary';
  sxProps?: SxProps;
  labelPlacement?: 'top' | 'bottom' | 'end' | 'start';
  name?: string;
};

function Checkbox(props: Readonly<Props>) {
  const [load, rest] = splitProps(props, [
    'sxProps',
    'color',
    'onChange',
    'value',
    'checked',
    'disabled',
    'id',
    'label',
    'sxProps',
    'labelPlacement',
    'name',
  ]);

  return (
    <FormControlLabel
      label={load.label}
      labelPlacement={load.labelPlacement ?? 'end'}
      sx={{
        whiteSpace: 'nowrap',
        ...load.sxProps,
      }}
      control={
        <SCheckbox
          name={load.name}
          id={load.id}
          disabled={load.disabled}
          checked={load.checked}
          value={load.value}
          onChange={(_, checked) =>
            load.onChange && load.onChange(Boolean(checked))
          }
          color={load.color}
          {...rest}
        />
      }
    />
  );
}

export default Checkbox;
