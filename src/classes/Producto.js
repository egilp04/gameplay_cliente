//     - **Arma:** El bonus se suma al ataque.
//     - **Armadura:** El bonus se suma a la defensa.
//     - **Consumible:** El bonus se suma a la vida.
// - **Métodos:**
//     - `Formatear atributos`: Ej. convertir precio `950` a `9,50€`.
//     - `Aplicar un descuento`: Recibe un valor y devuelve una **nueva copia** (clon) del producto con el precio modificado.

class Producto {
  constructor(nombre, imagen, precio, rareza, tipo, bonus) {
    this.nombre = nombre;
    this.imagen = imagen;
    this.precio = precio;
    this.rareza = rareza;
    this.tipo = tipo;
    this.bonus = bonus;
  }

  formatearAtributos = function (precioNum) {
    
    return `${precioNum}€`;
  };
  aplicarDescuento = function (producto) {};
}
