import type { ReactElement } from 'react';
import { Panel } from '../ui/Panel';

type Alumno = { nombre: string; califs: number[] };
// Calcula la media del conjunto de notas de cada estudiante.
const calcularPromedio = (calificaciones: number[]): number =>
  calificaciones.length === 0 ? 0 : calificaciones.reduce((suma: number, nota: number) => suma + nota, 0) / calificaciones.length;
// Convierte un promedio numérico a la escala de letras solicitada.
const obtenerLetra = (promedio: number): string => {
  if (promedio >= 90) return 'A';
  if (promedio >= 80) return 'B';
  if (promedio >= 70) return 'C';
  if (promedio >= 60) return 'D';
  return 'F';
};
// Verifica el mínimo requerido para aprobar.
const estaAprobado = (promedio: number): boolean => promedio >= 70;

export const SistemaCalificaciones = (): ReactElement => {
  const alumnos: Alumno[] = [
    { nombre: 'Ana', califs: [95, 88, 92] },
    { nombre: 'Luis', califs: [70, 65, 72] },
    { nombre: 'María', califs: [85, 90, 88] },
  ];
  return (
    <Panel id="calificaciones" numero="09" tema="OBJETOS + MAP" titulo="Reporte de calificaciones" resumen="Promedio, letra y estado de cada alumno en una sola lectura.">
      {alumnos.map((alumno: Alumno) => {
        const promedio = calcularPromedio(alumno.califs);
        const aprobado = estaAprobado(promedio);
        return (
          <div className="fila-dato" key={alumno.nombre}>
            <span><strong>{alumno.nombre}</strong> · {promedio.toFixed(1)} · {obtenerLetra(promedio)}</span>
            <span className={`pildora ${aprobado ? '' : 'alerta'}`}>{aprobado ? 'Aprobado' : 'Reprobado'}</span>
          </div>
        );
      })}
      <p className="texto-pequeno">El criterio de aprobación utilizado es un promedio de 70 o más.</p>
    </Panel>
  );
};
