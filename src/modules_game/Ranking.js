export const Ranking = {
  umbral: 10,
  distinguirJugador: function (puntuacion, umbral = this.umbral) {
    return puntuacion > umbral ? "Veterano" : "Novato";
  },
};
