const hhmm = (value: any) => {
  value = new Date(value);
  var hours = ("0" + value.getHours()).slice(-2);
  var minutes = ("0" + value.getMinutes()).slice(-2);

  return hours + ":" + minutes;
};

export default hhmm;
