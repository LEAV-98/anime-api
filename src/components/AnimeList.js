import React from "react";
import { Anime } from "./Anime";

export const AnimeList = ({ animes }) => {
  return (
    <div className="col-sm-10 ">
      {animes.map((anime) => (
        <Anime anime={anime} key={anime.mal_id} />
      ))}
    </div>
  );
};
