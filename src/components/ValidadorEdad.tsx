import type { ReactElement } from 'react';
import { Panel } from '../ui/Panel';

// Indica si una edad alcanza el mínimo legal de 18 años.
const esMayorDeEdad = (edad: number): boolean => edad >= 18;
// Genera el mensaje correspondiente a cada edad.
const obtenerMensaje = (edad: number): string =>
  esMayorDeEdad(edad) ? 'Puede votar' : `Le faltan ${18 - edad} años`;

export const ValidadorEdad = (): ReactElement => {
  const edades: number[] = [15, 18, 25, 12];
  return (
    <Panel id="edades" numero="04" tema="BOOLEANOS + MAP" titulo="Validación de edades" resumen="Una condición booleana aplicada a un arreglo con .map().">
      {edades.map((edad: number, indice: number) => (
        <div className="fila-dato" key={`${edad}-${indice}`}>
          <span>{edad} años</span>
          <strong>{obtenerMensaje(edad)}</strong>
        </div>
      ))}
    </Panel>
  );
};
