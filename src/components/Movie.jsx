import React from "react";

export default function Movie() {
  return (
    <div className="p-5">
      <header className="bg-indigo-600">
        <h1 className="text-3xl text-white">Theme Indigo</h1>
      </header>
      <main>
        <h1 className="text-indigo-500 font-medium text-xl">Movies 2014</h1>
        <hr />
        <h2 className="text-xl">Frozen</h2>
        <p>The response to the animation was ridiculos </p>
        <hr />
        <h2 className="text-xl">The Fault in Our Stars</h2>
        <p>Touching, gripping and genuinely well made</p>
        <hr />
        <h2 className="text-xl">The Avengers</h2>
        <p>A huge sucess for Marvel and Disney</p>
      </main>
      <footer className="bg-indigo-600 flex justify-end px-10 text-white">
        <button>Next</button>
      </footer>
    </div>
  );
}
