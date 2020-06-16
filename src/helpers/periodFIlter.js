const periodFilter = (options, data) => {
  const date = new Date();
  const month = date.getMonth() + 1;
  const now = Date.now();
  const weekBack = now - 604800000;
  // console.log(new Date(weekBack));

  if (options === null || options === undefined) {
    return [];
  }
  if (options === 'week') {
    return data.filter(
      el =>
        new Date(el.date).getTime() >= weekBack &&
        new Date(el.date).getTime() <= now,
    );
  }
  if (options === 'month') {
    return data.filter(el => Number(el.date.split('-')[1]) === month);
  }
  if (options === 'total') {
    return data;
  }
};

export default periodFilter;
