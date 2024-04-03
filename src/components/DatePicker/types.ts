import RenderInput, { DatePickerOnChange } from '@rnwonder/solid-date-picker';
import { IPopOverPositionX, IPopOverPositionY } from '@rnwonder/solid-date-picker/dist/components/Popover';

import { Accessor, JSX, JSXElement } from 'solid-js';

export type RangeValue = {
  startDate: string | undefined;
  endDate: string | undefined;
};

export type DatePickerProps =
  | ({
      type?: 'single';
      value: Date | string;
      setValue?: (values: Date | string) => void;
    } & DatePickerPropsOther)
  | ({
      type: 'range';
      value: RangeValue;
      setValue?: (values: RangeValue) => void;
    } & DatePickerPropsOther);

export type DatePickerPropsOther = {
  onChange?: (data: DatePickerOnChange) => void;
  componentsToAllowOutsideClick?: Array<HTMLElement>;
  renderInput?: typeof RenderInput;
  pickerPositionX?: IPopOverPositionX;
  pickerPositionY?: IPopOverPositionY;
  placeholder?: string;
  onClose?: () => void;
  onOpen?: () => void;
  inputProps?: JSX.InputHTMLAttributes<HTMLInputElement>;
  inputLabel?: Accessor<string>;
  inputWrapperWidth?: JSX.CSSProperties['width'];
  multipleDatesSeparator?: string;
  disabledDays: {
    start?: Date;
    end?: Date;
  };
  rangeDatesSeparator?: string;
  alwaysShowRangeStartYear?: boolean;
  formatInputLabel?: string;
  formatInputLabelRangeStart?: string;
  formatInputLabelRangeEnd?: string;
  label?: string | JSXElement;
  labelStyle?: Record<string, string>;
  inputClass?: string;
  inputWrapperClass?: string;
  error?:
    | string[]
    | null
    | undefined
    | { error: { [key: string]: string[] } | string[] | null | undefined };
  zIndex?: number;
};
