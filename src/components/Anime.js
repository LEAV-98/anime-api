import React from "react";

export const Anime = ({ anime }) => {
  return (
    <div className="card  my-2">
      <a href={anime.url} target="black" className=" text-center mt-2">
        <img src={anime.image_url} alt="auto" />
      </a>
      <div className="card-body d-flex justify-content-center align-items-center flex-column text-center">
        <h2 className="card-title">{anime.title}</h2>

        <p className="card-text">{`Numero de Episodios: ${anime.episodes}`}</p>
      </div>
    </div>
  );
};
