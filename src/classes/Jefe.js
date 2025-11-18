import { tipoEnemigo } from "../enums/TipoEnemigo.js";
class Jefe extends Enemigo {
  constructor(
    nombre = tipoEnemigo.goblin.nombre,
    avatar = tipoEnemigo.goblin.avatar,
    ataque = tipoEnemigo.goblin.ataque,
    hp = tipoEnemigo.goblin.hp,
    multiplicadorDanio = 1.2
  ) {
    super(nombre, avatar, ataque, hp);
    this.multiplicadorDanio = multiplicadorDanio;
  }

  

}
