import { tipoEnemigo } from "../enums/TipoEnemigo.js";
class Enemigo {
  constructor(
    nombre = tipoEnemigo.goblin.nombre,
    avatar = tipoEnemigo.goblin.avatar,
    ataque = tipoEnemigo.goblin.ataque,
    hp = tipoEnemigo.goblin.hp
  ) {
    this.nombre = nombre;
    this.avatar = avatar;
    this.ataque = ataque;
    this.hp = hp;
  }

  


}
