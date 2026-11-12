import type { ReactElement, ReactNode } from 'react';

type PanelProps = {
  id: string;
  numero: string;
  tema: string;
  titulo: string;
  resumen: string;
  children: ReactNode;
};

// Marco reutilizable: solo presenta los datos y no altera los cálculos.
export const Panel = ({ id, numero, tema, titulo, resumen, children }: PanelProps): ReactElement => (
  <section className="estacion" id={id} aria-labelledby={`${id}-titulo`}>
    <div className="estacion-superior">
      <span className="estacion-numero">{numero}</span>
      <span className="estacion-tema">{tema}</span>
    </div>
    <h2 className="estacion-titulo" id={`${id}-titulo`}>{titulo}</h2>
    <p className="estacion-resumen">{resumen}</p>
    <div className="estacion-contenido">{children}</div>
  </section>
);
