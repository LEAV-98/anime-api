import React, { useState } from "react";

export const Search = ({ realizarBusqueda }) => {
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);
  const capturarBusqueda = (e) => {
    setSearch(e.target.value);
  };
  const busqueda = () => {
    if (search === "") {
      setError("Está vacío, no seas imbecil");
      setTimeout(() => {
        setError(null);
      }, 3000);
      return;
    }
    realizarBusqueda(search);
    setSearch("");
  };
  const enterKey = (e) => {
    e.key === "Enter" && busqueda();
  };
  return (
    <div className="col-sm-12 ">
      <h2>Buscador</h2>
      <div type="text" className="form-group">
        <input
          type="text"
          className="form-control mb-2"
          onChange={(e) => {
            capturarBusqueda(e);
          }}
          value={search}
          onKeyPress={(e) => {
            enterKey(e);
          }}
        />
        <button
          className="btn btn-success px-4"
          onClick={() => {
            busqueda();
          }}
        >
          Buscar
        </button>
      </div>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};
