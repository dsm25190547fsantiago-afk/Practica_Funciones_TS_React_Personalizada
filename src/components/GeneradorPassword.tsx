import { useState, type ReactElement } from 'react';
import { Panel } from '../ui/Panel';

// Crea una clave aleatoria con los conjuntos de caracteres solicitados.
const generarPassword = (longitud: number, incluirNumeros: boolean, incluirSimbolos: boolean): string => {
  const letras = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numeros = '0123456789';
  const simbolos = '!@#$%^&*()_+';
  const disponibles = letras + (incluirNumeros ? numeros : '') + (incluirSimbolos ? simbolos : '');
  const tomarCaracter = (cadena: string): string => cadena[Math.floor(Math.random() * cadena.length)];
  const obligatorios: string[] = [];
  if (longitud <= 0) return '';
  obligatorios.push(tomarCaracter(letras));
  if (incluirNumeros && longitud >= 2) obligatorios.push(tomarCaracter(numeros));
  if (incluirSimbolos && longitud >= 3) obligatorios.push(tomarCaracter(simbolos));
  while (obligatorios.length < longitud) obligatorios.push(tomarCaracter(disponibles));
  for (let i = obligatorios.length - 1; i > 0; i--) {
    const aleatorio = Math.floor(Math.random() * (i + 1));
    [obligatorios[i], obligatorios[aleatorio]] = [obligatorios[aleatorio], obligatorios[i]];
  }
  return obligatorios.join('');
};

type ConjuntoClaves = { basica: string; media: string; fuerte: string };
// Prepara los tres casos de prueba solicitados por el docente.
const crearEjemplos = (): ConjuntoClaves => ({
  basica: generarPassword(8, false, false),
  media: generarPassword(12, true, false),
  fuerte: generarPassword(16, true, true),
});

export const GeneradorPassword = (): ReactElement => {
  const [claves, setClaves] = useState<ConjuntoClaves>(crearEjemplos);
  return (
    <Panel id="contrasenas" numero="07" tema="ALEATORIEDAD" titulo="Laboratorio de contraseñas" resumen="Caracteres aleatorios seleccionados según tres configuraciones.">
      <div className="fila-dato"><span>Básica · 8</span><strong className="monoespaciado">{claves.basica}</strong></div>
      <div className="fila-dato"><span>Media · 12</span><strong className="monoespaciado">{claves.media}</strong></div>
      <div className="fila-dato"><span>Fuerte · 16</span><strong className="monoespaciado">{claves.fuerte}</strong></div>
      <button className="boton-accion" type="button" onClick={() => setClaves(crearEjemplos())}>↻ Generar otras claves</button>
      <p className="texto-pequeno">Ejercicio didáctico: para contraseñas reales se recomienda aleatoriedad criptográfica.</p>
    </Panel>
  );
};
