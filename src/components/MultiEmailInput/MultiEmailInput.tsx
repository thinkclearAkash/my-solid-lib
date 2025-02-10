import { createSignal, For } from 'solid-js';
import { Chip, Stack } from '@suid/material';
import { SxProps } from '@suid/system';
import { TextInput } from '../TextInput';

function validEmail(email: string): boolean {
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
  return emailRegex.test(email);
}

export type MultiEmailInputProps = {
  disabled?: boolean;
  label: string;
  id?: string;
  variant?: 'outlined' | 'filled' | 'standard';
  value: string[];
  error?: string;
  sxProps?: SxProps;
  sxErrorProps?: SxProps;
  onChange?: (emails: string[]) => void;
};

export const MultiEmailInput = ({
  disabled = false,
  label,
  id,
  variant = 'outlined',
  value = [],
  sxProps,
  onChange,
}: MultiEmailInputProps) => {
  const [emails, setEmails] = createSignal<string[]>(value);
  const [newEmail, setNewEmail] = createSignal<string>('');
  const [error, setError] = createSignal<string | null>(null);

  const addEmailInput = () => {
    const emailToAdd = newEmail();

    if (!emailToAdd || !validEmail(emailToAdd)) {
      setError('Invalid email address');
      return;
    }

    if (emails().includes(emailToAdd)) {
      setError('Email already exists');
      return;
    }

    const updatedEmails = [...emails(), emailToAdd];
    setEmails(updatedEmails);
    setNewEmail('');
    setError(null);

    if (onChange) {
      onChange(updatedEmails);
    }
  };

  const removeEmailInput = (index: number) => {
    const updatedEmails = emails().filter((_, i) => i !== index);
    setEmails(updatedEmails);

    if (onChange) {
      onChange(updatedEmails);
    }

    if (updatedEmails.length === 0) {
      setError('Email is required');
    }
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addEmailInput();
    }
  };

  return (
    <div>
      <Stack direction="row" flexWrap="wrap" gap={1} mb={2}>
        <For each={emails()}>
          {(email, index) =>
            Boolean(email) && (
              <Chip label={email} onDelete={() => removeEmailInput(index())} />
            )
          }
        </For>
      </Stack>
      <TextInput
        type="email"
        value={newEmail()}
        label={label}
        id={id}
        onChange={(value: string) => setNewEmail(value as string)}
        onKeyPress={handleKeyPress}
        variant={variant}
        disabled={disabled}
        sxProps={sxProps}
        error={error()}
      />
    </div>
  );
};
