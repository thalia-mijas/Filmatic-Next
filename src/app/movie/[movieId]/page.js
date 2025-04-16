import Image from "next/image";
import Header from "@/components/Header.js";

const API_URL = "https://api.themoviedb.org/3";
const TOKEN = process.env.DB_TOKEN;

export default async function Details({ params }) {
  const { movieId } = await params;

  const response = await fetch(`${API_URL}/movie/${movieId}`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });

  const data = await response.json();

  return (
    <>
      <Header></Header>
      <div className="movie-page">
        <h2>{data.title}</h2>
        <div className="movie-details">
          <div className="movie-img">
            {data.poster_path === null ? (
              <Image
                className="movie-img-img"
                src="/poster_filmatic.png"
                alt="Default poster"
                priority
              />
            ) : (
              <Image
                className="movie-img-img"
                src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                alt={`Poster of ${data.title}`}
                width={225}
                height={300}
                priority
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
            <p>
              <b>Release date:</b> {data.release_date}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
