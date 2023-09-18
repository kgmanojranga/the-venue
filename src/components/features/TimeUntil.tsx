import { useState, useEffect, useCallback } from "react";
import { Slide } from "react-awesome-reveal";

type Time = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
};
function TimeUntil() {
  const [time, setTime] = useState<Time>({
    days: "0",
    hours: "0",
    minutes: "0",
    seconds: "0"
  });

  const renderItem = (time: string, value: string) => (
    <div className="countdown_item">
      <div className="countdown_time">{time}</div>
      <div className="countdown_time">{value}</div>
    </div>
  );

  const getTimeUntil = useCallback((deadline: string) => {
    const time = Date.parse(deadline) - Date.parse(new Date().toISOString());
    if (time < 0) {
      console.log("Date Passed");
    } else {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      const newTime = {
        days: `${days}`,
        hours: `${hours}`,
        minutes: `${minutes}`,
        seconds: `${seconds}`
      };

      setTime(newTime);
    }
  }, []);

  useEffect(() => {
    const deadLine = "Sep, 11, 2024, 22:25:00";
    setInterval(() => getTimeUntil(deadLine), 1000);
  }, [getTimeUntil]);

  return (
    <Slide direction="left" delay={1000}>
      <div className="countdown_wrapper">
        <div className="countdown_top">Event starts in</div>
        <div className="countdown_bottom">
          {renderItem(time.days, "Days")}
          {renderItem(time.hours, "Hours")}
          {renderItem(time.minutes, "Min")}
          {renderItem(time.seconds, "Sec")}
        </div>
      </div>
    </Slide>
  );
}

export { TimeUntil };
