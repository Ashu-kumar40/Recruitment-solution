import React from "react";
import '../CSS/icon.css'

function Client() {
  return (
    <div className="highlight-icon">
      <img src={require('../../Assets/icons/client.png')} alt="Global" />
    </div>
  );
}

function Time() {
  return (
    <div className="highlight-icon">
      <img src={require('../../Assets/icons/time.png')} alt="Global" />
    </div>
  );
}

function Hire() {
  return (
    <div className="highlight-icon">
      <img src={require('../../Assets/icons/successful-hire.png')} alt="Global" />
    </div>
  );
}

function Feedback() {
  return (
    <div className="highlight-icon">
      <img src={require('../../Assets/icons/feedback.png')} alt="Global" />
    </div>
  );
}

function Increment() {
  return (
    <div className="highlight-icon">
      <img src={require('../../Assets/icons/increment.png')} alt="Global" />
    </div>
  );
}

function Global() {
  return (
    <div className="highlight-icon">
      <img src={require('../../Assets/icons/global.png')} alt="Global" />
    </div>
  );
}

function NumIcon({
  color,
  num
}) {
  return (
    <div className={`num-icon-lg w-fit h-fit ${color} rounded-round flex justify-center items-center`}>
      <span className="num-icon-text">{num}</span>
    </div>
  );
}

export { Client, Time, Hire, Feedback, Increment, Global, NumIcon };
