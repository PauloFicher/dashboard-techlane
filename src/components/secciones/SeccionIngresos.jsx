import { useState } from 'react';
import { resumenIngresos, ingresosCategoria, transacciones } from '../../data/mockData';
import './Secciones.css';

const tipoColor = {
  'venta':     { bg: '#d1fae5', color: '#065f46' },
  'reembolso': { bg: '#fee2e2', color: '#991b1b' },
};

const barrasMeses = [
  { mes: 'Ene', valor: 65 }, { mes: 'Feb', valor: 82 }, { mes: 'Mar', valor: 90 },
  { mes: 'Abr', valor: 55 }, { mes: 'May', valor: 78 }, { mes: 'Jun', valor: 0  },
  { mes: 'Jul', valor: 0  }, { mes: 'Ago', valor: 0  }, { mes: 'Sep', valor: 0  },
  { mes: 'Oct', valor: 0  }, { mes: 'Nov', valor: 0  }, { mes: 'Dic', valor: 0  },
];
const maxBarra = Math.max(...barrasMeses.map(b => b.valor));

export default function SeccionIngresos() {
  const [tabActiva, setTabActiva] = useState('resumen');

  return (
    <div className="seccion">
      {/* KPIs */}
      <div className="seccion__stats-row">
        <div className="seccion__stat-card">
          <span className="seccion__stat-label">Ingresos este mes</span>
          <span className="seccion__stat-valor">{resumenIngresos.totalMes}</span>
          <span className="seccion__stat-cambio seccion__stat-cambio--positivo">↑ 12% vs mes anterior</span>
        </div>
        <div className="seccion__stat-card">
          <span className="seccion__stat-label">Ingresos anuales</span>
          <span className="seccion__stat-valor">{resumenIngresos.totalAnio}</span>
        </div>
        <div className="seccion__stat-card">
          <span className="seccion__stat-label">Ticket promedio</span>
          <span className="seccion__stat-valor">{resumenIngresos.ticketPromedio}</span>
        </div>
        <div className="seccion__stat-card">
          <span className="seccion__stat-label">Crecimiento</span>
          <span className="seccion__stat-valor seccion__stat-valor--verde">{resumenIngresos.crecimiento}</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="ingresos__tabs">
        {['resumen', 'transacciones'].map(t => (
          <button
            key={t}
            className={`ingresos__tab ${tabActiva === t ? 'ingresos__tab--activo' : ''}`}
            onClick={() => setTabActiva(t)}
          >
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>

      {tabActiva === 'resumen' && (
        <div className="ingresos__grid">
          {/* Gráfico de barras anual */}
          <div className="ingresos__card">
            <h3 className="ingresos__card-titulo">Ingresos por mes (2025)</h3>
            <div className="ingresos__grafico">
              {barrasMeses.map((b, i) => (
                <div key={i} className="ingresos__barra-col">
                  <div
                    className={`ingresos__barra ${b.valor === 0 ? 'ingresos__barra--vacia' : ''}`}
                    style={{ height: b.valor > 0 ? `${(b.valor / maxBarra) * 140}px` : '4px' }}
                  />
                  <span className="ingresos__barra-mes">{b.mes}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Por categoría */}
          <div className="ingresos__card">
            <h3 className="ingresos__card-titulo">Ingresos por categoría</h3>
            <div className="ingresos__categorias">
              {ingresosCategoria.map(c => (
                <div key={c.categoria} className="ingresos__categoria-item">
                  <div className="ingresos__categoria-header">
                    <span className="ingresos__categoria-nombre">{c.categoria}</span>
                    <span className="ingresos__categoria-monto">Rs {c.monto.toLocaleString('es-PY')}</span>
                  </div>
                  <div className="ingresos__barra-prog">
                    <div className="ingresos__barra-prog-fill" style={{ width: `${c.porcentaje}%` }} />
                  </div>
                  <span className="ingresos__categoria-pct">{c.porcentaje}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {tabActiva === 'transacciones' && (
        <div className="tabla-wrap">
          <table className="tabla">
            <thead>
              <tr>
                <th>ID</th>
                <th>Fecha</th>
                <th>Cliente</th>
                <th>Monto</th>
                <th>Tipo</th>
                <th>Método</th>
              </tr>
            </thead>
            <tbody>
              {transacciones.map(t => (
                <tr key={t.id}>
                  <td className="tabla__id">{t.id}</td>
                  <td className="tabla__secundario">{t.fecha}</td>
                  <td className="tabla__nombre">{t.cliente}</td>
                  <td className="tabla__monto">{t.monto}</td>
                  <td>
                    <span className="tabla__badge" style={tipoColor[t.tipo]}>{t.tipo}</span>
                  </td>
                  <td className="tabla__secundario">{t.metodo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
