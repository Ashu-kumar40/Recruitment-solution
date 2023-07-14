import React from "react";
import { Client } from "../HighlightIcons/Icon";

const Container =
  "relative min-w-[180px] bg-white px-8 pt-[80px] pb-7 sm:pb-5 sm:pt-[50px] sm:px-6 rounded-br relative";

const Icon =
  "absolute left-1/2 -translate-x-1/2 -translate-x-1/2 -top-[42px] sm:-top-[36px]";

export default function HighlightCard() {
  return (
    <div className={Container}>
      <div className={Icon} >
        <Client />
      </div>
      <p className="text-sm sm:text-xs leading-6 sm:leading-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum possimus
        veniam quos incidunt praesentium qui aperiam aut minus recusandae nisi.
      </p>
    </div>
  );
}
