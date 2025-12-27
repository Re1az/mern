import React from "react";

export default function card({ image, title, discription }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="flex flex-col border-2">
        <img className="border-2 w-30" src={image} alt={title} />
        <h1>{title}</h1>
        <p>{discription}</p>
      </div>
    </div>
  );
}
