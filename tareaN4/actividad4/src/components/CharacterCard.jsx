import React from 'react';
import Title from './title/title';
import Image from './image/image';
import Details from './detail/Details';

function CharacterCard({ name, image, genre, status }) {
  return (
    <div style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '8px' }}>
      <Title title={name} />
      <Image url={image} alt={`${name}'s avatar`} />
      <Details genre={genre} status={status} />
    </div>
  );
}

export default CharacterCard;

