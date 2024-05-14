import { Show, createSignal } from 'solid-js';

import classes from './classes';
import { TextInput } from '../TextInput';
import StyledProps from '@suid/system/styledProps';
import { ArrowDropDown, Divider, Menu, MenuItem, Person } from '../common';
import { AddressCard } from './AddressCard';
import { size } from 'lodash';

interface ContactProps {
  id: number;
  name: string;
}

export type ContactDropdownProps<T> = {
  label?: string;
  contacts: T[];
  onChange: (newContactId: number) => void;
  contactId: number | undefined;
  disabled?: boolean;
};

const ITEM_HEIGHT = 40;
const MENU_STYLES: StyledProps = {
  '& .MuiPaper-root': {
    paddingLeft: 1,
    paddingRight: 1,
    margin: 0,
  },
};
const PAPER_STYLES = {
  overflow: 'auto',
  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
  mt: 1.5,
  minWidth: '500px',
  maxHeight: `${ITEM_HEIGHT * 10}px`,
};
const TEXTFIELD_STYLES: StyledProps = {
  '& .MuiInputBase-input::placeholder': {
    color: '#000 !important',
    opacity: 1,
  },
};

export const ContactDropdown = <T extends ContactProps>(
  props: ContactDropdownProps<T>,
) => {
  const [anchorEl, setAnchorEl] = createSignal<null | HTMLElement>(null);
  const [inputElement, setInputElement] = createSignal<HTMLInputElement | null>(
    null,
  );
  const [menuWidth, setMenuWidth] = createSignal<number>(0);

  const open = () => Boolean(anchorEl());
  const close = () => setAnchorEl(null);

  function calculateWidth() {
    const textFieldElement = inputElement();
    if (textFieldElement) setMenuWidth(textFieldElement.clientWidth);
  }

  const findContactById = (contactId: number | undefined) =>
    props.contacts.find((c) => c.id === contactId) || ({} as ContactProps);

  const currentContact = () => findContactById(props.contactId);

  const handleContactClick = (contactId: number | undefined) => {
    const contact = findContactById(contactId);
    if (Boolean(contact)) {
      props.onChange(contact.id);
    }
    close();
  };

  const filteredContacts = () =>
    size(props.contacts) > 0
      ? props.contacts.filter((c) => c.id !== props.contactId)
      : [];

  return (
    <>
      <TextInput
        label="Contact"
        variant="standard"
        inputRef={setInputElement}
        InputLabelProps={{
          sx: {
            fontSize: '18px !important',
          },
        }}
        onFocus={(event) => {
          setAnchorEl(event.currentTarget as HTMLElement);
          calculateWidth();
        }}
        value={currentContact().name || ''}
        disabled={props.disabled}
        InputProps={{
          readOnly: true,
          endAdornment: <ArrowDropDown />,
          startAdornment: <Person class={classes.personIconStyle} />,
        }}
        sxProps={TEXTFIELD_STYLES}
      />
      <Menu
        anchorEl={anchorEl()}
        open={open()}
        onClose={close}
        MenuListProps={{ 'aria-labelledby': 'basic-button' }}
        sx={MENU_STYLES}
        PaperProps={{
          sx: {
            ...PAPER_STYLES,
            width: menuWidth() + 24 + 'px',
          },
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Show when={typeof props.contactId === 'number'}>
          <span class={classes.contactTitleText}>Current Contact</span>
          <MenuItem
            class={classes.menuItem}
            onClick={() => handleContactClick(props.contactId)}
          >
            <AddressCard
              contact={currentContact()}
              mode="warning"
              personIconSize={'40px'}
              showIcon
            />
          </MenuItem>
        </Show>
        <Show when={filteredContacts().length > 0}>
          <span class={classes.contactTitleText}>Assign New Contact</span>
          {filteredContacts().map((contact) => (
            <>
              <MenuItem
                class={classes.menuItem}
                onClick={() => handleContactClick(contact.id)}
              >
                <AddressCard contact={contact} mode="regular" showIcon />
              </MenuItem>
              <Divider class={classes.divider} />
            </>
          ))}
        </Show>
      </Menu>
    </>
  );
};
