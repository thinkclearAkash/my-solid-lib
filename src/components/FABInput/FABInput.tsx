import { Fab, StyledProps } from '@suid/material';
import CheckCircleIcon from '@suid/icons-material/CheckCircle';
import { Show, mergeProps } from 'solid-js';

export const FABInput = (props: {
  label: string;
  checked: boolean;
  onClick: () => void;
  iconSize?: string;
  sxProps?: StyledProps;
  class?: string;
}) => {
  const FallbackFab = () => {
    const mp = mergeProps(props, {
      iconSize: '16px',
      class:
        '!text-[13px]  !font-normal !h-fit !px-2  !shadow-none !capitalize',
    });

    return (
      <Fab
        variant="extended"
        size="small"
        color={mp.checked ? 'secondary' : undefined}
        classes={{
          root: mp.checked ? '!bg-[#026EA1]' : '',
        }}
        onClick={mp.onClick}
        class={mp.class}
        sx={mp.sxProps}
      >
        {mp.label}
        <Show when={mp.checked}>
          <CheckCircleIcon
            class="!text-[#4494ba]"
            sx={{ ml: 1, fontSize: mp.iconSize }}
          />
        </Show>
      </Fab>
    );
  };
  return (
    <Show when={props.checked} fallback={<FallbackFab />}>
      <FallbackFab />
    </Show>
  );
};
