import { createSignal, onCleanup, Component, JSX } from 'solid-js';

interface ClickAwayListenerProps {
  children: JSX.Element;
  onClickAway: () => void;
}

const ClickAwayListener: Component<ClickAwayListenerProps> = ({
  children,
  onClickAway,
}) => {
  const [target, setTarget] = createSignal<HTMLElement | null>(null);

  function handleClick(event: MouseEvent) {
    if (target() && !target()!.contains(event.target as Node)) {
      onClickAway();
    }
  }

  function handleRef(ref: HTMLElement) {
    setTarget(ref);
  }

  onCleanup(() => {
    document.removeEventListener('click', handleClick);
  });

  document.addEventListener('click', handleClick);

  return <div ref={handleRef}>{children}</div>;
};

export default ClickAwayListener;
