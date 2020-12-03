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
  console.log('00000')
  if (group === 'hour') return { start, end };
  const groupStyle = DATE_TRUNC_FIELD[group];
  start = moment(value).startOf(groupStyle).format('YYYY-MM-DD');
  console.log('1111')
  end = moment(value).endOf(groupStyle).format('YYYY-MM-DD');
  console.log('222224444')
  console.log('3333')
  console.log('22222')
  console.log('3333')
  return { start, end };
};