import { tipoEnemigo } from "../constants/Constants.js";
export class Enemigo {
  constructor(tipoEn) {
    this._nombre = tipoEnemigo[tipoEn].nombre;
    this._avatar = tipoEnemigo[tipoEn].avatar;
    this._ataque = tipoEnemigo[tipoEn].atacque;
    this._hp = tipoEnemigo[tipoEn].hp;
  }
  set nombre(nombre) {
    this._nombre = nombre;
  }
  set avatar(url) {
    this._avatar = url;
  }
  set ataque(ataque) {
    this._ataque = ataque;
  }
  set hp(hp) {
    this._hp = hp;
  }
  get nombre() {
    return this._nombre;
  }
  get avatar() {
    return this._avatar;
  }
  get ataque() {
    return this._ataque;
  }
  get hp() {
    return this._hp;
  }
}
