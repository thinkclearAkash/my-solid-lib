import { DialogProps } from '@suid/material/Dialog';
import { JSXElement } from 'solid-js';

type DialogBoxPropsWithoutOpen = Omit<DialogProps, 'open'>;

export type DialogBoxProps = DialogBoxPropsWithoutOpen & {
  title: string | JSXElement;
  onSubmit?: () => void;
  onSubmitText?: string;
  onCancel?: () => void;
  onCancelText?: string;
  isDialogOpen: boolean;
  closeDialogBox: () => void;
};
