import React from "react";
import { DiApple, DiCss3, DiRedis } from "react-icons/di";

const res = [
  {
    label: "Responsive",
    icon: <DiApple />,
    properties: [
      "Built-in responsiveness",
      "Mobile first fluid grid",
      "Fits any screen sizes",
      "PC Tablet and Mobile",
    ],
  },
  {
    label: "Standard CSS",
    icon: <DiCss3 />,
    properties: [
      "Standard CSS only",
      "Easy to learn",
      "No need for jQuery",
      "No JavaScript library",
    ],
  },
  {
    label: "Design",
    icon: <DiRedis />,
    properties: [
      "Paper like design",
      "Bold colors and shadows",
      "Equal across platforms",
      "Equal across devices",
    ],
  },
];

export default function Map() {
  return (
    <div className="grid grid-cols-3 border-2">
      {res.map((item, index) => {
        <div key={index}>
          <h1>{item.label}</h1>
          <i>{item.icon}</i>
          {item.properties.map((prop, ind) => {
            <ul key={ind}>
              <li>{prop}</li>
            </ul>;
          })}
        </div>;
      })}
    </div>
  );
}
