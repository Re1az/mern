import React from "react";
import NavBar from "./components/NavBar";
import FelxibleCard from "./components/FelxibleCard";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { FaCss3 } from "react-icons/fa";
import { MdOutlineDiamond } from "react-icons/md";
import ColorClass from "./components/ColorClass";
import Resize from "./components/Resize";
import Container from "./components/Container";
import Card from "./components/Card";
import Map from "./components/Map";
import Movie from "./components/Movie";

export default function App() {
  return (
    <div>
      <NavBar />
      <div className="grid grid-cols-3 p-10 ">
        <FelxibleCard
          title={"Responsive"}
          icon={
            <i>
              <HiMiniComputerDesktop size={150} />
            </i>
          }
          discription={[
            "Built-in responsiveness",

            "Mobile first fluid grid",

            "Fits any screen sizes",

            "PC Tablet and Mobile",
          ]}
        />
        <FelxibleCard
          title={"CSS Standard"}
          icon={
            <i>
              <FaCss3 size={150} />
            </i>
          }
          discription={[
            "Standard CSS only",

            "Easy to learn",

            "No need for jQuery",

            "No JavaScript library",
          ]}
        />
        <FelxibleCard
          title={"Design"}
          icon={
            <i>
              <MdOutlineDiamond size={150} />
            </i>
          }
          discription={[
            "Paper like design",

            "Bold colors and shadows",

            "Equal across platforms",

            "Equal across devices",
          ]}
        />
      </div>
      <ColorClass />

      <Resize />
      <Container />
      <Card />
      <Map />
      <Movie />
    </div>
  );
}
