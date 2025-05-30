import MovieCard from "@/components/MovieCard";

const API_URL = "https://api.themoviedb.org/3";
const TOKEN = process.env.DB_TOKEN;

export default async function Searcher({ params }) {
  const { elect } = await params;

  const response = await fetch(`${API_URL}/search/movie?query=${elect}`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });
  const data = await response.json();

  return (
    <>
      <div className="card-cont">
        {data.results.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            id={movie.id}
          />
        ))}
      </div>
    </>
  );
}
