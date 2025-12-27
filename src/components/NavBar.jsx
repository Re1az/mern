import React from "react";

export default function NavBar() {
  return (
    <header className="bg-black h-60">
      <div className="menu p-5 h-12 w-15  hover:bg-gray-200 ">
        <div className="w-5 bg-white  h-1 mb-1"></div>
        <div className="w-5 bg-white  h-1 mb-1"></div>
        <div className="w-5 bg-white  h-1 mb-1"></div>
      </div>
      <div className="info flex text-amber-50 flex-column flex-col items-center justify-between h-40">
        <p>BEAUTIFUL RESPONSIVE WEB SITES</p>
        <h1 className="text-2xl sm:text-4xl md:text-5xl">BUILT WITH W3.CSS</h1>
        <div className="button">
          <button className="px-4 py-2  hover:bg-white hover:text-black transition bg-gray-400 text-2xl">
            LEARN W3.CSS
          </button>
        </div>
      </div>
    </header>
  );
}
