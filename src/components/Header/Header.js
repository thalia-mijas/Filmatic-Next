"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import "./Header.css";

export default function Header() {
  const [searchMovie, setSearchMovie] = useState("");
  const router = useRouter();

  const handleKeyDown = (event) => {
    console.log(event);
    if (searchMovie != "") {
      if (event.type === "keydown") {
        router.push(`search/${searchMovie.replace(" ", "+")}`);
      }
    } else {
      router.push(`/`);
    }
  };

  return (
    <>
      <div className="cont-header">
        <div className="title">
          <img className="logo" src="/logo.svg" alt="Logo Filmatic" />
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
