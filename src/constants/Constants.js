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
    imagen: "src/assests/img/objects_img/espada_corta.png",
    precio: 120.0,
    rareza: rarezaArmas.comun,
    tipo: tipoArma.arma,
    bonus: 8,
  },
  arco_caza: {
    nombre: "Arco caza",
    imagen: "src/assests/img/objects_img/arco.png",
    precio: 140.0,
    rareza: rarezaArmas.comun,
    tipo: tipoArma.arma,
    bonus: 7,
  },
  armadura_cuero: {
    nombre: "Armadura cuero",
    imagen: "src/assests/img/objects_img/armadura.png",
    precio: 180.0,
    rareza: rarezaArmas.comun,
    tipo: tipoArma.armadura,
    bonus: 6,
  },
  pocion_peque: {
    nombre: "Poción pequeña",
    imagen: "src/assests/img/objects_img/pocion_peque.png",
    precio: 40.0,
    rareza: rarezaArmas.comun,
    tipo: tipoArma.consumible,
    bonus: 20,
  },
  espada_runica: {
    nombre: "Espada rúnica",
    imagen: "src/assests/img/objects_img/espada_runica.png",
    precio: 460.0,
    rareza: rarezaArmas.raro,
    tipo: tipoArma.arma,
    bonus: 18,
  },
  escudo_roble: {
    nombre: "Escudo roble",
    imagen: "src/assests/img/objects_img/escudo.png",
    precio: 320.0,
    rareza: rarezaArmas.raro,
    tipo: tipoArma.armadura,
    bonus: 14,
  },
  pocion_grande: {
    nombre: "Poción grande",
    imagen: "src/assests/img/objects_img/pocion_grande.png",
    precio: 110.0,
    rareza: rarezaArmas.raro,
    tipo: tipoArma.consumible,
    bonus: 60,
  },
  mandoble_epico: {
    nombre: "Mandoble épico",
    imagen: "src/assests/img/objects_img/mandoble.png",
    precio: 950.0,
    rareza: rarezaArmas.epico,
    tipo: tipoArma.arma,
    bonus: 32,
  },
  placas_graconicas: {
    nombre: "Placas dracónicas",
    imagen: "src/assests/img/objects_img/placas_draconicas.png",
    precio: 880.0,
    rareza: rarezaArmas.epico,
    tipo: tipoArma.armadura,
    bonus: 28,
  },
  elixir_legendario: {
    nombre: "Elixir legendario",
    imagen: "src/assests/img/objects_img/elixir.png",
    precio: 520.0,
    rareza: rarezaArmas.epico,
    tipo: tipoArma.consumible,
    bonus: 150,
  },
  manzana: {
    nombre: "Manzana",
    imagen: "src/assests/img/objects_img/manzana.png",
    precio: 40.0,
    rareza: rarezaArmas.comun,
    tipo: tipoArma.consumible,
    bonus: 10,
  },
  casco: {
    nombre: "Casco",
    imagen: "src/assests/img/objects_img/casco.png",
    precio: 100.0,
    rareza: rarezaArmas.comun,
    tipo: tipoArma.armadura,
    bonus: 10,
  },
  hacha: {
    nombre: "Hacha",
    imagen: "src/assests/img/objects_img/hacha.png",
    precio: 120.0,
    rareza: rarezaArmas.comun,
    tipo: tipoArma.arma,
    bonus: 8,
  },
  botas: {
    nombre: "Botas",
    imagen: "src/assests/img/objects_img/botas.png",
    precio: 80.0,
    rareza: rarezaArmas.comun,
    tipo: tipoArma.armadura,
    bonus: 4,
  },
};

// Datos jugador
const vidaMaximaJugador = 100;
const puntosBase = 100;
export const tipoJugador = {
  cazador: {
    nombre: "Cazador",
    hp: 30,
    avatar: "src/assests/img/character_img/cazador.png",
    puntos: puntosBase,
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
    avatar: "src/assests/img/enemies_img/goblin.webp",
    ataque: 6,
    hp: 30,
  },
  lobo: {
    nombre: "Lobo",
    avatar: "src/assests/img/enemies_img/lobo.webp",
    ataque: 9,
    hp: 42,
  },
  badido: {
    nombre: "Bandido",
    avatar: "src/assests/img/enemies_img/badido.webp",
    ataque: 12,
    hp: 55,
  },
  dragon: {
    nombre: "Dragón",
    avatar: "src/assests/img/enemies_img/dragon.webp",
    ataque: 28,
    hp: 140,
    habilidad: "aliento ígeno",
  },
};
