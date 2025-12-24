import React from "react";

export default function taskComponent() {
  const city = "kathmandu";
  const population = 1000000;

  const firstName = "Ram";
  const lastName = "Gupta";

  return (
    <div>
      <p>{`The population of ${city} is ${population}`}</p>
      <p>{` ${firstName}  ${lastName}`}</p>
    </div>
  );
}
