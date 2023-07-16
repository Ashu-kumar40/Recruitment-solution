import React from "react";

function Client() {
  return (
    <div className="inline-flex w-[94px] h-[94px] sm:w-[72px] sm:h-[72px]">
      <img src={require('../../Assets/icons/client.png')} alt="Global" />
    </div>
  );
}

function Time() {
  return (
    <div className="inline-flex w-[94px] h-[94px] sm:w-[72px] sm:h-[72px]">
      <img src={require('../../Assets/icons/time.png')} alt="Global" />
    </div>
  );
}

function Hire() {
  return (
    <div className="inline-flex w-[94px] h-[94px] sm:w-[72px] sm:h-[72px]">
      <img src={require('../../Assets/icons/successful-hire.png')} alt="Global" />
    </div>
  );
}

function Feedback() {
  return (
    <div className="inline-flex w-[94px] h-[94px] sm:w-[72px] sm:h-[72px]">
      <img src={require('../../Assets/icons/feedback.png')} alt="Global" />
    </div>
  );
}

function Increment() {
  return (
    <div className="inline-flex w-[94px] h-[94px] sm:w-[72px] sm:h-[72px]">
      <img src={require('../../Assets/icons/increment.png')} alt="Global" />
    </div>
  );
}

function Global() {
  return (
    <div className="inline-flex w-[94px] h-[94px] sm:w-[72px] sm:h-[72px]">
      <img src={require('../../Assets/icons/global.png')} alt="Global" />
    </div>
  );
}

function NumIcon({
  color,
  num
}) {
  return (
    <div className={`num-icon-lg w-fit h-fit ${color} rounded-[50%] flex justify-center items-center`}>
      <span className="w-[94px] h-[94px] sm:w-[72px] sm:h-[72px] text-2xl sm:text-xl text-white flex justify-center items-center font-medium">{num}</span>
    </div>
  );
}

export { Client, Time, Hire, Feedback, Increment, Global, NumIcon };
