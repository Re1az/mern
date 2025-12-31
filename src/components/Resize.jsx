import React from "react";

export default function Resize() {
  return (
    <section className="p-4 ">
      <h1 className="text-center text-3xl">Built in Responiveness</h1>
      <p className=" text-center p-5 text-xl">
        Resize the page to see the effect!
      </p>
      <div className="grid grid-cols-2 mb-5 border border-gray-300 text-xm font-medium">
        <div className="bg-blue-400 p-5  text-white">
          <p className="pb-3">w3-half</p>
          <p className="pb-3">
            The w3-half class uses half (50%) of the screen window.
          </p>

          <p className="pb-3">
            On small screens (max 600 pixels) it automatically resizes to full
            screen width.
          </p>
        </div>
        <div className="p-5">
          <p>w3-half</p>
        </div>
      </div>
      <div className="grid grid-cols-3 mb-5 border border-gray-300 text-xm font-medium">
        <div className="bg-emerald-600 p-5  text-white">
          <p className="pb-3">w3-third</p>
          <p className="pb-3">
            The w3-third class uses third (33.33%) of the screen window.
          </p>

          <p className="pb-3">
            On small screens (max 600 pixels) it automatically resizes to full
            screen width.
          </p>
        </div>
        <div className="p-5">
          <p>w3-third</p>
        </div>
        <div className="p-5">
          <p>w3-third</p>
        </div>
      </div>
      <div className="grid grid-cols-4 border border-gray-300 text-xm font-medium">
        <div className="bg-red-500 p-5  text-white">
          <p className="pb-3">w3-quarter</p>
          <p className="pb-3">
            The w3-quarter class uses quarter (25%) of the screen window.
          </p>

          <p className="pb-3">
            On small screens (max 600 pixels) it automatically resizes to full
            screen width.
          </p>
        </div>
        <div className="p-5">
          <p>w3-quarter</p>
        </div>
        <div className="p-5">
          <p>w3-quarter</p>
        </div>
        <div className="p-5">
          <p>w3-quarter</p>
        </div>
      </div>
    </section>
  );
}
