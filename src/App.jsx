import React from "react";
import NavBar from "./components/NavBar";
import FelxibleCard from "./components/FelxibleCard";
import { HiDesktopComputer } from "react-icons/hi";
import { FaCss3 } from "react-icons/fa";
import { GoRuby } from "react-icons/go";

export default function App() {
  return (
    <div>
      <NavBar />
      <div
        className="grid grid-cols-1 sm:grid-cols-2 
                      lg:grid-cols-3 "
      >
        <FelxibleCard
          title={"Responsive"}
          icon={<HiDesktopComputer size={100} color="#333" />}
          discription={[
            "Built-in responsiveness",
            "Mobile first fluid grid",
            "Fits any screen sizes",
            "PC Tablet and Mobile",
          ]}
        />
        <FelxibleCard
          title={"Standard CSS"}
          icon={<FaCss3 size={100} color="#333" />}
          discription={[
            "Standard CSS only",

            "Easy to learn",

            "No need for jQuery",

            "No JavaScript library",
          ]}
        />
        <FelxibleCard
          title={"Responsive"}
          icon={<GoRuby size={100} color="#333" />}
          discription={[
            "Paper like design",

            "Bold colors and shadows",

            "Equal across platforms",

            "Equal across devices",
          ]}
        />
      </div>
    </div>
  );
}
