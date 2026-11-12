import type { ReactElement } from 'react';
import { Calculadora } from './components/Calculadora';
import { ConversorTemperatura } from './components/ConversorTemperatura';
import { CalculadoraIMC } from './components/CalculadoraIMC';
import { ValidadorEdad } from './components/ValidadorEdad';
import { AnalizadorTexto } from './components/AnalizadorTexto';
import { EstadisticasArreglo } from './components/EstadisticasArreglo';
import { GeneradorPassword } from './components/GeneradorPassword';
import { AplicadorDescuentos } from './components/AplicadorDescuentos';
import { SistemaCalificaciones } from './components/SistemaCalificaciones';
import { CarritoCompras } from './components/CarritoCompras';

// App integra los diez ejercicios en una sola vista para revisar los resultados.
const App = (): ReactElement => (
  <div className="app-fondo">
    <div className="app-contenedor">
      <header className="barra-superior">
        <a className="marca" href="#inicio" aria-label="Volver al inicio">
          <span className="marca-icono">ƒ</span>
          <span>FUNCIONES<span className="marca-acento">/LAB</span></span>
        </a>
        <span className="barra-etiqueta">DESARROLLO DE APLICACIONES MÓVILES</span>
        <span className="barra-tag">TS + REACT</span>
      </header>

      <main id="inicio">
        <div className="cabecera">
          <div>
            <p className="eyebrow"><span className="punto-verde" /> PRÁCTICA · 10 EJERCICIOS</p>
            <h1>Funciones en <span>acción.</span></h1>
            <p className="cabecera-descripcion">Una colección de ejercicios que transforma datos en resultados utilizando TypeScript, funciones tipadas y componentes de React.</p>
          </div>
          <div className="cabecera-distintivo" aria-label="Proyecto de funciones">
            <span>01 — 10</span>
            <strong>{'{ }'}</strong>
            <small>LÓGICA + INTERFAZ</small>
          </div>
        </div>

        <div className="resumen-general">
          <div><strong>10</strong><span>componentes</span></div>
          <div><strong>28</strong><span>funciones principales</span></div>
          <div><strong>TSX</strong><span>tipado explícito</span></div>
          <a href="#ejercicios">Explorar ejercicios <span aria-hidden="true">↗</span></a>
        </div>

        <div className="seccion-titulo" id="ejercicios">
          <div>
            <p className="eyebrow">RECORRIDO DE APRENDIZAJE</p>
            <h2>Resultados de los ejercicios</h2>
          </div>
          <p>Datos originales de la práctica · lógica implementada por separado</p>
        </div>

        <div className="rejilla-ejercicios">
          <Calculadora />
          <ConversorTemperatura />
          <CalculadoraIMC />
          <ValidadorEdad />
          <AnalizadorTexto />
          <EstadisticasArreglo />
          <GeneradorPassword />
          <AplicadorDescuentos />
          <SistemaCalificaciones />
          <CarritoCompras />
        </div>
      </main>
      <footer className="pie-pagina">
        <span>LABORATORIO DE FUNCIONES</span>
        <span>React · TypeScript · Tailwind CSS</span>
        <span>10 / 10 ejercicios</span>
      </footer>
    </div>
  </div>
);

export default App;
