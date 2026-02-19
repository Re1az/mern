import React from "react";
import { NavLink } from "react-router";
export default function Notfound() {
  return (
    <div>
      Notfound
      <h1>Sorry page not found!!!</h1>
      <NavLink to={"/"}>Go Back</NavLink>
    </div>
  );
}
