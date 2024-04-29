import toast, { Toast } from 'solid-toast';
import { Warning } from '@suid/icons-material';

import {
  CustomToast,
  InboxToast,
  MultiLineToast,
  WithTimerToast,
} from './CustomToasts';

export type OpenToastProps = {
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

const defaultToastOptions = {
  duration: 1500,
  style: { backgroundColor: '#438471', color: '#fff' },
  className: 'my-custom-class',
};

export const openToast = ({
  type,
  position,
  message,
  duration = defaultToastOptions.duration,
  title = 'Title',
}: OpenToastProps) => {
  switch (type) {
    case ToastType.Success:
      toast.success(message, {
        duration,
        position,
      });
      break;

    case ToastType.Error:
      toast.error(message, {
        duration,
        position,
      });
      break;

    case ToastType.Loading:
      toast.loading(message, {
        duration,
        position,
      });
      break;

    case ToastType.Caution:
      toast(message, {
        icon: <Warning style={{ color: '#F59D25' }} />,
        position,
      });
      break;

    case ToastType.Custom:
      toast.custom(
        (t: Toast) => (
          <CustomToast
            message={message}
            onClose={() => console.log('clear')}
            visible={t.visible}
          />
        ),
        {
          duration,
          position,
        },
      );
      break;

    case ToastType.MultiLine:
      toast.custom(() => <MultiLineToast message={message} />, {
        duration,
        position,
      });
      break;

    case ToastType.Inbox:
      toast.custom(
        (t) => (
          <InboxToast
            title={title || 'Inbox Message'}
            message={message}
            onClose={() => toast.dismiss(t.id)}
          />
        ),
        { duration, position },
      );
      break;

    case ToastType.WithTimer:
      toast.custom(
        (t) => (
          <WithTimerToast
            message={message}
            duration={duration}
            onClose={() => toast.dismiss(t.id)}
            visible={t.visible}
            id={t.id}
            title={title}
          />
        ),
        { duration, position },
      );
      break;

    default:
      toast(message, { duration, position }); // Default case for simple text toast
      break;
  }
};
