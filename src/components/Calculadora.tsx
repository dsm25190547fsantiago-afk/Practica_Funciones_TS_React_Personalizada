import type { ReactElement } from 'react';
import { Panel } from '../ui/Panel';

// Obtiene la suma de dos cantidades.
const sumar = (a: number, b: number): number => a + b;
// Encuentra la diferencia entre el primer valor y el segundo.
const restar = (a: number, b: number): number => a - b;
// Calcula el producto de dos factores.
const multiplicar = (a: number, b: number): number => a * b;
// Retorna cero cuando el divisor no es válido para evitar dividir entre cero.
const dividir = (a: number, b: number): number => (b === 0 ? 0 : a / b);

export const Calculadora = (): ReactElement => {
  const a = 15;
  const b = 4;
  return (
    <Panel id="calculadora" numero="01" tema="ARITMÉTICA" titulo="Operaciones básicas" resumen="Cuatro funciones puras y un caso especial de división.">
      <div className="fila-dato"><span>Suma · {a} + {b}</span><strong>{sumar(a, b)}</strong></div>
      <div className="fila-dato"><span>Resta · {a} − {b}</span><strong>{restar(a, b)}</strong></div>
      <div className="fila-dato"><span>Producto · {a} × {b}</span><strong>{multiplicar(a, b)}</strong></div>
      <div className="fila-dato"><span>Cociente · {a} ÷ {b}</span><strong className="resaltado">{dividir(a, b).toFixed(2)}</strong></div>
      <p className="texto-pequeno">Comprobación: {a} ÷ 0 = {dividir(a, 0)}.</p>
    </Panel>
  );
};
