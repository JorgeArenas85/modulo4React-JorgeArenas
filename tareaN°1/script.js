// Crear un elemento 'div'
const div = document.createElement('div');

// Agregar un atributo 'id' al elemento div que acabo de crear
div.id = 'miDiv';

// Agregar texto al 'div'
div.textContent = 'Hola mundo';

// Cambiar el color de fondo del 'div'
div.style.backgroundColor = 'green';

// Agregar el 'div' al cuerpo del documento
document.body.appendChild(div);