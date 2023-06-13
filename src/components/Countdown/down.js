import React from "react";
import DateTimeDisplay from "./display";
import { useCountdown } from "./Counter/Counter";

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>Expired!!!</span>
      <p>Please select a future date and time.</p>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="show-counter">
      <div className="countdown-link">
        <DateTimeDisplay value={days} type={"Days"} isDanger={days <= 3} />
        <p className="hidden-dis">:</p>
        <DateTimeDisplay value={hours} type={"Hours"} isDanger={false} />
        <p className="hidden-dis">:</p>
        <DateTimeDisplay value={minutes} type={"Mins"} isDanger={false} />
        <p className="hidden-dis">:</p>
        <DateTimeDisplay value={seconds} type={"Seconds"} isDanger={false} />
      </div>
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;
