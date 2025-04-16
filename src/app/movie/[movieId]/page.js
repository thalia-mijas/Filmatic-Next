import Header from "@/components/Header/Header.js";

const API_URL = "https://api.themoviedb.org/3";
const TOKEN = process.env.DB_TOKEN;

export default async function Details({ params }) {
  const response = await fetch(`${API_URL}/movie/${params.movieId}`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });
  const data = await response.json();

  console.log(data);

  return (
    <>
      <Header></Header>
      <div className="movie-page">
        <h2>{data.title}</h2>
        <div className="movie-details">
          <div className="movie-img">
            {data.poster_path === null ? (
              <img alt={`Default poster`} src="/poster_filmatic.png" />
            ) : (
              <img
                alt={`Poster of ${data.title}`}
                src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
              />
            )}
          </div>
          <div className="movie-info">
            <span>
              <b>Genres:</b>
            </span>
            <ul>
              {data.genres?.map((genre) => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
            <p>
              <b>Overview:</b> {data.overview}
            </p>
            <p>
              <b>Vote average:</b> {data.vote_average}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
