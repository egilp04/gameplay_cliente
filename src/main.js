import { Cazador } from "./classes/indexJugadores.js";
import {
  Goblin,
  Bandido,
  Dragon,
  Lobo,
  Jefe,
} from "./classes/indexEnemigos.js";
import {
  avatarCazador,
  avatarGoblin,
  avatarBandido,
  avatarDragon,
  avatarLobo,
  avatarJefe,
} from "./constants/Constants.js";

import { combate } from "./modules_game/Batalla.js";
import { distinguirJugador } from "./modules_game/Ranking.js";
import {
  filtrarProductos,
  aplicarDescuento,
  buscarProductoNombre,
} from "./modules_game/Mercado.js";

//   const seccion2 = document.getElementById("seccion-2");
//   const seccion3 = document.getElementById("seccion-3");
//   const seccion4 = document.getElementById("seccion-4");
//   const seccion5 = document.getElementById("seccion-5");

window.addEventListener("load", iniciarJuego);

function iniciarJuego(e) {
  const seccion1 = document.getElementById("seccion-1");
  mostrarSeccion(seccion1.id);
  seccion1Function(seccion1);
}

function mostrarSeccion(id) {
  const secciones = Array.from(document.querySelectorAll(".seccion"));
  secciones.forEach((seccion) => {
    seccion.style.display = "none";
  });

  const seccionMostrar = document.getElementById(id);
  seccionMostrar.style.display = "";
}

function seccion1Function(seccion1) {
  const jugador = new Cazador("Cazador", 30, avatarCazador, 50, 30);
  datosJugador(jugador);
  const boton = seccion1.querySelector(".continuar");
  boton.addEventListener("click", (e) => {
    const seccion2 = document.getElementById("seccion-2");
    mostrarSeccion(seccion2.id);
    seccion2Function(seccion2, jugador);
  });
}

function seccion2Function(seccion2, jugador) {
  document.getElementById("title").textContent = "Mercado Negro";
  const mercadoContainer = document.getElementById("mercado-container");
  // mercado productos
  const productosComprar = aplicarDescuento();

  console.log(productosComprar);
  productosComprar.forEach((producto) => {
    const divProducto = document.createElement("div");
    const idProducto = producto.nombre.replace(/\s+/g, "_").toLowerCase();
    divProducto.setAttribute("class", "producto");
    divProducto.setAttribute("id", `${idProducto}`);

    const divImgProducto = document.createElement("div");
    divImgProducto.setAttribute("id", "img-producto-container");
    const imgProducto = document.createElement("img");
    imgProducto.setAttribute("id", "img-producto");
    imgProducto.setAttribute("src", `${producto.imagen}`);

    const divDataProducto = document.createElement("div");
    divDataProducto.setAttribute("id", "data-producto-container");

    const spanNombreProducto = document.createElement("span");
    spanNombreProducto.textContent = `${producto.nombre}`;
    const spanBonusProducto = document.createElement("span");
    spanBonusProducto.textContent = `${producto.bonus}`;
    const spanPrecioProducto = document.createElement("span");
    spanPrecioProducto.textContent = `${producto.precio}`;

    const botonComprar = document.createElement("button");
    botonComprar.setAttribute("class", "comprar-button");
    botonComprar.setAttribute("class", "comprar");
    const idBotonIndex = productosComprar.indexOf(producto);
    botonComprar.setAttribute("id", `${idBotonIndex}`);
    botonComprar.textContent = "Añadir";

    botonComprar.addEventListener("click", (e) => {
      const indexProducto = parseInt(e.currentTarget.id);
      const productoSeleccionado = encontrarProducto(
        productosComprar,
        indexProducto
      );
      if (botonComprar.classList.contains("comprar")) {
        jugador.addObjInventario(productoSeleccionado);
        botonComprar.classList.remove("comprar");
        botonComprar.textContent = "retirar";
      } else {
        jugador.eliminarObjInventario(productoSeleccionado);
        botonComprar.classList.add("comprar");
        botonComprar.textContent = "Añadir";
      }
    });
    divImgProducto.appendChild(imgProducto);
    divProducto.appendChild(divImgProducto);
    divDataProducto.appendChild(spanNombreProducto);
    divDataProducto.appendChild(spanBonusProducto);
    divDataProducto.appendChild(spanPrecioProducto);
    divProducto.appendChild(divDataProducto);
    divProducto.appendChild(botonComprar);

    mercadoContainer.appendChild(divProducto);

    const casillas = Array.from(document.querySelectorAll(".casilla"));
  });

  const boton = seccion2.querySelector(".continuar");
  boton.addEventListener("click", (e) => {
    const seccion3 = document.getElementById("seccion-3");
    mostrarSeccion(seccion3.id);
    seccion3Function(seccion3);
  });
}

function seccion3Function(seccion3) {
  document.getElementById("title").textContent = "Aventura JS";

  const boton = seccion3.querySelector(".continuar");
  boton.addEventListener("click", (e) => {
    const seccion3 = document.getElementById("seccion-3");
    mostrarSeccion(seccion3.id);
    seccion4Function();
  });
}

function seccion4Function() {
  const enemigos = [
    new Goblin("Goblin", avatarGoblin, 6, 30),
    new Lobo("Lobo", avatarLobo, 9, 42),
    new Dragon("Dragon", avatarDragon, 28, 140, "aliento Igeno"),
    new Bandido("Bandido", avatarBandido, 12, 55),
    new Jefe("Jefe", avatarJefe, 12, 55),
  ];
}

function datosJugador(jugador) {
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
}

function encontrarProducto(listaProducto, indiceProducto) {
  return listaProducto[indiceProducto];
}
