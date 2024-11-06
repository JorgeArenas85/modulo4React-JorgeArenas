import React from 'react';
import Title from './Componentes/Titulo';
import Details from './Componentes/Details';
import Image from './Componentes/Imagen';


function App() {
    return (
        <div>
            {/* Título del artista/personaje */}
            <Title title="Rick Sanchez" />

            {/* Imagen del artista/personaje */}
            <Image url="https://upload.wikimedia.org/wikipedia/en/a/a6/Rick_Sanchez.png" />

            {/* Detalles de el artista/personaje */}
            <Details genre="masculino" status="Vivo" />
        </div>
    );
}

export default App;
