const day = (value: any) => {
  value = new Date(value);
  var week = new Array(
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일"
  );

  return week[value.getDay()];
};

export default day;
