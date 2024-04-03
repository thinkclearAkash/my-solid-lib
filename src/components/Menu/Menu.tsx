import { Menu as SMenu, MenuItem, ListItemText } from '@suid/material';
import { JSXElement, createSignal, mergeProps } from 'solid-js';
import { ArrowDropDown, ArrowDropUp } from '@suid/icons-material';

import classes from './classes';

type MenuItemType = string | { value: string; label: string };
export type MenuWrapperProps = {
  menuItems: MenuItemType[];
  menuButtonLabel: string | JSXElement;
  onMenuItemClick?: (item: string) => void;
  classes?: string;
  downArrowShowHide: boolean;
  width?: number;
};
const Menu = (props: MenuWrapperProps) => {
  props = mergeProps(
    {
      classes: '',
      downArrowShowHide: true,
    },
    props,
  );
  const [anchorEl, setAnchorEl] = createSignal<null | HTMLElement>(null);
  const [menuWidth, setMenuWidth] = createSignal(0);
  const open = () => Boolean(anchorEl());
  const handleClose = () => {
    setAnchorEl(null);
  };

  let spanElement:
    | HTMLSpanElement
    | ((el: HTMLSpanElement) => void)
    | undefined;

  function calculateWidth() {
    return spanElement !== undefined
      ? setMenuWidth(
          props.width ?? (spanElement as HTMLSpanElement).clientWidth,
        )
      : 0;
  }

  const onMenuClick = (item: MenuItemType) => {
    if (typeof item === 'string') {
      props.onMenuItemClick && props.onMenuItemClick(item);
    } else {
      props.onMenuItemClick && props.onMenuItemClick(item.value);
    }
    handleClose();
  };

  return (
    <div class={`${props.classes} inline-flex`}>
      <span
        ref={spanElement}
        aria-controls={open() ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open() ? 'true' : undefined}
        onClick={(event) => {
          setAnchorEl(event.currentTarget);
          calculateWidth();
        }}
        class="flex items-center cursor-pointer"
      >
        {props.menuButtonLabel}
        {props.downArrowShowHide &&
          (open() ? <ArrowDropUp /> : <ArrowDropDown />)}
      </span>
      <SMenu
        id="basic-menu"
        anchorEl={anchorEl()}
        open={open()}
        onClose={handleClose}
        PaperProps={{
          style: {
            width: 'fit-content',
          },
        }}
        MenuListProps={{ 'aria-labelledby': 'basic-button' }}
      >
        {props.menuItems.map((item) => (
          <MenuItem onClick={() => onMenuClick(item)}>
            {typeof item === 'string' ? (
              <ListItemText class={classes.listItemtext}>{item}</ListItemText>
            ) : (
              <ListItemText class={classes.listItemtext}>
                {item.label}
              </ListItemText>
            )}
          </MenuItem>
        ))}
      </SMenu>
    </div>
  );
};

export default Menu;
