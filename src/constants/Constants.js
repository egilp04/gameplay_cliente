// Datos armas
const tipoArma = {
  arma: "arma",
  armadura: "armadura",
  consumible: "consumible",
};
const rarezaArmas = { raro: "raro", comun: "comun", epico: "epico" };

export const productosComprar = {
  espada_corta: {
    nombre: "Espada corta",
    imagen: "",
    precio: 120.0,
    rareza: rarezaArmas.comun,
    tipo: tipoArma.arma,
    bonus: 8,
  },
  arco_caza: {
    nombre: "Arco caza",
    imagen: "",
    precio: 140.0,
    rareza: rarezaArmas.comun,
    tipo: tipoArma.arma,
    bonus: 7,
  },
  armadura_cuero: {
    nombre: "Armadura cuero",
    imagen: "",
    precio: 180.0,
    rareza: rarezaArmas.comun,
    tipo: tipoArma.armadura,
    bonus: 6,
  },
  pocion_peque: {
    nombre: "Poción pequeña",
    imagen: "",
    precio: 40.0,
    rareza: rarezaArmas.comun,
    tipo: tipoArma.consumible,
    bonus: 20,
  },
  espada_runica: {
    nombre: "Espada rúnica",
    imagen: "",
    precio: 460.0,
    rareza: rarezaArmas.raro,
    tipo: tipoArma.arma,
    bonus: 18,
  },
  escudo_roble: {
    nombre: "Escudo roble",
    imagen: "",
    precio: 320.0,
    rareza: rarezaArmas.raro,
    tipo: tipoArma.armadura,
    bonus: 14,
  },
  pocion_grande: {
    nombre: "Poción grande",
    imagen: "",
    precio: 110.0,
    rareza: rarezaArmas.raro,
    tipo: tipoArma.consumible,
    bonus: 60,
  },
  mandoble_epico: {
    nombre: "Mandoble épico",
    imagen: "",
    precio: 950.0,
    rareza: rarezaArmas.epico,
    tipo: tipoArma.arma,
    bonus: 32,
  },
  placas_graconicas: {
    nombre: "Placas dracónicas",
    imagen: "",
    precio: 880.0,
    rareza: rarezaArmas.epico,
    tipo: tipoArma.armadura,
    bonus: 28,
  },
  elixir_legendario: {
    nombre: "Elixir legendario",
    imagen: "",
    precio: 520.0,
    rareza: rarezaArmas.epico,
    tipo: tipoArma.consumible,
    bonus: 150,
  },
};

// Datos jugador
const puntosIniciales = 0;
const vidaMaximaJugador = 100;

export const tipoJugador = {
  cazador: {
    nombre: "eve",
    hp: 30,
    avatar: "src/assests/img/character_img/cazador.png",
    puntos: puntosIniciales,
    vidaMaxima: vidaMaximaJugador,
    inventario: [],
    ataque: 50,
    defensa: 30,
  },
};

// Datos enemigo
export const tipoEnemigo = {
  goblin: {
    nombre: "Goblin",
    avatar: "",
    ataque: 6,
    hp: 30,
  },
  lobo: {
    nombre: "Lobo",
    avatar: "",
    ataque: 9,
    hp: 42,
  },
  badido: {
    nombre: "Bandido",
    avatar: "",
    ataque: 12,
    hp: 55,
  },
  dragon: {
    nombre: "Dragón",
    avatar: "",
    ataque: 28,
    hp: 140,
    habilidad: "aliento ígeno",
  },
};
