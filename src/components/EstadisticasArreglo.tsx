import type { ReactElement } from 'react';
import { Panel } from '../ui/Panel';

// Obtiene la media usando reduce para sumar los elementos.
const calcularPromedio = (nums: number[]): number =>
  nums.length === 0 ? 0 : nums.reduce((total: number, valor: number) => total + valor, 0) / nums.length;
// Busca el mayor valor; los arreglos vacíos devuelven cero.
const encontrarMaximo = (nums: number[]): number => nums.length === 0 ? 0 : Math.max(...nums);
// Busca el menor valor; los arreglos vacíos devuelven cero.
const encontrarMinimo = (nums: number[]): number => nums.length === 0 ? 0 : Math.min(...nums);

export const EstadisticasArreglo = (): ReactElement => {
  const numeros: number[] = [8, 3, 15, 7, 22, 11, 4];
  return (
    <Panel id="estadisticas" numero="06" tema="ARREGLOS" titulo="Resumen estadístico" resumen="Con .reduce() y Math se obtienen medidas de un arreglo.">
      <div className="recuadro"><p className="etiqueta-dato">VALORES EVALUADOS</p><p className="monoespaciado">[{numeros.join(', ')}]</p></div>
      <div className="fila-dato"><span>Promedio</span><strong className="resaltado">{calcularPromedio(numeros).toFixed(2)}</strong></div>
      <div className="fila-dato"><span>Valor máximo</span><strong>{encontrarMaximo(numeros)}</strong></div>
      <div className="fila-dato"><span>Valor mínimo</span><strong>{encontrarMinimo(numeros)}</strong></div>
    </Panel>
  );
};
