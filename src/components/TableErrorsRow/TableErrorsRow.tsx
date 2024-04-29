/*eslint-disable*/
// import { Notification } from '@components/Notification';
// import { List, ListItem, Stack, TableCell, TableRow } from '../common';
// import { Component, Show } from 'solid-js';

// import classes from './classes';

// export type TableErrorRowProps = {
//   columnsLength: number;
//   tableErrors: string[];
// };

// export const TableRowErrors: Component<TableErrorRowProps> = (
//   props: TableErrorRowProps,
// ) => {

//   return (
//     <Show when={props.tableErrors.length > 0}>
//       <TableRow class={classes.tableRow}>
//         <TableCell colspan={props.columnsLength + 1} class={classes.errorRow}>
//           <Notification
//             type="tableError"
//             tableRowNotification
//             text={
//               <Stack spacing={0.5}>
//                 <List disablePadding class={classes.errorListContainer}>
//                   {props.tableErrors.map((error) => (
//                     <ListItem
//                       disablePadding
//                       class={classes.errorListLine}
//                     >{`${error}`}</ListItem>
//                   ))}
//                 </List>
//               </Stack>
//             }
//           />
//         </TableCell>
//       </TableRow>
//     </Show>
//   );
// };



// Steps to use 
// Add utils function 
// export const getTableErrors = ( path: string, fields:string[], index: number): string[] => {
//   const errors: string[] = [];

//   fields.forEach((field) => {
//     if (!orderStore.orderFormError) return;

//     const fieldErrorPath = path
//       .replace('{index}', `${index}`)
//       .replace('{field}', field);

//     const fieldError = orderStore.orderFormError[fieldErrorPath];
//     if (Array.isArray(fieldError)) {
//       errors.push(fieldError[0]);
//     }
//   });
//   console.log('errors', errors)
//   return errors;
// };

// use like this 
// <TableRowErrors
// columnsLength={headers.length}
// tableErrors={getTableErrors(
//   `loads[${props.tabIndex}].lineItems[{index}].{field}`, 
//   ['rate', 'quantity', 'type'],
//   index
//   )
// }
// // index={index}
// // fields={['rate', 'quantity', 'type']}
// // path={`loads[${props.tabIndex}].lineItems[{index}].{field}`}
// />