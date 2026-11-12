import type { ReactElement } from 'react';
import { Panel } from '../ui/Panel';

type ReglaDescuento = (precio: number) => number;
// Ejecuta una función de descuento recibida como callback.
const aplicarDescuento = (precio: number, calcularDescuento: ReglaDescuento): number =>
  precio - calcularDescuento(precio);
// Devuelve el importe correspondiente al diez por ciento.
const descuento10 = (p: number): number => p * 0.10;
// Devuelve el importe correspondiente al veinticinco por ciento.
const descuento25 = (p: number): number => p * 0.25;
// Devuelve el quince por ciento de beneficio estudiantil.
const descuentoEstudiante = (p: number): number => p * 0.15;

export const AplicadorDescuentos = (): ReactElement => {
  const precio = 1000;
  return (
    <Panel id="descuentos" numero="08" tema="CALLBACKS" titulo="Descuentos flexibles" resumen="Una misma función puede aplicar diferentes reglas de descuento.">
      <div className="fila-dato"><span>Precio de partida</span><strong>${precio.toFixed(2)}</strong></div>
      <div className="fila-dato"><span>Descuento del 10 %</span><strong>${aplicarDescuento(precio, descuento10).toFixed(2)}</strong></div>
      <div className="fila-dato"><span>Descuento del 25 %</span><strong>${aplicarDescuento(precio, descuento25).toFixed(2)}</strong></div>
      <div className="fila-dato"><span>Tarifa estudiante · 15 %</span><strong className="resaltado">${aplicarDescuento(precio, descuentoEstudiante).toFixed(2)}</strong></div>
    </Panel>
  );
};
