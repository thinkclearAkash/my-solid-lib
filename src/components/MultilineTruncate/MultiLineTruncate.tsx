const MultiLineTruncate = (props: { text?: string | null }) => {
  let containerRef: HTMLDivElement | undefined;

  const getText = () => {
    if (props.text !== undefined && props.text !== null) {
      if (props.text.length > 160) {
        return `${props.text.substring(0, 160)}...`;
      }
      return props.text;
    }
    return '';
  };
  function getSpan() {
    return <>{getText()}</>;
  }
  return (
    <span
      ref={containerRef}
      style={{ 'max-height': '3.6em', overflow: 'hidden' }}
      title={
        props.text !== undefined &&
        props.text !== null &&
        props.text.length > 160
          ? props.text
          : ''
      }
    >
      {getSpan()}
    </span>
  );
};

export default MultiLineTruncate;
