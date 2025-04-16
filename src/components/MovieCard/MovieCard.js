"use client";

import Link from "next/link";
import "./MovieCard.css";

export default function MovieCard({ title, poster_path, id }) {
  return (
    <Link key={id} href={`/movie/${id}`}>
      <div className="movie-poster">
        <h3>{title}</h3>
        {poster_path === null ? (
          <img alt={`Default poster`} src="/poster_filmatic.png" />
        ) : (
          <img
            alt={`Poster of ${title}`}
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          />
        )}
      </div>
    </Link>
  );
}
