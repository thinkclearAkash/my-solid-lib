import { PickerValue } from '@rnwonder/solid-date-picker';
import utils from '@rnwonder/solid-date-picker/utilities';

export function convertSingleDate(
  value: unknown,
  inputFormat: string,
): PickerValue {
  if (value === '' || (!(value instanceof Date) && typeof value !== 'string')) {
    return { value: {}, label: '' };
  }
  const dateValue = value instanceof Date ? value : new Date(value);
  const selectedDateObject = utils().convertDateToDateObject(dateValue);

  return {
    value: {
      selectedDateObject,
    },
    label: utils().formatDate(selectedDateObject, { format: inputFormat }),
  };
}
