import { useState } from 'react';
import './GraficoIngresos.css';

// Basado en alturas exactas del Figma: blue=0038ff, light=9ac4eb
const datos = [
  { mes: 'Ene', azul: 143, claro: 85  },
  { mes: 'Feb', azul: 0,   claro: 99  },
  { mes: 'Mar', azul: 119, claro: 0   },
  { mes: 'Abr', azul: 0,   claro: 48  },
  { mes: 'Jun', azul: 0,   claro: 76  },
  { mes: 'Jul', azul: 130, claro: 0   },
  { mes: 'Ago', azul: 0,   claro: 0   },
  { mes: 'Sep', azul: 142, claro: 0   },
  { mes: 'Oct', azul: 135, claro: 52  },
  { mes: 'Nov', azul: 0,   claro: 117 },
  { mes: 'Dic', azul: 117, claro: 0   },
];

const filtros = ['Todo el tiempo', 'Este año', 'Este mes'];

const iconoFiltro = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2">
    <line x1="4" y1="6" x2="20" y2="6" />
    <line x1="8" y1="12" x2="16" y2="12" />
    <line x1="11" y1="18" x2="13" y2="18" />
  </svg>
);

export default function GraficoIngresos() {
  const [filtro, setFiltro] = useState('Todo el tiempo');
  const [abierto, setAbierto] = useState(false);
  const [hover, setHover] = useState(null);

  return (
    <div className="grafico">
      <div className="grafico__encabezado">
        <h2 className="grafico__titulo">Ingresos Totales</h2>
        <div className="grafico__filtro-wrap">
          {iconoFiltro}
          <div style={{ position: 'relative' }}>
            <button className="grafico__select" onClick={() => setAbierto(!abierto)}>
              {filtro}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            {abierto && (
              <ul className="grafico__dropdown">
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

      <div className="grafico__area">
        {/* Líneas horizontales */}
        <div className="grafico__grid">
          {[0,1,2,3,4].map((i) => <div key={i} className="grafico__linea" />)}
        </div>

        {/* Barras */}
        <div className="grafico__barras">
          {datos.map((d, i) => (
            <div
              key={d.mes}
              className="grafico__col"
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(null)}
            >
              {hover === i && (
                <div className="grafico__tooltip">
                  Rs {((d.azul || d.claro) * 800).toLocaleString('es-PY')}
                </div>
              )}
              <div className="grafico__pares">
                {d.azul > 0 && (
                  <div className="grafico__barra grafico__barra--azul" style={{ height: d.azul + 'px' }} />
                )}
                {d.claro > 0 && (
                  <div className="grafico__barra grafico__barra--claro" style={{ height: d.claro + 'px' }} />
                )}
              </div>
              <span className="grafico__mes">{d.mes}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
