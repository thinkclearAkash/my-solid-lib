import InputProps from '@suid/material/Input/InputProps';
import InputLabelProps from '@suid/material/InputLabel/InputLabelProps';
import ModalProps from '@suid/material/Modal/ModalProps';

export type ContactProps = {
  name: string | undefined;
  phone1?: string;
  extension1?: string | null;
  email?: string | null | undefined;
  fax?: string;
  accountingGroup?: string;
  phone1Ext?: number | null;
};

export type {
    InputProps,
    InputLabelProps,
    ModalProps,
}