import MovieCard from "@/components/MovieCard/MovieCard";
import Header from "@/components/Header/Header.js";

const API_URL = "https://api.themoviedb.org/3";
const TOKEN = process.env.DB_TOKEN;

export default async function Searcher({ params }) {
  const response = await fetch(
    `${API_URL}/search/movie?query=${params.elect}`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    }
  );
  const data = await response.json();

  console.log(params.elect);
  console.log(data);

  return (
    <>
      <Header></Header>
      <div className="card-cont">
        {data.results.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            id={movie.id}
          ></MovieCard>
        ))}
      </div>
    </>
  );
}
