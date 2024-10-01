
let actividadAleatoria = document.querySelector('.actividadAleatoria');
let typeActivity;
let randomValue;
let randomIndex ;




//Peticiones API
const tipoActividad=(actividad)=>{
    const proxyUrl = "https://api.allorigins.win/get?url=";
const url = `https://bored-api.appbrewery.com/filter?type=${actividad}`;

fetch(proxyUrl + encodeURIComponent(url))
    .then(response => response.json())
    .then(data => {
        typeActivity=JSON.parse(data.contents)
     randomIndex = Math.floor(Math.random() * typeActivity.length);
          randomValue = typeActivity[randomIndex];
          actividadAleatoria.textContent = randomValue.activity
        console.log(randomValue.activity);
    })
    .catch(error => {
        console.error('Error:', error);
    });

}

const actividadesAleatorias=()=>{
    const proxyUrl = "https://api.allorigins.win/get?url=";
    const url = `https://bored-api.appbrewery.com/random?timestamp=${new Date().getTime()}`;

    fetch(proxyUrl + encodeURIComponent(url))
        .then(response => response.json())
        .then(data => {
            try {
                const parsedData = JSON.parse(data.contents); 
                actividadAleatoria.textContent = parsedData.activity;
                console.log("Contenido parseado:", parsedData); 
            } catch (error) {
                console.error("Error al parsear los datos:", error);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

