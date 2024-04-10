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
    padding: '10px var(--2, 16px)',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardContent: (isExpanded: boolean, padding: number) => ({
    height: 'auto',
    color: 'black',
    display: isExpanded ? 'block' : 'none',
    padding: padding !== 0 ? `${padding}px` : '16px',
    '&:last-child': {
      paddingBottom: padding !== 0 ? `${padding}px` : '16px',
    },
  }),
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
  endIcon: {
    marginLeft: '6px',
  },
  accordionIcon: {
    cursor: 'pointer',
    marginRight: '3px',
  },
};
