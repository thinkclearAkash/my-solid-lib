import { FormHelperText } from '../common';
import { Component, For } from 'solid-js';
export interface ErrorType {
  error: { [key: string]: string[] } | string[] | null | undefined;
  showHelpertext: boolean;
}

const ForComponent: Component<{
  errors: string[];
  showHelpertext: boolean;
}> = ({
  errors,
  showHelpertext,
}: {
  errors: string[];
  showHelpertext: boolean;
}) => {
  return (
    <For each={errors}>
      {(err) => (
        <FormHelperText class="!mx-[14px] !text-red-600">
          {showHelpertext && err}
        </FormHelperText>
      )}
    </For>
  );
};

const FormErrorComponent: Component<ErrorType> = (props: ErrorType) => {
  return (
    <>
      {Array.isArray(props.error) && (
        <ForComponent
          errors={props.error}
          showHelpertext={props.showHelpertext}
        />
      )}
      {!Array.isArray(props.error) &&
        typeof props.error === 'object' &&
        props.error !== null && (
          <>
            {Object.keys(props.error).map((key) => (
              <ForComponent
                errors={(props.error as Record<string, string[]>)[key]}
                showHelpertext={props.showHelpertext}
              />
            ))}
          </>
        )}
    </>
  );
};

export default FormErrorComponent;
