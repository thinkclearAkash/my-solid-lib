import { useKeyDownEvent } from '@solid-primitives/keyboard';
import { debounce, get } from 'lodash';
import {
  For,
  JSX,
  Show,
  createEffect,
  createSignal,
  mergeProps,
  onCleanup,
  onMount,
  untrack,
} from 'solid-js';

import ClickAwayListener from './ClickAwayListener';
import {
  CloseIcon, SearchIcon, SxProps, STextField, List,
  ListItem,
  ListItemText,
  Breakpoint,
  CircularProgress,
  Popper,
  Theme,
} from '../common';

export type ATGAutoCompleteItem<T> = string | Record<string, unknown> | T;

export type AutocompleteProps<T> = {
  endpoint: string;
  debounceDelay?: number;
  debounce?: boolean;
  onSearchError?: (error: string) => void;
  onSearchComplete?: () => void;
  onItemSelect?: (
    item: ATGAutoCompleteItem<T>,
    isProgrammatic: boolean,
  ) => void;
  onClearValue?: () => void;
  renderItem?: (item: ATGAutoCompleteItem<T>) => JSX.Element;
  label: string;
  placeholder?: string;
  id: string;
  value?: string;
  onChange?: (value: string) => void;
  defaultValue?: string;
  version?: string;
  responseFieldName?: string;
  name?: string;
  error?: string | string[] | null;
  customButton?: () => JSX.Element;
  renderItemStyle?: SxProps<Theme<Breakpoint>>;
  disableClear?: boolean;
  minWidth?: number;
  variant?: 'outlined' | 'standard' | 'filled';
  startAdornment?: JSX.Element;
  class?: string;
  onInput?: (e: Event) => void;
  size?: 'medium' | 'small';
  hideIcon?: boolean;
  disabled?: boolean;
  fetchData?: (
    searchQuery: string,
    setSearchResults: (items: ATGAutoCompleteItem<T>[]) => void,
  ) => Promise<void>;
};

const defaultValue = {
  debounceDelay: 300,
  debounce: true,
  defaultValue: '',
  error: null,
};

export const Autocomplete = <T,>(props: AutocompleteProps<T>) => {
  const mp = mergeProps(props, defaultValue);

  const [anchorEl, setAnchorEl] = createSignal<HTMLInputElement | null>(null);
  const [loading, setLoading] = createSignal<boolean>(false);
  const [isDropdownOpen, setDropdownOpen] = createSignal<boolean>(false);
  const [searchQuery, setSearchQuery] = createSignal<string>(
    get(props, 'defaultValue') ?? ('' as string),
  );
  const [searchResults, setSearchResults] = createSignal<
    ATGAutoCompleteItem<T>[]
  >([]);
  const [activeIndex, setActiveIndex] = createSignal(-1);
  let listItemRef: HTMLLIElement[] = [];
  let popupRef: HTMLDivElement;

  createEffect(() => {
    if (Boolean(mp.value)) {
      setSearchQuery(mp.value as string);
    }
  });

  function calculateWidth() {
    const textFieldElement = document.getElementById(props.id);
    if (textFieldElement) {
      return textFieldElement.clientWidth;
    }
    return 450;
  }

  const handleInputFocus = (event: MouseEvent) => {
    setAnchorEl(event.target as HTMLInputElement);
    event.stopPropagation();
  };

  const debounceDelay = 300; // milliseconds

  const performSearch = debounce(async (query: string) => {
    if (query.trim().length > 2 && query !== '') {
      setLoading(true);
      props.fetchData &&
        (await props.fetchData(searchQuery(), setSearchResults));
    } else {
      setSearchResults([]);
      listItemRef = [];
    }

    setLoading(false);
  }, debounceDelay);

  const handleInputChange = (e: Event) => {
    if (untrack(isDropdownOpen) === false) {
      setDropdownOpen(true);
    }
    const inputValue = (e.target as HTMLInputElement).value;

    setSearchQuery(inputValue);

    mp.onChange && mp.onChange(inputValue);
    void performSearch(inputValue);
  };

  const handleSelect = (
    item: ATGAutoCompleteItem<T>,
    isProgrammatic = false,
  ) => {
    setDropdownOpen(false);
    if (props.onItemSelect) {
      props.onItemSelect(item, isProgrammatic);
    }
    setActiveIndex(-1);
  };

  const handleEnterSelect = () => {
    if (
      isNaN(activeIndex()) ||
      activeIndex() < 0 ||
      activeIndex() >= searchResults().length
    ) {
      return;
    }

    handleSelect(searchResults()[activeIndex()], true);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    setDropdownOpen(false);
    if (props.onClearValue) {
      props.onClearValue();
    }
    setActiveIndex(-1);
  };

  const event = useKeyDownEvent();

  createEffect(() => {
    const e = event();

    if (e && searchResults().length > 0 && isDropdownOpen()) {
      if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        setActiveIndex((prevIndex) => {
          if (e.key === 'ArrowUp') {
            if (prevIndex === -1) {
              return searchResults().length - 1;
            }

            return prevIndex - 1;
          }

          return (prevIndex + 1) % searchResults().length;
        });
      } else if (e.key === 'Enter') {
        handleEnterSelect();
      }
    }
  });

  createEffect(() => {
    if (activeIndex() > -1 && activeIndex() < searchResults().length) {
      const popupDiv = popupRef.lastChild as unknown as HTMLDivElement;
      const popupHeight = popupDiv.clientHeight;
      const popupScrollTop = popupDiv.scrollTop;
      const itemOffsetTop = listItemRef[activeIndex()].offsetTop;

      if (
        popupScrollTop + popupHeight - 10 <= itemOffsetTop ||
        popupScrollTop > itemOffsetTop
      ) {
        listItemRef[activeIndex()].scrollIntoView();
      }
    }
  });

  function renderEndAdornment() {
    if (loading()) {
      return <CircularProgress />;
    } else if (searchQuery()) {
      return (
        <CloseIcon
          sx={{ cursor: 'pointer', zIndex: '1000' }}
          onClick={handleClearSearch}
        />
      );
    } else if (Boolean(props.hideIcon)) {
      return <></>;
    }

    return <SearchIcon sx={{ cursor: 'pointer' }} />;
  }

  let observer: IntersectionObserver;

  onMount(() => {
    const textFieldElement = document.getElementById(
      props.id,
    ) as HTMLInputElement;
    if (Boolean(textFieldElement)) {
      observer = new IntersectionObserver(
        (entries: IntersectionObserverEntry[]) => {
          entries.forEach((entry) => {
            if (Boolean(!entry.isIntersecting)) {
              setDropdownOpen(false);
            }
          });
        },
        {
          root: null,
          threshold: 0.1,
        },
      );

      observer.observe(textFieldElement);
    }
  });

  onCleanup(() => {
    if (Boolean(observer)) {
      observer.disconnect();
    }
  });

  return (
    <>
      <STextField
        name={props.name}
        id={props.id}
        onFocus={(e: unknown) => handleInputFocus(e as MouseEvent)}
        fullWidth
        onChange={handleInputChange}
        value={searchQuery()}
        placeholder={props.placeholder}
        variant={props.variant ?? 'outlined'}
        class={props.class}
        label={props.label}
        onInput={props.onInput}
        size={props.size}
        InputProps={{
          startAdornment: props.startAdornment,
          endAdornment:
            props.disableClear !== true
              ? (props.customButton as JSX.Element) ?? renderEndAdornment()
              : '',
        }}
        error={Boolean(props.error)}
        disabled={props.disabled}
        helperText={
          Array.isArray(props.error) && props.error.length > 0
            ? props.error[0]
            : ''
        }
      />
      <Show when={searchResults().length > 0}>
        <Popper
          component={'div'}
          open={isDropdownOpen()}
          anchorEl={anchorEl()}
          placement="bottom-start"
          class="!bg-white shadow-lg max-h-60 overflow-auto !border-1 "
          style={{ width: `${calculateWidth() + 40}px`, 'z-index': 1300 }}
          ref={(el) => (popupRef = el)}
        >
          <ClickAwayListener onClickAway={() => setDropdownOpen(false)}>
            <List>
              <For each={searchResults()}>
                {(item: ATGAutoCompleteItem<T>, i) => {
                  return (
                    <ListItem
                      onClick={() => handleSelect(item)}
                      classes={{
                        root: `hover:bg-gray-100 cursor-pointer ${activeIndex() === i() ? 'bg-gray-100' : ''
                          }`,
                      }}
                      sx={props.renderItemStyle ? props.renderItemStyle : {}}
                      ref={(el) => {
                        listItemRef.push(el);
                      }}
                    >
                      {props.renderItem ? (
                        props.renderItem(item)
                      ) : (
                        <ListItemText
                          class="ml-5"
                          primary={get(item, props.responseFieldName ?? 'name')}
                        />
                      )}
                    </ListItem>
                  );
                }}
              </For>
            </List>
          </ClickAwayListener>
        </Popper>
      </Show>

      <Show
        when={
          searchResults().length === 0 && searchQuery().length > 3 && !loading()
        }
      >
        <Popper
          component={'div'}
          open={isDropdownOpen()}
          anchorEl={anchorEl()}
          placement="bottom-start"
          class="!bg-white shadow-lg max-h-60 overflow-auto !border-1"
          style={{ width: `${calculateWidth() + 40}px`, 'z-index': 1300 }}
        >
          <ClickAwayListener onClickAway={() => setDropdownOpen(false)}>
            <List>
              <ListItem classes={{ root: 'hover:bg-gray-100' }}>
                <ListItemText
                  primary="No results found"
                  secondary="Please try with different name"
                />
              </ListItem>
            </List>
          </ClickAwayListener>
        </Popper>
      </Show>
    </>
  );
};
