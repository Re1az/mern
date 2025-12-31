import React from "react";

export default function ColorClass() {
  return (
    <div className="flex pt-10 pb-10 flex-col p-5">
      <h2 className="text-3xl text-center p-5">Color Class</h2>

      <div className="flex w-full @sm:flex-col md:flex-col lg:flex-row flex-wrap h-10 justify-center">
        <div className="red bg-red-500 flex-1 p-3 text-white">Red</div>
        <div className="blue bg-blue-600 flex-1 p-3 text-white">Blue</div>
        <div className="blue-gray bg-gray-600 flex-1 p-3 text-white">
          Blue Gray
        </div>
        <div className="teal bg-teal-600 flex-1 p-3 text-white">Teal</div>
        <div className="yellow bg-yellow-300 flex-1 p-3">Yellow</div>
        <div className="orange bg-orange-500 flex-1 p-3 ">Orange</div>
      </div>
    </div>
  );
}
