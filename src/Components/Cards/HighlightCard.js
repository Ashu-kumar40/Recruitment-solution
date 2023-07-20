import React from "react";
import * as Icon from "../HighlightSec/Icon";
import '../CSS/highlightCard.css'
  
const Container =
  "highlight-card-container card-shadow bg-neutral-100 relative min-w-[180px] max-w-[400px] px-8 pt-[80px] mt-[80px] pb-7 rounded-default relative";

const iconClass =
  "absolute left-1/2 -translate-x-1/2 -translate-x-1/2 -top-[35px] lg:-top-[48px]";

export default function HighlightCard(
  {icon, desc} 
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
      <p className="highlight-desc leading-6 text-center ">
        {desc}
      </p>
    </div>
  );
}
