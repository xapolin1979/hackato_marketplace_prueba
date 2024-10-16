let actividadAleatoria = document.querySelector(".actividadAleatoria");
let typeActivity;
let randomValue;
let randomIndex;

// Peticiones API
const tipoActividad = (actividad) => {
  const proxyUrl = "https://api.codetabs.com/v1/proxy?quest=";
  const url = `https://bored-api.appbrewery.com/filter?type=${actividad}`;

  fetch(proxyUrl + url)
    .then((response) => {
      // Verificamos si la respuesta es exitosa
      if (!response.ok) {
        throw new Error("Error en la respuesta de la API");
      }
      return response.json();
    })
    .then((data) => {
      // Comprobamos el contenido
      if (data && data.length > 0) {
        randomIndex = Math.floor(Math.random() * data.length);
        randomValue = data[randomIndex];
        actividadAleatoria.textContent = randomValue.activity;
        console.log(randomValue.activity);
      } else {
        console.error("No se encontraron actividades");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

const actividadesAleatorias = () => {
  const proxyUrl = "https://api.codetabs.com/v1/proxy?quest=";
  const url = `https://bored-api.appbrewery.com/random?timestamp=${new Date().getTime()}`;

  fetch(proxyUrl + url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error en la respuesta de la API");
      }
      return response.json();
    })
    .then((data) => {
      if (data) {
        actividadAleatoria.textContent = data.activity;
        console.log("Actividad aleatoria:", data.activity);
      } else {
        console.error("Respuesta de la API no contiene datos válidos");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};


