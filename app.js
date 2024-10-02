let actividadAleatoria = document.querySelector(".actividadAleatoria");
let typeActivity;
let randomValue;
let randomIndex;

// Peticiones API
const tipoActividad = (actividad) => {
  const proxyUrl = "https://api.allorigins.win/get?url=";
  const url = `https://bored-api.appbrewery.com/filter?type=${actividad}`;

  fetch(proxyUrl + encodeURIComponent(url))
    .then((response) => {
      // Verificamos si la respuesta es exitosa
      if (!response.ok) {
        throw new Error("Error en la respuesta de la API");
      }
      return response.json();
    })
    .then((data) => {
      // Comprobamos el contenido
      if (data.contents) {
        try {
          console.log(data.contents);
          const parsedData = JSON.parse(data.contents);
          // Comprobamos que hay actividades
          if (parsedData.length > 0) {
            randomIndex = Math.floor(Math.random() * parsedData.length);
            randomValue = parsedData[randomIndex];
            actividadAleatoria.textContent = randomValue.activity;
            console.log(randomValue.activity);
          } else {
            console.error("No se encontraron actividades");
          }
        } catch (error) {
          console.error("Error al parsear los datos:", error);
        }
      } else {
        console.error("Respuesta de la API no contiene datos válidos");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

const actividadesAleatorias = () => {
  const proxyUrl = "https://api.allorigins.win/get?url=";
  const url = `https://bored-api.appbrewery.com/random?timestamp=${new Date().getTime()}`;

  fetch(proxyUrl + encodeURIComponent(url))
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error en la respuesta de la API");
      }
      return response.json();
    })
    .then((data) => {
      if (data.contents) {
        try {
          const parsedData = JSON.parse(data.contents);
          actividadAleatoria.textContent = parsedData.activity;
          console.log("Contenido parseado:", parsedData);
        } catch (error) {
          console.error("Error al parsear los datos:", error);
        }
      } else {
        console.error("Respuesta de la API no contiene datos válidos");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};


