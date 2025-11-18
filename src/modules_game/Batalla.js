// 5.5 Módulo Batalla
// Función combate(enemigo, jugador) :
// Retorno: El ganador y los puntos obtenidos por el jugador (0 si pierde).
// Lógica de Turnos: Se repite hasta que la vida de uno llegue a 0.
// Cálculo por Turno:
// Vida del jugador = (vida actual + defensa) - ataque enemigo
// Vida del enemigo = vida actual - ataque jugador
// Cálculo de Puntos (al ganar):
// Puntos = 100 (base) + ataque del enemigo .
// Si es un Jefe : Puntos = Puntos * multiplicador de daño .
