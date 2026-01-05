import React from "react";

export default function card({ image, title, discription }) {
  const movies = [
    {
      id: 1,
      title: "Inception",
      genre: "Sci-Fi",
      releaseYear: 2010,
      rating: 8.8,
      durationMinutes: 148,
      director: "Christopher Nolan",
    },
    {
      id: 2,
      title: "The Dark Knight",
      genre: "Action",
      releaseYear: 2008,
      rating: 9.0,
      durationMinutes: 152,
      director: "Christopher Nolan",
    },
    {
      id: 3,
      title: "Interstellar",
      genre: "Sci-Fi",
      releaseYear: 2014,
      rating: 8.6,
      durationMinutes: 169,
      director: "Christopher Nolan",
    },
    {
      id: 4,
      title: "Parasite",
      genre: "Thriller",
      releaseYear: 2019,
      rating: 8.6,
      durationMinutes: 132,
      director: "Bong Joon-ho",
    },
    {
      id: 5,
      title: "Avengers: Endgame",
      genre: "Superhero",
      releaseYear: 2019,
      rating: 8.4,
      durationMinutes: 181,
      director: "Anthony Russo, Joe Russo",
    },
    {
      id: 6,
      title: "Joker",
      genre: "Drama",
      releaseYear: 2019,
      rating: 8.4,
      durationMinutes: 122,
      director: "Todd Phillips",
    },
    {
      id: 7,
      title: "Forrest Gump",
      genre: "Drama",
      releaseYear: 1994,
      rating: 8.8,
      durationMinutes: 142,
      director: "Robert Zemeckis",
    },
    {
      id: 8,
      title: "The Matrix",
      genre: "Sci-Fi",
      releaseYear: 1999,
      rating: 8.7,
      durationMinutes: 136,
      director: "Lana Wachowski, Lilly Wachowski",
    },
    {
      id: 9,
      title: "Gladiator",
      genre: "Action",
      releaseYear: 2000,
      rating: 8.5,
      durationMinutes: 155,
      director: "Ridley Scott",
    },
    {
      id: 10,
      title: "Titanic",
      genre: "Romance",
      releaseYear: 1997,
      rating: 7.9,
      durationMinutes: 195,
      director: "James Cameron",
    },
  ];
  return (
    <div className="grid grid-cols-3 gap-4">
      {movies.map((movie, index) => {
        return (
          <div className="flex gap-3 flex-col border-2" key={movie.id}>
            <h1>{movie.title}</h1>
            <span>{movie.genre}</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Inventore, illo.
            </p>
          </div>
        );
      })}
    </div>
  );
}
