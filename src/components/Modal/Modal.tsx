import {
  Box,
  SButton,
  IconButton,
  Modal,
  Slide,
  STypography,
  ModalProps,
  CloseIcon,
} from '../common';
import { JSX, mergeProps, splitProps } from 'solid-js';

type ModalPropsWithoutOpen = Omit<ModalProps, 'open'>;

export interface BasicModalProps extends ModalPropsWithoutOpen {
  id?: string;
  showModal: boolean;
  children: JSX.Element;
  width?: string;
  maxWidth?: string;
  height?: string;
  onSubmitText?: string;
  onSubmit?: () => void;
  onCloseText?: string;
  onClose?: () => void;
  header?: boolean;
  title?: string;
  footer?: boolean;
  modalStyles?: Record<string, string>;
  footerContainerClass?: string;
  closeButtonVariant?: "text" | "outlined" | "contained";
  footerChild?: JSX.Element;
  mainContainerStyles?: Record<string, string>;
  showClose?: boolean;
  fullHeight?: boolean;
  preventCloseOnSubmit?: boolean;
  backdropClick?: boolean;
}

const DEFAULTS = {
  header: true,
  footer: true,
  width: '500px',
  onCloseText: 'Cancel',
  onSubmitText: 'Submit',
  modalStyles: {
    backgroundColor: 'white',
  },
  footerContainerClass: 'flex justify-end items-center gap-2 flex-wrap',
  showClose: false,
};

export default function BasicModal(props: BasicModalProps) {
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
    'showClose',
    'preventCloseOnSubmit',
    'backdropClick',
    'showModal'
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
    <Modal
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
        <Slide
          direction="down"
          appear
          in={load.showModal}
        >
          <Box
            sx={{
              maxHeight: '90vh',
              overflow: 'auto',
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
                Boolean(load.header) ? 'px-6 py-4' : 'absolute right-0'
              }`}
            >
              {Boolean(load.header) && (
                <STypography
                  id="modal-modal-title"
                  class="text-black !text-xl !font-medium  !leading-8 !tracking-[0.15px]"
                  variant="h6"
                  component="h2"
                >
                  {load.title}
                </STypography>
              )}
              <IconButton class="!ml-auto" onClick={handleClose}>
                <CloseIcon fontSize="small" />
              </IconButton>
            </Box>
            <Box
              class="p-4 overflow-y-auto"
              height={
                load.fullHeight ?? false ? 'calc(100vh - 240px)' : undefined
              }
            >
              {props.children}
            </Box>
            {Boolean(load.footer) && (
              <Box class={`p-4 relative ${load.footerContainerClass}`}>
                <>
                  <SButton
                    class="!rounded-sm"
                    variant="contained"
                    onClick={handleSubmit}
                    type="submit"
                  >
                    {load.onSubmitText}
                  </SButton>
                  <SButton
                    class="!rounded-sm"
                    variant={Boolean(load.closeButtonVariant) ? load.closeButtonVariant : 'outlined'}
                    onClick={handleClose}
                  >
                    {load.onCloseText}
                  </SButton>
                </>
                {Boolean(load.footerChild) && load.footerChild}
              </Box>
            )}
          </Box>
        </Slide>
      </Box>
    </Modal>
  );
}
