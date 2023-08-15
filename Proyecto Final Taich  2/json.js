const formulario = document.querySelector ('#formulario');



const procesaTodo = (e) => {
    e.preventDefault();
    const datos = new FormData(e.target);
    
    const datosCompletos = Object.fromEntries(datos.entries());
    console.log(JSON.stringify (datosCompletos));

}


formulario.addEventListener('submit', procesaTodo);

const enJSON = JSON.stringify(formulario)
localStorage.setItem("formulario", enJSON)
localStorage.getItem(formulario)



