import { tipoEnemigo } from "../constants/Constants.js";
import { Enemigo } from "../classes/Enemigo.js";

export class Jefe extends Enemigo {
  constructor(
    nombre = tipoEnemigo.goblin.nombre,
    avatar = tipoEnemigo.goblin.avatar,
    ataque = tipoEnemigo.goblin.ataque,
    hp = tipoEnemigo.goblin.hp,
    multiplicadorDanio = 1.2
  ) {
    super(nombre, avatar, ataque, hp);
    this._multiplicadorDanio = multiplicadorDanio;
  }

  set multiplicadorDanio(multiplicadorDanio) {
    this._multiplicadorDanio = multiplicadorDanio;
  }
  get multiplicadorDanio() {
    return this._multiplicadorDanio;
  }
}
