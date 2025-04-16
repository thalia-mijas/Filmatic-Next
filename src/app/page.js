import MovieCard from "@/components/MovieCard.js";
import Header from "@/components/Header.js";
import "./page.module.css";

const API_URL = "https://api.themoviedb.org/3";
const TOKEN = process.env.DB_TOKEN;

export default async function Home() {
  const response = await fetch(`${API_URL}/movie/popular`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });
  const data = await response.json();

  return (
    <>
      <Header></Header>
      <div className="card-cont">
        {data.results?.map((movie) => (
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
