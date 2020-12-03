export const getDateSection = (group, value) => {
  // console.log(moment(value).startOf('year').format("YYYY-MM-DD"));
  // console.log(moment(value).endOf('year').format("YYYY-MM-DD"));
  // console.log(moment(value).startOf('quarter').format("YYYY-MM-DD"));
  // console.log(moment(value).endOf('quarter').format("YYYY-MM-DD"));
  // console.log(moment(value).startOf('month').format("YYYY-MM-DD"));
  // console.log(moment(value).endOf('month').format("YYYY-MM-DD"));
  // console.log(moment(value).startOf('day').format("YYYY-MM-DD"));
  // console.log(moment(value).endOf('day').format("YYYY-MM-DD"));
  let start = value,
    end = value;
  if (group === 'hour') return { start, end };
  const groupStyle = DATE_TRUNC_FIELD[group];
  start = moment(value).startOf(groupStyle).format('YYYY-MM-DD');
  end = moment(value).endOf(groupStyle).format('YYYY-MM-DD');
  return { start, end };
};