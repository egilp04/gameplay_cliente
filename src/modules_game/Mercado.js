import { Producto } from "../classes/Producto.js";
export const Mercado = {
  listaProductos: [
    new Producto("espada_corta"),
    new Producto("arco_caza"),
    new Producto("armadura_cuero"),
    new Producto("pocion_peque"),
    new Producto("espada_runica"),
    new Producto("escudo_roble"),
    new Producto("pocion_grande"),
    new Producto("mandoble_epico"),
    new Producto("placas_graconicas"),
    new Producto("elixir_legendario"),
  ],
  listaProdcutosFinales: [],
  filtrarProductos: function (tipoRareza) {
    return this.listaProductos.filter(
      (producto) => tipoRareza === producto.rareza
    );
  },
  aplicarDescuento: function (tipoRareza = "raro", descuento = 0.2) {
    this.listaProductos.forEach((producto) => {
      if (producto.rareza === tipoRareza)
        this.listaProdcutosFinales.push(
          producto.aplicarDescuento(producto, descuento)
        );
    });
  },
  buscarProducto: function (nombreProducto) {
    return his.listaProductos.filter(
      (producto) => nombreProducto === producto.nombre
    );
  },
  obtenerListaProdcutosFinales() {
    return this.listaProdcutosFinales;
  },
};
