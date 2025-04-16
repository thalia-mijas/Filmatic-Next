"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Header() {
  const [searchMovie, setSearchMovie] = useState("");
  const router = useRouter();

  const handleKeyDown = (event) => {
    if (searchMovie != "") {
      if (event.key === "Enter") {
        router.push(`../search/${searchMovie.replace(" ", "+")}`);
      }
    }
  };

  return (
    <>
      <div className="cont-header">
        <div className="title">
          <Image
            src="/logo.svg"
            alt="Logo Filmatic"
            width={75}
            height={75}
            priority
          />
          <h1>Filmatic</h1>
        </div>
        <input
          type="text"
          placeholder="Search your movie"
          value={searchMovie}
          onChange={(e) => setSearchMovie(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
    </>
  );
}
