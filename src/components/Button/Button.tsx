import { createSignal, JSX, mergeProps, Show, splitProps } from 'solid-js';
import { SxProps } from '@suid/system';
import {
  Button as SButton,
  Menu,
  MenuItem,
  CircularProgress,
} from '@suid/material';
import { ArrowDropDown } from '@suid/icons-material';

export type Props = {
  variant?: 'contained' | 'outlined' | 'text' | string;
  size?: 'small' | 'medium' | 'large';
  sx?: SxProps;
  label: string;
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
  onClick?: () => void;
  disabled?: boolean;
  href?: string;
  dropdownItems?: string[]; // List of items for the dropdown
  onDropdownItemClick?: (item: string) => void; // Callback for dropdown item click
  type?: string;
  isLoading?: boolean;
  class?: string;
  title?: string;
  disableRipple?: boolean;
  disableElevation?: boolean;
};

function Button(props: Readonly<Props>) {
  props = mergeProps(
    {
      sx: { borderRadius: '4px' },
    },
    props,
  );
  const [load, rest] = splitProps(props, [
    'variant',
    'size',
    'sx',
    'label',
    'startIcon',
    'endIcon',
    'onClick',
    'disabled',
    'href',
    'dropdownItems',
    'onDropdownItemClick',
    'type',
    'isLoading',
    'class',
    'title',
    'disableRipple',
    'disableElevation',
  ]);

  const [anchorEl, setAnchorEl] = createSignal<HTMLButtonElement | null>(null);
  const [isDropdownOpen, setDropdownOpen] = createSignal(false);

  const handleButtonClick = (event: MouseEvent) => {
    const target = event.currentTarget as HTMLButtonElement;

    setAnchorEl(target);
    setDropdownOpen(!isDropdownOpen());
    load.onClick && typeof load.onClick === 'function' && load.onClick();
  };

  const handleDropdownItemClick = (item: string) => {
    setDropdownOpen(false);
    load.onDropdownItemClick &&
      typeof load.onDropdownItemClick === 'function' &&
      load.onDropdownItemClick(item);
  };

  return (
    <>
      <SButton
        component="button"
        disableRipple={load.disableRipple ?? false}
        disableElevation={load.disableElevation ?? false}
        {...rest}
        ref={anchorEl() as HTMLButtonElement}
        variant='contained'
        class={load.class}
        type={load.type as "button" | "reset" | "submit"}
        title={load.title}
        onClick={handleButtonClick}
        disabled={load.disabled}
        href={load.href}
        startIcon={load.startIcon}
        endIcon={
          load.endIcon ?? (load.dropdownItems ? <ArrowDropDown /> : null)
        }
        size={load.size}
        sx={load.sx}
      >
        { props.isLoading && <CircularProgress color="inherit" size={20} /> }
        <>{load.label}</>
      </SButton>
      {load.dropdownItems && (
        <Menu
          anchorEl={anchorEl() as HTMLButtonElement}
          open={isDropdownOpen()}
          onClose={() => setDropdownOpen(false)}
        >
          {load.dropdownItems.map((item) => (
            <MenuItem
              value={item}
              onClick={() => handleDropdownItemClick(item)}
            >
              {item}
            </MenuItem>
          ))}
        </Menu>
      )}
    </>
  );
}

export default Button;
