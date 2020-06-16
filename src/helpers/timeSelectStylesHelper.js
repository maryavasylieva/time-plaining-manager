const timeStyles = {
  control: styles => ({
    ...styles,
    width: '100%',
    padding: 0,
    borderRadius: 0,
    borderWidth: '1px 0 0 0',
    borderStyle: 'solid',
    borderColor: '#f1f1f1',
  }),
  valueContainer: styles => {
    return {
      ...styles,
      height: '40px',
      backgroundColor: '#f5f7fa',
      fontFamily: 'Montserrat',
      fontSize: '14px',
      fontWeight: 400,
    };
  },
  indicatorSeparator: styles => ({
    ...styles,
    display: 'none',
  }),
  indicatorsContainer: styles => ({
    ...styles,
    height: '40px',
    backgroundColor: '#f5f7fa',
    fill: '#000',
  }),
  menu: styles => ({
    ...styles,
    borderRadius: 0,
    margin: 0,
  }),
  option: styles => ({
    ...styles,
    height: '30px',
    boxSizing: 'border-box',
    border: '1px solid #f5f7fa',
    backgroundColor: '#fff',
    color: 'black',
    fontFamily: 'Montserrat',
    fontSize: '12px',
    fontWeight: 400,

    ':active': {
      ...styles[':active'],
      fontWeight: 500,
      backgroundColor: '#f5f7fa',
    },
  }),
};

export default timeStyles;
