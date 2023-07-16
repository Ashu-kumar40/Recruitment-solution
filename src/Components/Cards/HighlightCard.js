import React from "react";
import * as Icon from "../HighlightSec/Icon";
  
const Container =
  "card-shadow bg-neutral-100 relative min-w-[180px] max-w-[400px] px-8 pt-[80px] mt-[80px] pb-7 sm:pb-5 sm:pt-[50px] sm:mt-[50px] sm:px-6 rounded-br relative";

const iconClass =
  "absolute left-1/2 -translate-x-1/2 -translate-x-1/2 -top-[42px] sm:-top-[36px]";

export default function HighlightCard(
  {icon} 
) {

  
  let iconOutput = icon;
  
  switch (iconOutput) {
    case "client":
      iconOutput =<Icon.Client />
      break;
    
    case "time":
      iconOutput =<Icon.Time />
      break;
    
    case "hire":
      iconOutput =<Icon.Hire />
      break;
    
    case "feedback":
      iconOutput =<Icon.Feedback />
      break;
    
    case "increment":
      iconOutput =<Icon.Increment />
      break;
    
    case "global":
      iconOutput =<Icon.Global />
      break;
    
    case "number":
      iconOutput =<Icon.NumIcon />
      break;
    
    default:
      iconOutput =<Icon.Client />
      break;
  }
  return (
    <div className={Container}>
      <div className={iconClass} >
        {/* <Icon.Client />  */}
        {iconOutput}
      </div>
      <p className="text-sm sm:text-xs leading-6 sm:leading-4 text-center ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum possimus
        veniam quos incidunt praesentium qui aperiam aut minus recusandae nisi.
      </p>
    </div>
  );
}
