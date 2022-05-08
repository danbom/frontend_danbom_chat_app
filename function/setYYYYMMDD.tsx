const yyyymmdd = (value: any) => {
  value = new Date(value);
  var year = value.getFullYear();
  var month = ("0" + (1 + value.getMonth())).slice(-2);
  var day = ("0" + value.getDate()).slice(-2);

  return year + "년 " + month + "월 " + day + "일";
};

export default yyyymmdd;
