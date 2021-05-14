import React, { useState } from "react";
import { AnimeList } from "./components/AnimeList";
import { Error } from "./components/Error";
import { Loading } from "./components/Loading";
import { Search } from "./components/Search";
import { animeApi } from "./helpers/animeApi";

export const App = () => {
  const [animes, setAnimes] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const getAnime = (busqueda) => {
    setLoading(true);
    animeApi(busqueda)
      .then((animesArray) => {
        setAnimes(animesArray.results);
        // console.log(animesArray.results);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError("Busqueda no realizada con exito, pruebe nuevamente");
        setTimeout(() => {
          setError(null);
        }, 3000);
        setLoading(null);
      });
  };
  const realizarBusqueda = (busqueda) => {
    setError(null);
    getAnime(busqueda);
  };
  return (
    <div className="container mt-5">
      <div className="row d-flex justify-content-center align-items-center">
        <Search realizarBusqueda={realizarBusqueda} />
        <AnimeList animes={animes} />
      </div>
      {error && <Error error={error} />}
      {loading && <Loading />}
    </div>
  );
};
