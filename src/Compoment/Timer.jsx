import React from "react";
import { useEffect, useState } from "react";

const Timer = ({ duration }) => {
  const [time, setTime] = useState(duration);

  useEffect(() => {
    setTimeout(() => {
      setTime(time - 1000);
    }, 1000);
  }, [time]);

  // setInterval(() => {
  //   setTime(time - 1000);
  // }, 1000);

    const getFormattedTime = (miliseconds) => {
    let total_seconds = parseInt(Math.floor(miliseconds / 1000));
    let total_minutes = parseInt(Math.floor(total_seconds / 60));
    let total_hours = parseInt(Math.floor(total_minutes / 60));
    let days = parseInt(Math.floor(total_hours / 24));

    // formated to count for 60 into time

    let seconds = parseInt(total_seconds % 60);
    let minutes = parseInt(total_minutes % 60);
    let hours = parseInt(total_hours % 24);

    // console.log(parseInt(true));
    return (
      <div className=" ">
        {days}d {hours}h {minutes}m {seconds}s
      </div>
    );
  };
  return (
    <div className=" bg-cover bg-black h-screen">
      <h1 className="text-5xl  text-white pt-7 mb-8">Count Down Timer </h1>
      <div className=" text-9xl text-white ">{getFormattedTime(time)}</div>
    </div>
  );
};
export default Timer;
