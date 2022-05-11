/* 상태바 */
import { useEffect, useState } from "react";
import styled from "styled-components";

import palette from "../styles/palette";

function StatusBar() {
  const [time, setTime] = useState<string>("loading...");

  const getTime = () => {
    const date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var ampm = hour >= 12 ? "PM" : "AM";
    hour = hour % 12;
    hour = hour ? hour : 12;
    var strTime =
      hour +
      ":" +
      (minute < 10 ? "0" + minute.toString() : minute) +
      " " +
      ampm;
    setTime(strTime);
  };

  useEffect(() => {
    getTime();
    setInterval(getTime, 1000);
    return () => {
      setInterval(getTime, 1000);
    };
  }, []);

  return (
    <Container>
      <Time>{time}</Time>
    </Container>
  );
}

export default StatusBar;

const Container = styled.div`
  z-index: 10;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 1.25rem;
  background-color: ${palette.maincolor};
`;

const Time = styled.span`
  opacity: 0.8;
  font-size: 0.75rem;
  font-weight: 500;
  color: ${palette.white};
`;
