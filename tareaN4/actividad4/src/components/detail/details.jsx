import React from 'react';

function Details({ genre, status }) {
  return (
    <div>
      <p>Género: {genre}</p>
      <p>Estado: {status}</p>
    </div>
  );
}

export default Details;
