import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from '../common';
import { TransitionProps } from '@suid/material/transitions';
import {
  Component,
  JSXElement,
  createSignal,
  mergeProps,
  splitProps,
} from 'solid-js';

import { DialogBoxProps } from './types';
import { Button } from '../Button';

const Transition = function Transition(
  props: TransitionProps & {
    children: JSXElement;
  },
) {
  return <Slide direction="down" {...props} />;
};

export const DialogBox: Component<DialogBoxProps> = (props: DialogBoxProps) => {
  const DEFAULT_PROPS = {
    onCancelText: 'Cancel',
    onSubmitText: 'Ok',
  };
  props = mergeProps(DEFAULT_PROPS, props);
  const [load, rest] = splitProps(props, [
    'children',
    'title',
    'id',
    'onCancel',
    'onCancelText',
    'onSubmit',
    'onSubmitText',
    'isDialogOpen',
    'closeDialogBox',
  ]);

  const [loading, setLoading] = createSignal(false);

  const handleSubmit = async () => {
    setLoading(true);

    try {
      load.onSubmit && (await load.onSubmit());
      load.closeDialogBox();
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    load.onCancel && load.onCancel();
    load.closeDialogBox();
  };

  return (
    <Dialog
      {...rest}
      id={load.id}
      open={load.isDialogOpen}
      TransitionComponent={Transition}
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{load.title}</DialogTitle>
      {typeof load.children !== 'undefined' && (
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {load.children}
          </DialogContentText>
        </DialogContent>
      )}
      <DialogActions>
        <Button
          variant="text"
          label={load.onCancelText!}
          onClick={handleClose}
        />
        <Button
          variant="contained"
          label={load.onSubmitText!}
          isLoading={loading()}
          onClick={handleSubmit}
        />
      </DialogActions>
    </Dialog>
  );
};
