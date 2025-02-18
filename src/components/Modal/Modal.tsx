import CloseIcon from '@suid/icons-material/Close';
import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  Modal as SModal,
  Slide,
  Typography,
} from '@suid/material';
import { ModalProps } from '@suid/material/Modal';
import { JSX, mergeProps, splitProps, Component } from 'solid-js';

type ModalPropsWithoutOpen = Omit<ModalProps, 'open'>;

export interface BasicModalProps extends ModalPropsWithoutOpen {
  id: string;
  showModal: boolean;
  children: JSX.Element;
  width?: string;
  maxWidth?: string;
  height?: string;
  onSubmitText?: string;
  onSubmitLoading?: boolean;
  onSubmit?: () => void;
  onCloseText?: string;
  onClose?: () => void;
  header?: boolean;
  title?: string;
  footer?: boolean;
  modalStyles?: Record<string, string>;
  footerContainerClass?: string;
  closeButtonVariant?: 'text' | 'outlined' | 'contained';
  footerChild?: JSX.Element;
  mainContainerStyles?: Record<string, string>;
  showClose?: boolean;
  fullHeight?: boolean;
  preventCloseOnSubmit?: boolean;
  backdropClick?: boolean;
  hideClose?: boolean;
  customizedHeaderContent?: JSX.Element;
  stickyHeaderFooter?: boolean;
}

const DEFAULTS = {
  header: true,
  footer: true,
  hideClose: false,
  width: '500px',
  onCloseText: 'Cancel',
  onSubmitLoading: false,
  stickyHeaderFooter: false,
  onSubmitText: 'Submit',
  modalStyles: {
    backgroundColor: 'white',
  },
  footerContainerClass: 'flex justify-end items-center gap-2 flex-wrap',
};

export const Modal: Component<BasicModalProps>  = (props: BasicModalProps) => {
  props = mergeProps(DEFAULTS, props);
  const [load, rest] = splitProps(props, [
    'id',
    'children',
    'header',
    'title',
    'fullHeight',
    'onClose',
    'onCloseText',
    'onSubmitText',
    'onSubmit',
    'width',
    'maxWidth',
    'height',
    'footer',
    'modalStyles',
    'footerContainerClass',
    'closeButtonVariant',
    'footerChild',
    'mainContainerStyles',
    'preventCloseOnSubmit',
    'backdropClick',
    'showModal',
    'hideClose',
    'customizedHeaderContent',
    'stickyHeaderFooter',
  ]);

  const handleSubmit = () => {
    load.onSubmit && load.onSubmit();

    if (!(load.preventCloseOnSubmit ?? false)) {
      handleClose();
    }
  };

  const handleClose = () => {
    load.onClose && load.onClose();
  };

  return (
    <SModal
      open={load.showModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      onClose={(_, reason) => {
        if (!['backdropClick', 'escapeKeyDown'].includes(reason)) {
          handleClose();
        }
        if (reason === 'backdropClick' && props.backdropClick === true) {
          handleClose();
        }
      }}
      {...rest}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%) !important',
          ...load.mainContainerStyles,
        }}
      >
        <Slide direction="down" appear in={load.showModal}>
          <Box
            sx={{
              maxHeight: '100vh',
              overflow: `${Boolean(load.stickyHeaderFooter) ? '' : 'auto'}`,
              borderRadius: 1,
              ...load.modalStyles,
              width: load.width,
              height: load.height,
              maxWidth: load.maxWidth,
            }}
          >
            <Box
              sx={{ justifyContent: 'space-between' }}
              class={`flex ${
                Boolean(load.header)
                  ? `px-6 py-4 ${
                      Boolean(load.stickyHeaderFooter) && 'sticky bg-white'
                    }`
                  : 'absolute right-0'
              }`}
            >
              {Boolean(load.header) && (
                <Typography
                  id="modal-modal-title"
                  class={`text-black !text-xl !font-medium  !leading-8 !tracking-[0.15px] ${
                    Boolean(load.customizedHeaderContent)
                      ? 'flex items-center'
                      : ''
                  }`}
                  variant="h6"
                  component="h2"
                >
                  {load.title}
                  {Boolean(load.customizedHeaderContent) &&
                    load.customizedHeaderContent}
                </Typography>
              )}
              {!Boolean(load.hideClose) && (
                <IconButton class="!ml-auto" onClick={handleClose}>
                  <CloseIcon fontSize="small" />
                </IconButton>
              )}
            </Box>

            <Box
              class={`px-4 pb-4 pt-2 overflow-y-auto ${
                Boolean(load.stickyHeaderFooter) ? 'max-h-[500px] mb-11' : ''
              }`}
              height={
                load.fullHeight ?? false ? 'calc(100vh - 240px)' : undefined
              }
            >
              {props.children}
            </Box>
            {Boolean(load.footer) && (
              <Box class={`p-4 relative ${load.footerContainerClass}`}>
                <>
                  <Button
                    class="!rounded-sm"
                    variant="contained"
                    onClick={handleSubmit}
                    type="submit"
                    disabled={props.onSubmitLoading}
                  >
                    {Boolean(props.onSubmitLoading) ? (
                      <CircularProgress
                        color="secondary"
                        size={14}
                        sx={{ margin: '5px' }}
                      />
                    ) : (
                      load.onSubmitText
                    )}
                  </Button>
                  <Button
                    class="!rounded-sm"
                    variant={
                      Boolean(load.closeButtonVariant)
                        ? load.closeButtonVariant
                        : 'outlined'
                    }
                    onClick={handleClose}
                  >
                    {load.onCloseText}
                  </Button>
                </>
                {Boolean(load.footerChild) && load.footerChild}
              </Box>
            )}
          </Box>
        </Slide>
      </Box>
    </SModal>
  );
}
