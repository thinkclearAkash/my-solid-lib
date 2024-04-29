import { Component, createSignal, onMount } from 'solid-js';

const MultiLineTruncate: Component<{ text?: string }> = (props) => {
  const [isTruncated, setIsTruncated] = createSignal(false);
  const [content, setContent] = createSignal(props.text);
  let containerRef: HTMLDivElement | undefined;

  onMount(() => {
    if (
      containerRef
        ? containerRef.scrollHeight > containerRef.offsetHeight
        : false
    ) {
      setIsTruncated(true);
      setContent(
        props.text !== undefined ? `${props.text.substring(0, 160)}...` : '',
      ); // Adjust as needed
    }
  });

  return (
    <span
      ref={containerRef}
      style={{ 'max-height': '3.6em', overflow: 'hidden' }}
      title={isTruncated() ? props.text : ''}
    >
      {content()}
    </span>
  );
};

export default MultiLineTruncate;
