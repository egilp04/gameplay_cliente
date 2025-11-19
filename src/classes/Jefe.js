import { tipoEnemigo } from "../constants/Constants.js";
import { Enemigo } from "../classes/Enemigo.js";

export class Jefe extends Enemigo {
  constructor(tipoEn, multiplicadorDanio = 1.2) {
    super(
      tipoEnemigo[tipoEn].nombre,
      tipoEnemigo[tipoEn].avatar,
      tipoEnemigo[tipoEn].ataque,
      tipoEnemigo[tipoEn].hp
    );
    this._multiplicadorDanio = multiplicadorDanio;
  }

  set multiplicadorDanio(multiplicadorDanio) {
    this._multiplicadorDanio = multiplicadorDanio;
  }
  get multiplicadorDanio() {
    return this._multiplicadorDanio;
  }
}
