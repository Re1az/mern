import { NavLink } from "react-router";

export default function Header() {
  return (
    <div className=" px-5  py-2 flex items-baseline justify-between">
      <h1>Todo App</h1>
      <nav className="space-x-10">
        <NavLink to={"/addblog"}>Add Blog</NavLink>

        <NavLink to={"/add-post"}>Add Post</NavLink>
      </nav>
    </div>
  );
}
