import toast, { Toast } from 'solid-toast';
import { Warning } from '@suid/icons-material';

import {
  CustomToast,
  InboxToast,
  MultiLineToast,
  WithTimerToast,
} from './CustomToasts';
import { mergeProps } from 'solid-js';

type OpenToastProps = {
  message: string;
  label?: string;
  position?: ToastPosition;
  type?: ToastType;
  title?: string;
  duration?: number;
};

export enum ToastType {
  Success = 'Success',
  Error = 'Error',
  Loading = 'Loading',
  Custom = 'Custom',
  MultiLine = 'MultiLine',
  Inbox = 'Inbox',
  WithTimer = 'WithTimer',
  Caution = 'Caution',
}

export type ToastPosition =
  | 'top-right'
  | 'bottom-center'
  | 'bottom-left'
  | 'bottom-right'
  | 'top-center'
  | 'top-left';

const defaultToastOptions: Partial<OpenToastProps> = {
  duration: 1500,
};

export const openToast = (props: OpenToastProps) => {
  props = mergeProps(defaultToastOptions, props);
  switch (props.type) {
    case ToastType.Success:
      toast.success(props.message, {
        duration: props.duration,
        position: props.position,
      });
      break;

    case ToastType.Error:
      toast.error(props.message, {
        duration: props.duration,
        position: props.position,
      });
      break;

    case ToastType.Loading:
      toast.loading(props.message, {
        duration: props.duration,
        position: props.position,
      });
      break;

    case ToastType.Caution:
      toast(props.message, {
        icon: <Warning style={{ color: '#F59D25' }} />,
        position: props.position,
      });
      break;

    case ToastType.Custom:
      toast.custom(
        (t: Toast) => (
          <CustomToast
            message={props.message}
            onClose={() => console.log('clear')}
            visible={t.visible}
          />
        ),
        {
          duration: props.duration,
          position: props.position,
        },
      );
      break;

    case ToastType.MultiLine:
      toast.custom(() => <MultiLineToast message={props.message} />, {
        duration: props.duration,
        position: props.position,
      });
      break;

    case ToastType.Inbox:
      toast.custom(
        (t) => (
          <InboxToast
            title={props.title || 'Inbox Message'}
            message={props.message}
            onClose={() => toast.dismiss(t.id)}
          />
        ),
        { duration: props.duration, position: props.position },
      );
      break;

    case ToastType.WithTimer:
      toast.custom(
        (t) => (
          <WithTimerToast
            message={props.message}
            duration={props.duration as number}
            onClose={() => toast.dismiss(t.id)}
            visible={t.visible}
            id={t.id}
            title={props.title as string}
          />
        ),
        { duration: props.duration, position: props.position },
      );
      break;

    default:
      toast(props.message, { duration: props.duration, position: props.position }); // Default case for simple text toast
      break;
  }
};