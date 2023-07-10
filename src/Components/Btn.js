import React from "react";

function BtnFill() {
  return (
    <div className="py-2 inline-flex px-4 bg-primary-900 rounded-br border-2 border-primary-900 justify-center items-center">
      <span className=" sm:text-xs font-medium text-sm text-white leading-6 sm:leading-3 md:leading-4">
        Register
      </span>
    </div>
  );
}

function BtnOutlined() {
  return (
    <div className="py-2 inline-flex px-4 border-2 border-primary-900 rounded-br justify-center items-center">
      <span className=" sm:text-xs font-medium text-sm text-primary-900 leading-6 sm:leading-3 md:leading-4">
        Login
      </span>
    </div>
  );
}

function BtnOutlinedDark() {
  return (
    <div className="py-2 inline-flex px-4 border border-white rounded-br justify-center items-center">
      <span className=" sm:text-xs font-medium text-sm text-white leading-6 sm:leading-3 md:leading-4">
        Login
      </span>
    </div>
  );
}

function SubBtn() {
  return (
    <div className="py-2 flex px-3 bg-primary-900 rounded-br border-2 border-primary-900 justify-center items-center">
      <span className=" sm:text-xs font-medium text-sm text-white leading-6 sm:leading-3 md:leading-4">
        Submit
      </span>
    </div>
  );
}
function TagFill() {
  return (
    <div className="py-2 inline-flex px-4 bg-primary-200 rounded-round border-2 border-primary-200 justify-center items-center">
      <span className=" sm:text-xs font-medium text-sm text-white leading-6 sm:leading-3 md:leading-4">
        Frontend Developer
      </span>
    </div>
  );
}

function TagFillDark() {
  return (
    <div className="py-2 inline-flex px-4 bg-primary-900 rounded-round justify-center items-center">
      <span className=" sm:text-xs font-medium text-sm text-white leading-6 sm:leading-3 md:leading-4">
        Frontend Developer
      </span>
    </div>
  );
}

function TagOutlined() {
  return (
    <div className="py-2 px-5 inline-flex rounded-round border-2 border-primary-200 justify-center items-center">
      <span className=" sm:text-xs font-medium text-sm text-primary-200 leading-6 sm:leading-3 md:leading-4">
        Frontend Developer
      </span>
    </div>
  );
}

function Inp(){
    return (
        <>
        <input 
        type="text" 
        placeholder="Search Role" 
        className="py-2 flex px-3 rounded-br border-2 border-primary-900 items-center  sm:text-xs font-medium text-sm leading-5 sm:leading-2 md:leading-3"
        />
        </>
    );
}

export { 
    BtnFill, 
    BtnOutlined, 
    BtnOutlinedDark, 
    SubBtn, 
    TagFill, 
    TagOutlined, 
    TagFillDark,
    Inp,
};
