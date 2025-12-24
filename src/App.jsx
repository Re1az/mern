export default function App() {
  const city = "kathmandu";
  const population = 1000000;

  const movieData = {
    id: "20fce5d2-35ac-4d56-9883-418f33bac54f",
    movie_id: 238215,
    original_title: "The Cobbler",
    original_language: "en",
    overview:
      "Max Simkin repairs shoes in the same New York shop that has been in his family for generations. Disenchanted with the grind of daily life, Max stumbles upon a magical heirloom that allows him to step into the lives of his customers and see the world in a new way. Sometimes walking in another man's shoes is the only way one can discover who they really are.",
    popularity: 15.75,
    poster_path:
      "https://image.tmdb.org/t/p/original/k6CYisrf2J2FXzvSXVJSscHc7Kj.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/ysSUDoBeG5oIz7e4vkTtsuGBXfe.jpg",
    release_date: "Thu, 09/11/2014",
    vote_average: 5.9,
    vote_count: 1542,
    adult: 0,
  };

  return (
    <div className="w-70 p-5 bg-green-300 m-auto">
      <h1>{movieData.original_title}</h1>
      <img
        className="rounded-2xl  w-50"
        src="https://image.tmdb.org/t/p/original/k6CYisrf2J2FXzvSXVJSscHc7Kj.jpg"
        alt=""
      />
      <div className="flex gap-5 items-center">
        <h2>{movieData.original_language}</h2>
        <p>{movieData.popularity}</p>
        <p>{movieData.release_date}</p>
      </div>
      <p className="w-60">{movieData.overview}</p>
    </div>
  );
}
