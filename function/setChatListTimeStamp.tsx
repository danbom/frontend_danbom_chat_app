import hhmm from "../function/setHHMM";
import day from "../function/setDay";

const timestamp = (value: any) => {
  value = new Date(value);
  var today = new Date();

  return today.getDate() - value.getDate() > 1 ? day(value) : hhmm(value);
};

export default timestamp;
