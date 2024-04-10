import { createSignal, JSX, mergeProps, Show, splitProps } from 'solid-js';

import { SButton, Menu, MenuItem, SxProps,ArrowDropDown, CircularProgress } from '../common';

export type Props = {
  variant?: 'contained' | 'outlined' | 'text';
  size?: 'small' | 'medium' | 'large';
  sx?: SxProps;
  label: string;
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
  onClick?: () => void;
  disabled?: boolean;
  href?: string;
  dropdownItems?: string[];
  onDropdownItemClick?: (item: string) => void;
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
        component={'button'}
        disableRipple={load.disableRipple ?? false}
        disableElevation={load.disableElevation ?? false}
        {...rest}
        ref={anchorEl}
        variant={'contained'}
        class={load.class}
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
          anchorEl={anchorEl()}
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
