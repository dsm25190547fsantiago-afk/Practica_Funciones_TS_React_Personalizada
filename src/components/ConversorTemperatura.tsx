import type { ReactElement } from 'react';
import { Panel } from '../ui/Panel';

// Transforma una temperatura de Celsius a Fahrenheit.
const celsiusAFahrenheit = (c: number): number => (c * 9) / 5 + 32;
// Realiza la conversión inversa, de Fahrenheit a Celsius.
const fahrenheitACelsius = (f: number): number => ((f - 32) * 5) / 9;

export const ConversorTemperatura = (): ReactElement => {
  const temperatura = 25;
  return (
    <Panel id="temperatura" numero="02" tema="CONVERSIONES" titulo="Temperatura en dos escalas" resumen="Fórmulas de conversión con valores de entrada fijos.">
      <div className="recuadro">
        <p className="etiqueta-dato">CELSIUS A FAHRENHEIT</p>
        <p><strong>{temperatura} °C</strong> = {celsiusAFahrenheit(temperatura)} °F</p>
      </div>
      <div className="recuadro">
        <p className="etiqueta-dato">FAHRENHEIT A CELSIUS</p>
        <p><strong>100 °F</strong> = {fahrenheitACelsius(100).toFixed(2)} °C</p>
      </div>
    </Panel>
  );
};
