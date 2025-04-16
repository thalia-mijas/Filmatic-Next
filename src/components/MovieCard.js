"use client";

import Link from "next/link";
import Image from "next/image";

export default function MovieCard({ title, poster_path, id }) {
  return (
    <Link key={id} href={`/movie/${id}`}>
      <div className="movie-poster">
        <h3>{title}</h3>
        {poster_path === null ? (
          <Image
            className="movie-poster-img"
            src="/poster_filmatic.png"
            alt="Default poster"
            width={200}
            height={250}
            priority
          />
        ) : (
          <Image
            className="movie-poster-img"
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={`Poster of ${title}`}
            width={200}
            height={250}
            priority
          />
        )}
      </div>
    </Link>
  );
}
