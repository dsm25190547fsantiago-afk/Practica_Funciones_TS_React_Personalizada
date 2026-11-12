import type { ReactElement } from 'react';
import { Panel } from '../ui/Panel';

// Cuenta grupos de caracteres separados por uno o más espacios.
const contarPalabras = (texto: string): number => {
  const limpio = texto.trim();
  return limpio.length === 0 ? 0 : limpio.split(/\s+/).length;
};
// Identifica vocales normales y acentuadas, sin distinguir mayúsculas.
const contarVocales = (texto: string): number => (texto.match(/[aeiouáéíóú]/gi) ?? []).length;
// Retorna una copia del texto con sus caracteres en orden inverso.
const invertirTexto = (texto: string): string => [...texto].reverse().join('');

export const AnalizadorTexto = (): ReactElement => {
  const texto = 'Hola mundo desde TypeScript';
  return (
    <Panel id="texto" numero="05" tema="STRINGS" titulo="Explorador de palabras" resumen="Conteos, expresiones regulares y transformación de cadenas.">
      <div className="recuadro"><p className="etiqueta-dato">TEXTO DE PRUEBA</p><p>“{texto}”</p></div>
      <div className="fila-dato"><span>Palabras</span><strong>{contarPalabras(texto)}</strong></div>
      <div className="fila-dato"><span>Vocales</span><strong className="resaltado">{contarVocales(texto)}</strong></div>
      <p className="etiqueta-dato">LECTURA INVERSA</p>
      <div className="recuadro monoespaciado">{invertirTexto(texto)}</div>
    </Panel>
  );
};
