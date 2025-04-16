import MovieCard from "@/components/MovieCard/MovieCard.js";
import Header from "@/components/Header/Header.js";
import "./page.module.css";

const API_URL = "https://api.themoviedb.org/3";
const TOKEN = process.env.DB_TOKEN;

console.log(TOKEN);

export async function GET() {
  const db = await myDB.connect({
    token: process.env.DB_TOKEN,
  });

  console.log(db);

  return db;
}

export default async function Home() {
  const response = await fetch(`${API_URL}/movie/popular`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });
  const data = await response.json();

  console.log(data);

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
