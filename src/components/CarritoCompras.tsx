import type { ReactElement } from 'react';
import { Panel } from '../ui/Panel';

type Articulo = { producto: string; precio: number; cantidad: number };
// Multiplica el precio unitario por la cantidad adquirida.
const calcularSubtotal = (precio: number, cantidad: number): number => precio * cantidad;
// Calcula el impuesto correspondiente al 16 %.
const calcularIVA = (subtotal: number): number => subtotal * 0.16;
// Obtiene el total con impuestos incluidos.
const calcularTotal = (subtotal: number): number => subtotal + calcularIVA(subtotal);
// Presenta cualquier cantidad con dos decimales y símbolo de pesos.
const formatearPrecio = (precio: number): string => `$${precio.toFixed(2)}`;

export const CarritoCompras = (): ReactElement => {
  const carrito: Articulo[] = [
    { producto: 'Laptop', precio: 15000, cantidad: 1 },
    { producto: 'Mouse', precio: 350, cantidad: 2 },
    { producto: 'Teclado', precio: 800, cantidad: 1 },
  ];
  const subtotal = carrito.reduce(
    (acumulado: number, item: Articulo) => acumulado + calcularSubtotal(item.precio, item.cantidad),
    0,
  );
  return (
    <Panel id="carrito" numero="10" tema="REDUCE + IVA" titulo="Resumen de compra" resumen="Procesamiento de artículos, subtotal e impuesto del 16 %.">
      {carrito.map((item: Articulo) => (
        <div className="fila-dato" key={item.producto}>
          <span>{item.producto} <span className="texto-pequeno">× {item.cantidad}</span></span>
          <strong>{formatearPrecio(calcularSubtotal(item.precio, item.cantidad))}</strong>
        </div>
      ))}
      <div className="recuadro">
        <div className="fila-dato"><span>Subtotal</span><strong>{formatearPrecio(subtotal)}</strong></div>
        <div className="fila-dato"><span>IVA · 16 %</span><strong>{formatearPrecio(calcularIVA(subtotal))}</strong></div>
        <div className="fila-dato"><span>Total a pagar</span><strong className="resaltado">{formatearPrecio(calcularTotal(subtotal))}</strong></div>
      </div>
    </Panel>
  );
};
