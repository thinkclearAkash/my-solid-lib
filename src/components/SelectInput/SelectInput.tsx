  import { SelectChangeEvent } from '@suid/material/Select';
  import {
    Component,
    JSXElement,
    Show,
    createSignal,
    mergeProps,
  } from 'solid-js';
import classes from './classes';
import { SxProps, MenuItem, Select, SCheckbox, FormControl,  InputLabel,
    ListItemText,
    ListSubheader } from '../common';
import MenuProps from '@suid/material/Menu/MenuProps';
import FormErrorComponent from '../FormErrorComponent/FormErrorComponent';
  
  const ITEM_HEIGHT = 60;
  const ITEM_PADDING_TOP = 4;
  export const CustomMenuProps: Partial<MenuProps> = {
    PaperProps: {
      style: {},
    },
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'left',
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'left',
    },
  };
  
  const iconStyles = {
    position: 'absolute',
    height: '100%',
    width: '40px',
    padding: '6px',
    top: '0',
    right: '0',
    color: 'rgb(27, 102, 143)',
    border: '1px solid #ccc',
    background: '#fff',
    zIndex: 1,
    borderTopRightRadius: 'inherit',
    borderBottomRightRadius: 'inherit',
  };
  
  type Styles<T = string> = {
    [key: string]: T | Styles<T>;
  };
  
  export type MenuItemType = {
    label: string;
    value: string | number;
    disabled?: boolean;
    name?: string;
  };
  
  type SelectInputProps = {
    label?: string;
    menuItems: string[] | MenuItemType[] | Record<string, MenuItemType[]>;
    onChange?: (e: SelectChangeEvent) => void;
    onBlur?: () => void;
    value?: string | string[];
    multiple?: boolean;
    width?: string;
    sxProps?: SxProps;
    menuProps?: Styles;
    customIconStyle?: Styles;
    size?: 'small' | 'medium';
    boxedIcon?: boolean;
    name?: string;
    error?: string | string[] | null;
    disabled?: boolean;
    required?: boolean;
    backgroundColor?: string;
    placeholder?: string;
    variant?: 'standard' | 'outlined' | 'filled';
    labelStyle?: Styles;
    renderValue?: (selected: string | string[]) => JSXElement;
    disableUnderline?: boolean;
    groupBy?: boolean;
    noErrorMessage?: boolean;
    customWidth?: string;
  };
  
  // Define default props
  const defaultProps: Partial<SelectInputProps> = {
    value: '',
    error: null,
    disabled: false,
    required: false,
  };
  
  export const renderSelectOption = (
    selected: string | string[],
    menuItems: string[] | MenuItemType[] | Record<string, MenuItemType[]>,
    placeholder?: string,
    groupBy = false,
    focused = false,
  ) => {
    const selectedItems = Array.isArray(selected) ? selected : [selected];
  
    if (selectedItems.length === 0 && focused) {
      return <>{placeholder}</>;
    }
  
    const items: MenuItemType[] =
      Array.isArray(menuItems) && typeof menuItems[0] === 'string'
        ? menuItems.map((item) => ({ label: item, value: item }))
        : groupBy
          ? Object.values(menuItems).flat()
          : (menuItems as MenuItemType[]);
  
    const selectedLabels = items
      .filter((item) => selectedItems.includes(item.value as string))
      .map((item) => item.label);
  
    return selectedLabels.join(', ');
  };
  
  export const SelectField: Component<SelectInputProps> = (props) => {
    props = mergeProps(defaultProps, props);
    const [focused, setFocused] = createSignal(false);
  
    let selectControlRef:
      | HTMLDivElement
      | ((el: HTMLDivElement) => void)
      | undefined;
  
    function calculateWidth(): number {
      if (props.customWidth !== undefined) {
        return parseInt(props.customWidth);
      }
      return selectControlRef instanceof HTMLDivElement
        ? selectControlRef.clientWidth
        : 0;
    }
  
    const getStyles = () => {
      if (Boolean(props.customIconStyle)) {
        return { ...props.sxProps, ...props.customIconStyle };
      } else if (Boolean(props.boxedIcon)) {
        return {
          background: props.backgroundColor ?? '#fff',
          '.MuiSelect-icon': iconStyles,
          ...props.sxProps,
        };
      }
      return { ...props.sxProps, background: props.backgroundColor ?? '#fff' };
    };
  
    const handleBlur = () => {
      setFocused(false);
      props.onBlur && props.onBlur();
    };
  
    const isItemSelected = (value: string, selected: string[]) => {
      return selected.indexOf(value) !== -1;
    };
  
    const renderMenuItem = (item: MenuItemType | string) => {
      if (typeof item === 'string') {
        return (
          <MenuItem value={item}>
            {Boolean(props.multiple) && (
              <SCheckbox checked={isItemSelected(item, props.value as string[])} />
            )}
            <ListItemText primary={item} />
          </MenuItem>
        );
      }
      return (
        <MenuItem value={item.value} disabled={item.disabled}>
          {Boolean(props.multiple) && (
            <SCheckbox checked={props.value!.indexOf(item.value as string) > -1} />
          )}
          <ListItemText class={classes.menuItemText} primary={item.label} />
        </MenuItem>
      );
    };
  
    const renderMenuItems = (items: MenuItemType[]) => items.map(renderMenuItem);
  
    const renderGroupedMenuItems = (key: string) => (
      <>
        <ListSubheader class="capitalize">{key}</ListSubheader>
        {props.groupBy &&
          renderMenuItems(props.menuItems[key as keyof typeof props.menuItems] as MenuItemType[])}
      </>
    );
  
    return (
      <FormControl
        fullWidth
        sx={{
          width: props.width,
          '& .MuiSelect-select:focus': {
            backgroundColor: props.backgroundColor,
          },
        }}
        ref={selectControlRef}
        error={Boolean(props.error)}
        disabled={props.disabled}
        size={props.size}
        variant={props.variant}
      >
        <Show when={Boolean(props.label)} fallback={<></>}>
          <InputLabel sx={props.labelStyle}>{props.label}</InputLabel>
        </Show>
        <Select
          {...props}
          disableUnderline={props.disableUnderline ?? false}
          label={props.label}
          displayEmpty
          name={props.name}
          value={props.value}
          onChange={props.onChange}
          onFocus={() => setFocused(true)}
          onBlur={handleBlur}
          required={props.required}
          error={Boolean(props.error)}
          renderValue={
            props.renderValue ??
            ((selected: string | string[]) => {
              return renderSelectOption(
                selected,
                props.menuItems,
                props.placeholder,
                props.groupBy,
                focused(),
              );
            })
          }
          MenuProps={{
            ...CustomMenuProps,
            PaperProps: {
              style: {
                'max-height': `${ITEM_HEIGHT * 4 + ITEM_PADDING_TOP}px`,
                width: calculateWidth() + 'px',
              },
            },
            ...props.menuProps,
          }}
          sx={getStyles()}
        >
          <>
            {props.placeholder !== undefined && (
              <MenuItem disabled value="">
                <ListItemText primary={props.placeholder} />
              </MenuItem>
            )}
            {props.multiple ?? false
              ? renderMenuItems(props.menuItems as MenuItemType[])
              : props.groupBy ?? false
                ? Object.keys(props.menuItems).map(renderGroupedMenuItems)
                : renderMenuItems(props.menuItems as MenuItemType[])}
          </>
        </Select>
        <FormErrorComponent
        error={props.error}
        showHelperText={!Boolean(props.noErrorMessage)}
        />
      </FormControl>
    );
  };
  