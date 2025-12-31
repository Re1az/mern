import React from "react";
import Header from "../../components/Header";
import { NavLink, Outlet } from "react-router";

export default function Home() {
  return (
    <div>
      <Header />
      <div>
        <h1>This is home page!!</h1>
        <p>Welcome to React.</p>
      </div>
      <NavLink to={"/page1"}>Page 1</NavLink>
      <NavLink to={"/page2"}>Page 2</NavLink>
      <Outlet />
    </div>
  );
}
