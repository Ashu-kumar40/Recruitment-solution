import React from "react"
import './CSS/btn.css'

// const dis =
//   "sub-btn border-2 bg-neutral-100 text-neutral-400 border-neutral-400";

const active =
  "sub-btn border-2 border-primary-900 bg-primary-900 text-white";

function BtnFill({ handleSubmit, onClick, action, text, onInput }) {
  return (
    <>
      <button
        className={
          "btn-common inline-flex bg-primary-900 rounded-default border-2 border-primary-900 font-medium  text-white "
        }
        onSubmit={handleSubmit}
        type={action}
        onClick={onClick}
        onInput={onInput}
      >
        {text}
      </button>
    </>
  );
}

function BtnOutlined({ handleSubmit, onClick, action, text }) {
  return (
    <>
      <button
        className=" btn-common border-2 border-primary-900 rounded-default  font-medium text-primary-900 hover:bg-primary-900 hover:text-white transition duration-100"
        onSubmit={handleSubmit}
        type={action}
        onClick={onClick}
      >
        {text}
      </button>
    </>
  );
}

function BtnOutlinedDark({ handleSubmit, onClick, action, text }) {
  return (
    <>
      <button
        className=" btn-common border border-white rounded-default font-medium text-white  hover:bg-white hover:text-primary-900 transition duration-100"
        onSubmit={handleSubmit}
        type={action}
        onClick={onClick}
      >
        {text}
      </button>
    </>
  );
}

function SubBtn({ handleSubmit, action, onClick, text, custom = active }) {
  return (
    <>
      <button
        className={`min-w-fit ${custom}`}
        onSubmit={handleSubmit}
        type={action}
        onClick={onClick}
      >
        {text}
      </button>
    </>
  );
}

function TagFillDark({ handleSubmit, onClick, action, text }) {
  return (
    <>
      <button
        className="btn-common bg-primary-900 border-2 border-primary-900 rounded-round text-white leading-6 sm:leading-3 md:leading-4"
        onSubmit={handleSubmit}
        type={action}
        onClick={onClick}
      >
        {text}
      </button>
    </>
  );
}

function TagFillWDark({ handleSubmit, onClick, action, text }) {
  return (
    <>
      <button
        className="btn-common bg-primary-900 rounded-round w-full text-white"
        onSubmit={handleSubmit}
        type={action}
        onClick={onClick}
      >
        {text}
      </button>
    </>
  );
}

function TagOutlined({ handleSubmit, onClick, action, text }) {
  return (
    <>
      <button
        className="min-w-fit py-1 px-3 inline-flex rounded-round border-2 border-secondary-s6 bg-[#d7a5ff66] justify-center items-center font-medium text-xs text-secondary-s6 transition duration-100"
        onSubmit={handleSubmit}
        type={action}
        onClick={onClick}
        disabled
      >
        {text}
      </button>
    </>
  );
}

export {
  BtnFill,
  BtnOutlined,
  BtnOutlinedDark,
  SubBtn,
  TagOutlined,
  TagFillDark,
  TagFillWDark,
};
