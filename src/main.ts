import { partida } from './model';
import { dameCarta, mensajeEstado, simulaQueHabriaPasado } from './motor';
import {
  botonPideCarta, botonPlantarse, botonNuevaPartida, botonHabriaPasado,
  mostrarCarta, actualizarPuntuacion, muestraMensaje,
  cambiarEstadoBoton, desactivarBotones, activarBotones, iniciarPartida,
} from './ui';



if (botonPideCarta !== null && botonPideCarta !== undefined && botonPideCarta instanceof HTMLButtonElement) {
  botonPideCarta.addEventListener('click', () => {const carta = dameCarta(); mostrarCarta(carta); actualizarPuntuacion(carta);});
}



if (botonPlantarse !== null && botonPlantarse !== undefined && botonPlantarse instanceof HTMLButtonElement) {
  botonPlantarse.addEventListener('click', () => {
    const estado = mensajeEstado(partida.puntuacion);
    muestraMensaje(estado);
    desactivarBotones();
    cambiarEstadoBoton(botonHabriaPasado, false);
  });
}





if (botonNuevaPartida !== null && botonNuevaPartida !== undefined && botonNuevaPartida instanceof HTMLButtonElement) {
  botonNuevaPartida.addEventListener('click', () => {
    iniciarPartida();
    activarBotones();
  });
}





if (botonHabriaPasado !== null && botonHabriaPasado !== undefined && botonHabriaPasado instanceof HTMLButtonElement) {
  botonHabriaPasado.addEventListener('click', () => {
    const resultado = simulaQueHabriaPasado();
    muestraMensaje(resultado);
    cambiarEstadoBoton(botonHabriaPasado, true);
  });
}



document.addEventListener("DOMContentLoaded", iniciarPartida);