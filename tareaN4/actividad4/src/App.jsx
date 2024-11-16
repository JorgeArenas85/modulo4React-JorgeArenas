import React, { useState, useEffect } from 'react';
import CharacterCard from './components/CharacterCard';

function App() {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [genre, setGenre] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    const rickAndMortyCharacterId = 3; // Cambia este ID para obtener otro personaje
    fetch(`https://rickandmortyapi.com/api/character/${rickAndMortyCharacterId}`)
      .then((response) => response.json())
      .then((result) => {
        setName(result.name);
        setImage(result.image);
        setGenre(result.gender);
        setStatus(result.status);
      });
  }, []);

  return (
    <div>
      <h1>Personajes de Rick y Morty</h1>
      <CharacterCard name={name} image={image} genre={genre} status={status} />
    </div>
  );
}

export default App;



