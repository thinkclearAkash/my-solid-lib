import {
  Component,
  onCleanup,
  createSignal,
  createEffect,
  JSXElement,
} from 'solid-js';
import { TextInput } from '../TextInput';

export type AddressDetails = {
  state?: string;
  county?: string;
  city?: string;
  countryCode?: string;
  neighborhood?: string;
  zipCode?: string;
  streetName?: string;
  address1?: string;
};

export type AddressAutocompleteProps = {
  label: string | JSXElement;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  onItemSelect?: (item: AddressDetails) => void;
  error?: string | string[] | null;
  classes?: string;
  zIndex?: string;
};

const GoogleApiKey = '';

function loadScript(src: string, id: string, callbackFn: () => void): void {
  const existingScript = document.getElementById(id);
  if (!existingScript) {
    const script = document.createElement('script');
    script.async = true;
    script.id = id;
    script.src = src;
    script.onload = callbackFn;
    script.onerror = (error) => {
      // eslint-disable-next-line no-console
      console.error(`Error loading script: ${src}`, error);
    };
    document.head.appendChild(script);
  } else {
    callbackFn();
  }
}

const AddressAutoComplete: Component<AddressAutocompleteProps> = (props) => {
  const [isScriptLoaded, setScriptLoaded] = createSignal(false);
  let autocomplete: google.maps.places.Autocomplete | null = null;

  const [inputElement, setInputElement] = createSignal<HTMLInputElement | null>(
    null,
  );

  const adjustZIndex = () => {
    if (Boolean(props.zIndex)) {
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          mutation.addedNodes.forEach((node) => {
            if (
              node.nodeType === 1 &&
              (node as Element).classList.contains('pac-container')
            ) {
              (node as HTMLElement).style.zIndex = props.zIndex!;
            }
          });
        });
      });

      observer.observe(document.body, { childList: true, subtree: true });
      onCleanup(() => {
        observer.disconnect();
      });
    }
  };

  createEffect(() => {
    if (!isScriptLoaded()) {
      loadScript(
        `https://maps.googleapis.com/maps/api/js?key=${GoogleApiKey}&libraries=places`,
        'google-maps',
        () => {
          setScriptLoaded(true);
          adjustZIndex();
        },
      );
    }
  });

  createEffect(() => {
    const input = inputElement();
    if (input && isScriptLoaded() && !autocomplete) {
      autocomplete = new google.maps.places.Autocomplete(input, {
        types: ['address'],
      });
      autocomplete.addListener('place_changed', () => {
        const place = autocomplete?.getPlace();
        if (!place?.address_components) return;
        const details: AddressDetails = place.address_components.reduce(
          (acc: AddressDetails, component) => {
            const comp = component.types[0];
            switch (comp) {
              case 'street_number':
              case 'route':
                acc['address1'] =
                  (Boolean(acc['address1']) ? acc['address1'] + ' ' : '') +
                  component.short_name;
                break;
              case 'locality':
                acc['city'] = component.long_name;
                break;
              case 'administrative_area_level_2':
              case 'country':
                acc['county'] = component.short_name;
                break;
              case 'administrative_area_level_1':
                acc['state'] = component.short_name;
                break;
              case 'postal_code':
                acc['zipCode'] = component.long_name;
                break;
            }
            return acc;
          },
          {},
        );
        props.onItemSelect && props.onItemSelect(details);
      });
    }
  });

  onCleanup(() => {
    if (autocomplete) google.maps.event.clearInstanceListeners(autocomplete);
    const pacContainers = document.querySelectorAll('.pac-container');
    pacContainers.forEach((container) => container.remove());
  });

  return (
    <TextInput
      inputRef={setInputElement}
      value={props.value}
      onChange={(value:string) => props.onChange && props.onChange(value)}
      placeholder={props.placeholder}
      variant="outlined"
      label={props.label}
      error={
        typeof props.error === 'string' ? props.error : props.error?.[0] ?? ''
      }
      classes={props.classes}
    />
  );
};

export default AddressAutoComplete;
