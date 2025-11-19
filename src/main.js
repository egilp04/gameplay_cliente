import { Jugador } from "./classes/Jugador.js";
import { Enemigo } from "./classes/Enemigo.js";
import { Jefe } from "./classes/Jefe.js";
import { Batalla } from "./modules_game/Batalla.js";
import { Ranking } from "./modules_game/Ranking.js";
import { Mercado } from "./modules_game/Mercado.js";

//   const seccion2 = document.getElementById("seccion-2");
//   const seccion3 = document.getElementById("seccion-3");
//   const seccion4 = document.getElementById("seccion-4");
//   const seccion5 = document.getElementById("seccion-5");

window.addEventListener("load", iniciarJuego);

function iniciarJuego(e) {
  const jugador = new Jugador("cazador");
  const seccion1 = document.getElementById("seccion-1");
  mostrarSeccion(seccion1.id);

  //   elementos de la seccion1
  document.getElementById("title").textContent = "Aventura JS";
  document
    .getElementById("imagen-jugador")
    .setAttribute("src", `${jugador.avatar}`);
  document
    .getElementById("nombre-jugador-container")
    .querySelector("h2").textContent = `${jugador.nombre}`;
  const valores = Array.from(document.querySelectorAll(".valor"));
  const valoresJugador = [
    jugador.ataque,
    jugador.defensa,
    jugador.hp,
    jugador.puntos,
  ];
  valores.forEach((valor, i) => {
    valor.textContent = `${valoresJugador[i]}`;
  });

  const boton = seccion1.querySelector("button");
  boton.addEventListener("click", (e) => {
    mostrarSeccion("seccion-2");
  });
}

function mostrarSeccion(id) {
  const secciones = Array.from(document.querySelectorAll(".seccion"));
  secciones.forEach((seccion) => {
    seccion.style.display = "none";
  });

  const seccionMostrar = document.getElementById(id);
  seccionMostrar.style.display = "";
}
