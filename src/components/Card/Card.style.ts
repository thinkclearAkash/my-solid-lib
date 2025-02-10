export const cardStyles = {
  card: {
    raised: true,
    boxShadow: '0px 2px 5px gray',
    borderRadius: '8px',
    marginBottom: '20px',
  },
  cardHeader: {
    borderRadius: '8px 8px var(--none, 0px) var(--none, 0px)',
    background: '#026EA1',
    color: 'white',
    padding: '5px 7px',
  },
  flexClass: 'flex items-center',
  cardContent: (isExpanded: boolean, padding: number, maxHeight?: number) => {
    const styles = {
      height: 'auto',
      maxHeight: 'inherit',
      overflowY: 'inherit',
      color: 'black',
      display: isExpanded ? 'block' : 'none',
      padding: padding !== 0 ? `${padding}px` : '12px',
      '&:last-child': {
        paddingBottom: padding !== 0 ? `${padding}px` : '12px',
      },
    };

    if (maxHeight !== undefined) {
      styles.height = `${maxHeight}px`;
      styles.maxHeight = `${maxHeight}px`;
      styles.overflowY = 'auto';
    }

    return styles;
  },
  startTitleAction: {
    marginLeft: '5px',
  },
  gridItem: {
    fontSize: '1rem',
    display: 'flex',
    alignItems: 'center',
  },
  startIcon: {
    marginRight: '6px',
  },
  accordionIcon: {
    cursor: 'pointer',
    marginRight: '3px',
  },
};
