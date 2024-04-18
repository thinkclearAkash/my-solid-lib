import { SButton, SPopover } from '../common';
import { createSignal, JSX } from 'solid-js';
import { SxProps } from '@suid/system';

export type PopoverProps = {
  eleName: string | JSX.Element;
  children: ((closePopover: () => void) => JSX.Element | null) | JSX.Element;
  classes?: string;
  sxProps?: SxProps;
  anchorOrigin?: {
    vertical: 'top' | 'center' | 'bottom';
    horizontal: 'left' | 'center' | 'right';
  };
  onClick?: () => void;
  forceClosePopover?: boolean;
};
const Popover = (props: PopoverProps) => {
  const [anchorEl, setAnchorEl] = createSignal<HTMLButtonElement | null>(null);

  const handleClick = (
    event: MouseEvent & { currentTarget: HTMLButtonElement },
  ) => {
    if (Boolean(props.forceClosePopover)) return;
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = () => {
    props.onClick && props.onClick();
    return Boolean(anchorEl());
  };
  const id = () => (open() ? 'simple-popover' : undefined);

  return (
    <div>
      {Boolean(props.eleName) && (
        <SButton
          aria-describedby={id()}
          onClick={handleClick}
          class={props.classes}
          sx={props.sxProps}
        >
          {props.eleName}
        </SButton>
      )}
      <SPopover
        id={id()}
        open={open()}
        anchorEl={anchorEl()}
        onClose={handleClose}
        anchorOrigin={
          props.anchorOrigin
            ? props.anchorOrigin
            : {
                vertical: 'bottom',
                horizontal: 'left',
              }
        }
      >
        { typeof props.children === 'function'?  props.children(handleClose) : props.children }
      </SPopover>
    </div>
  );
};

export default Popover;
