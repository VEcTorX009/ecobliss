import Loader from "react-loader-spinner";

import React from "react";
import { playfairDisplay } from "../font";

export default function Load() {
  return (
    <div
      style={{ fontFamily: playfairDisplay.style.fontFamily }}
      className="flex flex-col h-screen w-screen items-center justify-center"
    >
      <h1 className="text-9xl text-center text-green-800">Loading</h1>
    </div>
  );
}
