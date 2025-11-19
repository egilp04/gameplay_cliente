import { productosComprar } from "../constants/Constants.js";

export class Producto {
  constructor(claveProducto) {
    this._nombre = productosComprar[claveProducto].nombre;
    this._imagen = productosComprar[claveProducto].imagen;
    this._precio = productosComprar[claveProducto].precio;
    this._rareza = productosComprar[claveProducto].rareza;
    this._tipo = productosComprar[claveProducto].tipo;
    this._bonus = productosComprar[claveProducto].bonus;
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

  aplicarDescuento = function (producto, descuento) {
    const productoComprado = structuredClone(producto);
    productoComprado.precio = producto.precio * (1 - descuento);
    return productoComprado;
  };
}
