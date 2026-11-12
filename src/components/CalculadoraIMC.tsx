import type { ReactElement } from 'react';
import { Panel } from '../ui/Panel';

// Calcula el IMC a partir de peso (kg) y altura (m).
const calcularIMC = (peso: number, altura: number): number =>
  altura > 0 ? peso / (altura ** 2) : 0;

// Asigna una categoría al resultado del cálculo de IMC.
const clasificarIMC = (imc: number): string => {
  if (imc < 18.5) return 'Bajo peso';
  if (imc < 25) return 'Normal';
  if (imc < 30) return 'Sobrepeso';
  return 'Obesidad';
};

export const CalculadoraIMC = (): ReactElement => {
  const peso = 70;
  const altura = 1.75;
  const imc = calcularIMC(peso, altura);
  return (
    <Panel id="imc" numero="03" tema="CONDICIONALES" titulo="Índice de masa corporal" resumen="Un cálculo numérico seguido por una clasificación con if.">
      <div className="fila-dato"><span>Peso de referencia</span><strong>{peso} kg</strong></div>
      <div className="fila-dato"><span>Estatura</span><strong>{altura} m</strong></div>
      <div className="fila-dato"><span>IMC calculado</span><strong className="resaltado">{imc.toFixed(2)}</strong></div>
      <div className="fila-dato"><span>Clasificación</span><strong><span className="pildora">{clasificarIMC(imc)}</span></strong></div>
      <p className="texto-pequeno">El IMC es una medida orientativa, no un diagnóstico médico.</p>
    </Panel>
  );
};
