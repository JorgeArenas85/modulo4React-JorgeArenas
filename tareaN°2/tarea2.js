let container = document.getElementById ('container Info');
let botton = document.getElementById ('botton');
botton.addEventListener('click',mostrarApiAsync);

async function mostrarApiAsync() {
    
    const url = 'https://randomuser.me/api/';
    const res = await fetch(url);
    const data = await res.json()
    console.log(data, 'data async');

    container.innerHTML = `   
    <p>Nombre Completo: ${data.results[0].name.first} ${data.results[0].name.last}</p>
    <img src='${data.results[0].picture.large}'></img>
    <p>movil: ${data.results[0].cell}</p>
    <p>Correo electrónico: ${data.results[0].email}<p>
    <p>Género: ${data.results[0].gender}<p>
`
}