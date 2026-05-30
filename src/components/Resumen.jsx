import { useState } from 'react';
import './Resumen.css';

const fotoAndrews = 'https://www.figma.com/api/mcp/asset/a718d527-0233-4a18-bbf4-bdd38dddc904';
const fotoAnna   = 'https://www.figma.com/api/mcp/asset/b68f4f83-a292-4ba7-9c50-da34d3f1b9e5';
const fotoJohn   = 'https://www.figma.com/api/mcp/asset/a7dfd7b2-5bf8-42ef-ac1d-c1ac9c7094a1';
const fotoMark   = 'https://www.figma.com/api/mcp/asset/acafde48-4a4c-4b24-91cc-d17f002ef4cb';

const clientes = [
  { nombre: 'Andrés', foto: fotoAndrews },
  { nombre: 'Ana',    foto: fotoAnna    },
  { nombre: 'Juan',   foto: fotoJohn    },
  { nombre: 'Marco',  foto: fotoMark    },
];

const filtros = ['Todo el tiempo', 'Este año', 'Este mes'];

const iconoFiltro = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2">
    <line x1="4" y1="6" x2="20" y2="6" />
    <line x1="8" y1="12" x2="16" y2="12" />
    <line x1="11" y1="18" x2="13" y2="18" />
  </svg>
);

export default function Resumen() {
  const [filtro, setFiltro] = useState('Todo el tiempo');
  const [abierto, setAbierto] = useState(false);

  return (
    <div className="resumen">
      <div className="resumen__encabezado">
        <h2 className="resumen__titulo">Resumen</h2>
        <div className="resumen__filtro-wrap">
          {iconoFiltro}
          <div style={{ position: 'relative' }}>
            <button className="resumen__select" onClick={() => setAbierto(!abierto)}>
              {filtro}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            {abierto && (
              <ul className="resumen__dropdown">
                {filtros.map((f) => (
                  <li key={f}>
                    <button
                      onClick={() => { setFiltro(f); setAbierto(false); }}
                      className={filtro === f ? 'activo' : ''}
                    >
                      {f}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* Métricas */}
      <div className="resumen__metricas">
        <div className="resumen__metrica resumen__metrica--gris">
          <div className="resumen__metrica-row">
            <span className="resumen__metrica-label">Clientes</span>
            <span className="resumen__badge resumen__badge--verde">8%</span>
          </div>
          <div className="resumen__metrica-valor">10.382</div>
        </div>
        <div className="resumen__metrica">
          <div className="resumen__metrica-row">
            <span className="resumen__metrica-label">Ingresos</span>
            <span className="resumen__badge resumen__badge--gris">3%</span>
          </div>
          <div className="resumen__metrica-valor resumen__metrica-valor--sm">Rs 1.384.230,50</div>
        </div>
      </div>

      {/* Clientes populares */}
      <div className="resumen__clientes">
        {clientes.map((c) => (
          <div key={c.nombre} className="resumen__cliente">
            <img src={c.foto} alt={c.nombre} className="resumen__foto" />
            <span className="resumen__nombre">{c.nombre}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
