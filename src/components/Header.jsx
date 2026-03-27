import { NavLink } from "react-router";
import { Button } from "./ui/button";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import UserDropDown from "@/features/user/UserDropDown";

export default function Header() {
  const nav = useNavigate();
  const { user } = useSelector((state) => state.userSlice);
  return (
    <div className="bg-black p-5 flex justify-between">
      <div className="">
        <h1 className="text-white" onClick={() => nav("/")}>
          WebStore
        </h1>
      </div>
      {user ? (
        <UserDropDown user={user} />
      ) : (
        <nav className="flex gap-7">
          <NavLink to={"/login"}>
            <Button variant="outline" className={"bg-none"}>
              Login
            </Button>
          </NavLink>

          <Button onClick={() => nav("/register")} className={"bg-blue-500"}>
            SignUp
          </Button>
        </nav>
      )}
    </div>
  );
}
