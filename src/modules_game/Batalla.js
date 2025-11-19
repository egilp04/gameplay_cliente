export const Batalla = {
  muerte: 0,
  combate: function (enemigo, jugador) {
    let {
      ataqueTotal,
      defensaTotal,
      vidaTotal: vidaJugador,
    } = jugador.obtenerEstadisticasFinales();
    let vidaEnemigo = enemigo.hp;
    const ataqueEnemigo = enemigo.ataque;

    do {
      vidaJugador = Math.max(
        vidaJugador + defensaTotal - ataqueEnemigo,
        this.muerte
      );
      vidaEnemigo = Math.max(vidaEnemigo - ataqueTotal, this.muerte);
    } while (vidaJugador > this.muerte && vidaEnemigo > this.muerte);

    const ganador = vidaJugador > 0 ? jugador : enemigo;
    let puntos = 0;

    if (ganador == jugador) {
      if (enemigo instanceof Jefe)
        puntos = jugador.sumarPuntos(
          ataqueEnemigo * enemigo.multiplicadorDanio
        );
      else puntos = jugador.sumarPuntos(ataqueEnemigo);
    }
    return { ganador, puntos };
  },
};
