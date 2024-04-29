import { FormHelperText } from '@suid/material';
import { Component, For } from 'solid-js';
export interface ErrorType {
  error: { [key: string]: string[] } | string[] | null | undefined| string;
  showHelperText?: boolean;
}

const ForComponent: Component<{
  errors: string[];
  showHelperText?: boolean;
}> = ({
  errors,
  showHelperText,
}: {
  errors: string[];
  showHelperText?: boolean;
}) => {
  return (
    <For each={errors}>
      {(err) => (
        <FormHelperText class="!mx-[14px] !text-red-600">
          {showHelperText && err}
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
          showHelperText={props.showHelperText}
        />
      )}
      {!Array.isArray(props.error) &&
        typeof props.error === 'object' &&
        props.error !== null && (
          <>
            {Object.keys(props.error).map((key) => (
              <ForComponent
                errors={(props.error as Record<string, string[]>)[key]}
                showHelperText={props.showHelperText}
              />
            ))}
          </>
        )}
    </>
  );
};

export default FormErrorComponent;