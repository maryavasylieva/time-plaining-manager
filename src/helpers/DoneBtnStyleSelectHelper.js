const styleSelector = (inDoneTab, inBudnedOutTab) => {
  let style;
  if (inDoneTab) {
    style = {
      fill: 'green',
      backgroundColor: '#e6eeec',
      cursor: 'default',
    };
  } else if (inBudnedOutTab) {
    style = {
      cursor: 'pointer',
    };
  }
  return style;
};

export default styleSelector;
