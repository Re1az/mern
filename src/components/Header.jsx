import React from "react";
import { NavLink, Outlet } from "react-router";

export default function Header() {
  return (
    <div className="bg-black flex  text-white px-5 py-2 justify-between gap-5 items-baseline ">
      <h1 className="text-2xl">React Router</h1>
      <nav className="flex gap-10">
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
      </nav>
    </div>
  );
}
