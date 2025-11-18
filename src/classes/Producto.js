import { productosComprar } from "../constants/Constants.js";

export class Producto {
  constructor(claveProductos) {
    this._nombre = productosComprar[claveProductos].nombre;
    this._imagen = productosComprar[claveProductos].imagen;
    this._precio = productosComprar[claveProductos].precio;
    this._rareza = productosComprar[claveProductos].rareza;
    this._tipo = productosComprar[claveProductos].tipo;
    this._bonus = productosComprar[claveProductos].bonus;
  }
  get nombre() {
    return this._nombre;
  }
  get imagen() {
    return this._imagen;
  }
  get precio() {
    return this._precio;
  }
  get rareza() {
    return this._rareza;
  }
  get tipo() {
    return this._tipo;
  }
  get bonus() {
    return this._bonus;
  }
  set nombre(nombre) {
    this._nombre = nombre;
  }
  set imagen(imagen) {
    this._imagen = imagen;
  }
  set precio(precio) {
    this._precio = precio;
  }
  set rareza(rareza) {
    this._rareza = rareza;
  }
  set tipo(tipo) {
    this._tipo = tipo;
  }
  set bonus(bonus) {
    this._bonus = bonus;
  }

  formatearAtributos = function (precioNum) {
    const precio = (precioNum / 100).toFixed(2).replace(".", ",") + "€";
    return precio;
  };

  aplicarDescuento = function (producto, descuento = 0.2) {
    if (producto.rareza != "raro") {
      return;
    }
    const productoComprado = structuredClone(producto);
    productoComprado.precio = producto.precio * (1 - descuento);
    return productoComprado;
  };
}
