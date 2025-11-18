import { rarezaArmas } from "./TipoRarezaArmas.js";
import { tipoArma } from "./TiposArma.js";

export const tipoProductos = {
  espada: {
    nombre: "espada",
    imagen: "",
    precio: 120,
    rareza: rarezaArmas[0],
    tipo: tipoArma[0],
    bonus: 10,
  },
};
