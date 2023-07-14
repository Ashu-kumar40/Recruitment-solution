import React from "react";

const dis =
  "sub-btn py-2 flex px-3 rounded-br border-2 justify-center items-center sm:text-xs w-full font-medium text-sm leading-6 sm:leading-3 md:leading-4 bg-neutral-100 text-neutral-400 xborder-neutral-400";

const active =
  "sub-btn py-2 flex px-3 rounded-br border-2 justify-center items-center sm:text-xs w-full font-medium text-sm leading-6 sm:leading-3 md:leading-4 border-primary-900  bg-primary-900 text-white";

function BtnFill({ handleSubmit, onClick, action, text }) {
  return (
    <>
      <button
        className={
          "py-2 sm:py-1 inline-flex px-4 bg-primary-900 rounded-br border-2 border-primary-900 justify-center items-center sm:text-xs font-medium text-sm text-white leading-6 sm:leading-3 md:leading-4 w-fit"
        }
        onSubmit={handleSubmit}
        type={action}
        onClick={onClick}
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
        className="py-2 sm:py-1 inline-flex px-4 border-2 border-primary-900 rounded-br justify-center items-center sm:text-xs font-medium text-sm text-primary-900 leading-6 sm:leading-3 md:leading-4 hover:bg-primary-900 hover:text-white transition duration-100"
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
        className="py-2 inline-flex px-4 border border-white rounded-br justify-center items-center sm:text-xs font-medium text-sm text-white leading-6 sm:leading-3 md:leading-4 hover:bg-white hover:text-primary-900 transition duration-100"
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
        className={custom}
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
        className="py-2 inline-flex px-4 bg-primary-900 border-2 border-primary-900 rounded-round justify-center items-center sm:text-xs font-medium text-sm text-white leading-6 sm:leading-3 md:leading-4"
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
        className="w-full py-2 flex px-4 bg-primary-900 rounded-round justify-center items-center sm:text-xs font-medium text-sm text-white leading-6 sm:leading-3 md:leading-4"
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
        className="py-2 px-5 inline-flex rounded-round border-2 border-primary-200 justify-center items-center sm:text-xs font-medium text-sm text-primary-200 leading-6 sm:leading-3 md:leading-4 hover:border-primary-200 hover:bg-primary-200 hover:text-white transition duration-100"
        onSubmit={handleSubmit}
        type={action}
        onClick={onClick}
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
