// import { PickerValue } from '@rnwonder/solid-date-picker';
// import utils from '@rnwonder/solid-date-picker/utilities';

// import { RangeValue } from '../types';

// //TODO: fix this function later
// export function convertRangeDate(
//   rangeValue: RangeValue,
//   inputFormat?: string,
// ): PickerValue {
//   if (
//     typeof rangeValue.startDate === 'undefined' ||
//     rangeValue.startDate === ''
//   ) {
//     return { value: {}, label: '' };
//   }

//   const startDate =
//     rangeValue.startDate as instanceof Date
//       ? rangeValue.startDate
//       : new Date(rangeValue.startDate);

//   const startDateObject = utils().convertDateToDateObject(startDate);
//   const startLuxonDate = utils().formatDate(startDateObject, {
//     format: inputFormat,
//   });

//   if (typeof rangeValue.endDate === 'undefined' || rangeValue.endDate === '') {
//     return {
//       value: {
//         startDateObject,
//         endDateObject: {},
//       },
//       label: `${startLuxonDate} - `,
//     };
//   }

//   const endDate =
//     rangeValue.endDate instanceof Date
//       ? rangeValue.endDate
//       : new Date(rangeValue.endDate);

//   const endDateObject = utils().convertDateToDateObject(endDate);

//   const endLuxonDate = utils().formatDate(endDateObject, {
//     format: inputFormat,
//   });

//   return {
//     value: {
//       startDateObject,
//       endDateObject,
//     },
//     label: `${startLuxonDate} - ${endLuxonDate}`,
//   };
// }
