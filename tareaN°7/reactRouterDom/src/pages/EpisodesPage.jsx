import React, { useEffect, useState } from 'react';

function EpisodesPage() {
  const [episodes, setEpisodes] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/episode?page=${page}`)
      .then((response) => response.json())
      .then((data) => setEpisodes(data.results));
  }, [page]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Lista de Episodios</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', padding: '20px' }}>
        {episodes.map((episode) => (
          <div key={episode.id} style={{ border: '1px solid gray', padding: '10px', borderRadius: '8px' }}>
            <h3>{episode.name}</h3>
            <p>{episode.episode}</p>
            <p>Fecha: {episode.air_date}</p>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px' }}>
        <button onClick={() => setPage((prev) => Math.max(prev - 1, 1))}>Anterior</button>
        <span style={{ margin: '0 10px' }}>Página {page}</span>
        <button onClick={() => setPage((prev) => prev + 1)}>Siguiente</button>
      </div>
    </div>
  );
}

export default EpisodesPage;
