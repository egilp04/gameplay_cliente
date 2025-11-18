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
      (elemento) => tipoRareza === elemento.rareza
    );
  },
  aplicarDescuento: function (producto, descuento = 0.2) {
    const productoConDescuento = producto.aplicarDescuento(producto, descuento);
    if (productoConDescuento)
      this.listaProdcutosFinales.push(productoConDescuento);
  },
  buscarProducto: function (nombreProducto) {
    return his.listaProductos.filter(
      (elemento) => nombreProducto === elemento.nombre
    );
  },
};
