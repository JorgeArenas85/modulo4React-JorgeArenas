import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function CharacterPage() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Lista de Personajes</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', padding: '20px' }}>
        {characters.map((character) => (
          <div key={character.id} style={{ border: '1px solid gray', padding: '10px', borderRadius: '8px' }}>
            <img src={character.image} alt={character.name} style={{ width: '100%' }} />
            <h3>{character.name}</h3>
            <Link to={`/character/${character.id}`}>Ver detalles</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CharacterPage;

