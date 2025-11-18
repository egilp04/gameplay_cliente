import { tipoJugador } from "../enums/TipoJugador.js";

export class Jugador {
  constructor(
    nombre = tipoJugador.cazador.nombre,
    vida = tipoJugador.cazador.vida,
    avatar = tipoJugador.cazador.avatar,
    puntos = tipoJugador.cazador.puntos,
    vidaMaxima = tipoJugador.cazador.vidaMaxima,
    inventario = tipoJugador.cazador.inventario,
    ataque = tipoJugador.cazador.ataque,
    defensa = tipoJugador.cazador.defensa
  ) {
    this.nombre = nombre;
    this.vida = vida;
    this.avatar = avatar;
    this.puntos = puntos;
    this.vidaMaxima = vidaMaxima;
    this.inventario = inventario;
    this.ataque = ataque;
    this.defensa = defensa;
  }

  

  sumarPuntos = function (puntos) {
    this.puntos += puntos;
  };
  // addInventario = function (){}
  // ataqueTotal = function () {
  //     this.ataque = inventario.reduce(() => );
  // };
  // defensaTotal = function () {    this.defensa = inventario.reduce(() => );
  // };
  //   vidaTotal = function () {    this.vida =  this.vida + inventario.reduce(() => ) > this.vidaMaxima ? this.vidaMaxima : this.vida + inventario.reduce(() => );
  // };
}
