import { ArrowDropDown, ArrowDropUp } from '@suid/icons-material';
import {
  ListItemIcon,
  ListItemText,
  MenuItem,
  Menu as SMenu,
} from '@suid/material';
import { JSXElement, createSignal, mergeProps } from 'solid-js';

import classes from './classes';

type MenuItemType =
  | string
  | { value: string; label: string; icon?: JSXElement | string; disabled?: boolean };

export type MenuWrapperProps = {
  menuItems: MenuItemType[];
  menuButtonLabel: string | JSXElement;
  onMenuItemClick?: (item: string) => void;
  classes?: string;
  downArrowShowHide: boolean;
  width?: number;
  disabled?: boolean;
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
    <div
      class={`${props.classes} inline-flex ${
        Boolean(props.disabled) ? 'opacity-75' : undefined
      }`}
    >
      <span
        ref={spanElement}
        aria-controls={open() ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open() ? 'true' : undefined}
        onClick={(event) => {
          if (Boolean(props.disabled)) {
            return;
          }

          setAnchorEl(event.currentTarget);
          calculateWidth();
        }}
        class={`flex items-center cursor-${
          Boolean(props.disabled) ? 'default' : 'pointer'
        }`}
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
            width: menuWidth() + 'px',
          },
        }}
        MenuListProps={{ 'aria-labelledby': 'basic-button' }}
      >
        {props.menuItems.map((item) => (
          <MenuItem
            onClick={() => onMenuClick(item)}
            class={classes.menuItem}
            disabled={item instanceof Object ? item.disabled : false}
          >
            {typeof item === 'string' ? (
              <ListItemText class={classes.listItemtext}>{item}</ListItemText>
            ) : (
              <>
                {item.icon && (
                  <ListItemIcon class={classes.listItemIcon}>
                    <img src={item.icon as string} alt={item.label} />
                  </ListItemIcon>
                )}
                <ListItemText class={classes.listItemtext}>
                  {item.label}
                </ListItemText>
              </>
            )}
          </MenuItem>
        ))}
      </SMenu>
    </div>
  );
};

export default Menu;
