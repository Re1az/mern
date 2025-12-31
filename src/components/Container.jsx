import React from "react";

export default function Container() {
  return (
    <section className="p-5">
      <h1 className="text-center text-2xl font-medium">Containers</h1>
      <p className="p-2 text-center text-xm font-medium">
        Use containers to create headers, sections and footers.{" "}
      </p>
      <header className="bg-gray-500 p-5">
        <h1 className="text-white text-3xl">Header</h1>
      </header>
      <main className=" p-5">
        <h1 className=" text-3xl py-2">London</h1>
        <ul className="">
          <li className="py-2 ">
            London is the capital city of England. It is the most populous city
            in the United Kingdom, with a metropolitan area of over 13 million
            inhabitants.
          </li>
          <li className="py-2 ">
            Standing on the River Thames, London has been a major settlement for
            two millennia, its history going back to its founding by the Romans,
            who named it Londinium.
          </li>
          <li className="py-2 ">
            By the way, you can add a close icon to all containers if you want
            the ability to hide them. Look to your right!
          </li>
        </ul>
      </main>
      <footer className="bg-gray-500 text-xl p-4">
        <h2 className="text-white ">Footer</h2>
        <small className="text-neutral-400 ">
          Footer information goes here
        </small>
      </footer>
    </section>
  );
}
