import { createSignal, JSX, mergeProps, Show, splitProps } from 'solid-js';
import { SxProps } from '@suid/system';
import {
  Button as SButton,
  Menu,
  MenuItem,
  CircularProgress,
} from '@suid/material';
import ArrowDropDown from '@suid/icons-material/ArrowDropDown';

export type Props = {
  variant?: 'contained' | 'outlined' | 'text';
  size?: 'small' | 'medium' | 'large';
  sx?: SxProps;
  label: string | JSX.Element;
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
  onClick?: () => void;
  disabled?: boolean;
  href?: string;
  dropdownItems?: string[]; // List of items for the dropdown
  onDropdownItemClick?: (item: string) => void; // Callback for dropdown item click
  type?: 'button' | 'submit' | 'reset';
  isLoading?: boolean;
  class?: string;
  title?: string;
  disableRipple?: boolean;
  disableElevation?: boolean;
  color?:
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning'
    | undefined;
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

  const [anchorEl, setAnchorEl] = createSignal<HTMLButtonElement>();
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
        disableRipple={load.disableRipple ?? false}
        disableElevation={load.disableElevation ?? false}
        {...rest}
        ref={anchorEl}
        color={props.color}
        variant={load.variant ?? 'contained'}
        class={load.class}
        type={load.type}
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
        <Show when={props.isLoading}>
          <CircularProgress color="inherit" size={20} />
        </Show>
        <div>{load.label}</div>
      </SButton>
      {load.dropdownItems && (
        <Menu
          anchorEl={anchorEl() as Element}
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
