import { tipoJugador } from "../constants/Constants.js";

export class Jugador {
  constructor(jugadorTipo) {
    this._nombre = tipoJugador[jugadorTipo].nombre;
    this._hp = tipoJugador[jugadorTipo].hp;
    this._avatar = tipoJugador[jugadorTipo].avatar;
    this._puntos = tipoJugador[jugadorTipo].puntos;
    this._vidaMaxima = tipoJugador[jugadorTipo].vidaMaxima;
    this._inventario = tipoJugador[jugadorTipo].inventario;
    this._ataque = tipoJugador[jugadorTipo].ataque;
    this._defensa = tipoJugador[jugadorTipo].defensa;
  }
  get nombre() {
    return this._nombre;
  }
  get hp() {
    return this._hp;
  }
  get avatar() {
    return this._avatar;
  }
  get puntos() {
    return this._puntos;
  }
  get vidaMaxima() {
    return this._vidaMaxima;
  }
  get inventario() {
    return this._inventario;
  }
  get ataque() {
    return this._ataque;
  }
  get defensa() {
    return this._defensa;
  }
  set nombre(nombre) {
    this._nombre = nombre;
  }
  set hp(hp) {
    this._hp = hp;
  }
  set avatar(avatar) {
    this._avatar = avatar;
  }
  set puntos(puntos) {
    this._puntos = puntos;
  }
  set vidaMaxima(vidaMaxima) {
    this._vidaMaxima = vidaMaxima;
  }
  set inventario(inventario) {
    this._inventario = inventario;
  }
  set ataque(ataque) {
    this._ataque = ataque;
  }
  set defensa(defensa) {
    this._defensa = defensa;
  }

  sumarPuntos = function (puntos) {
    this._puntos += puntos;
    return this._puntos;
  };

  addObjInventario = function (producto) {
    const longitudMax = 6;
    if (this._inventario.length >= longitudMax) {
      console.log("no se puede comprar más");
      return;
    }
    const productoComprado = structuredClone(producto);
    this._inventario.push(productoComprado);
    this.visualEfectos();
  };

  obtenerEstadisticasFinales = function () {
    if (!this.verificarTamInventario()) {
      return {
        ataqueTotal: this._ataque,
        defensaTotal: this._defensa,
        vidaTotal: this._hp,
      };
    }
    return {
      ataqueTotal: this.obtenerAtaqueTotal(),
      defensaTotal: this.obtenerDefensaTotal(),
      vidaTotal: this.obtenerVidaTotal(),
    };
  };

  obtenerAtaqueTotal = function () {
    const bonusAtaque = this._inventario
      .filter((producto) => producto.tipo === "arma")
      .reduce((total, producto) => total + producto.bonus, 0);
    return this._ataque + bonusAtaque;
  };
  obtenerDefensaTotal = function () {
    const bonusDefensa = this._inventario
      .filter((producto) => producto.tipo === "armadura")
      .reduce((total, producto) => total + producto.bonus, 0);
    return this._defensa + bonusDefensa;
  };
  obtenerVidaTotal = function () {
    const bonusHp = this._inventario
      .filter((producto) => producto.tipo === "consumible")
      .reduce((total, producto) => total + producto.bonus, 0);
    return Math.min(this._hp + bonusHp, this._vidaMaxima);
  };

  verificarTamInventario = function () {
    if (!this.inventario || this.inventario.length <= 0) return false;
    else return true;
  };

  visualEfectos = function () {
    console.log("efecto del boton, del color de la tarjeta");
  };
}
