import { useState } from 'react';
import { promociones } from '../../data/mockData';
import './Secciones.css';

const estadoColor = {
  'activa':   { bg: '#d1fae5', color: '#065f46' },
  'pausada':  { bg: '#fef3c7', color: '#92400e' },
  'borrador': { bg: '#f3f4f6', color: '#374151' },
};

const tipoIcono = {
  'descuento': '🏷️',
  'bundle':    '📦',
  'envío':     '🚚',
  'cupón':     '🎫',
};

export default function SeccionPromocion() {
  const [vistaActiva, setVistaActiva] = useState('tarjetas');
  const [filtroEstado, setFiltroEstado] = useState('Todos');

  const estados = ['Todos', 'activa', 'pausada', 'borrador'];

  const filtradas = filtroEstado === 'Todos'
    ? promociones
    : promociones.filter(p => p.estado === filtroEstado);

  return (
    <div className="seccion">
      <div className="seccion__stats-row">
        <div className="seccion__stat-card">
          <span className="seccion__stat-label">Promociones activas</span>
          <span className="seccion__stat-valor">{promociones.filter(p => p.estado === 'activa').length}</span>
        </div>
        <div className="seccion__stat-card">
          <span className="seccion__stat-label">Total usos este mes</span>
          <span className="seccion__stat-valor">{promociones.reduce((a, p) => a + p.usos, 0)}</span>
        </div>
        <div className="seccion__stat-card">
          <span className="seccion__stat-label">Conversión promedio</span>
          <span className="seccion__stat-valor">34%</span>
        </div>
        <div className="seccion__stat-card">
          <span className="seccion__stat-label">Ahorro generado</span>
          <span className="seccion__stat-valor">Rs 48.200</span>
        </div>
      </div>

      <div className="seccion__toolbar">
        <div className="seccion__filtros">
          {estados.map(e => (
            <button
              key={e}
              className={`seccion__filtro-btn ${filtroEstado === e ? 'seccion__filtro-btn--activo' : ''}`}
              onClick={() => setFiltroEstado(e)}
            >
              {e.charAt(0).toUpperCase() + e.slice(1)}
            </button>
          ))}
        </div>
        <div className="promo__vista-toggle">
          <button
            className={`promo__vista-btn ${vistaActiva === 'tarjetas' ? 'promo__vista-btn--activo' : ''}`}
            onClick={() => setVistaActiva('tarjetas')}
          >⊞</button>
          <button
            className={`promo__vista-btn ${vistaActiva === 'tabla' ? 'promo__vista-btn--activo' : ''}`}
            onClick={() => setVistaActiva('tabla')}
          >≡</button>
        </div>
        <button className="seccion__btn-primario">+ Nueva promoción</button>
      </div>

      {vistaActiva === 'tarjetas' ? (
        <div className="promo__grid">
          {filtradas.map(p => (
            <div key={p.id} className="promo__card">
              <div className="promo__card-header">
                <span className="promo__card-icono">{tipoIcono[p.tipo]}</span>
                <span className="tabla__badge" style={estadoColor[p.estado]}>{p.estado}</span>
              </div>
              <h3 className="promo__card-nombre">{p.nombre}</h3>
              <div className="promo__card-codigo">
                <span className="promo__codigo">{p.codigo}</span>
              </div>
              <div className="promo__card-info">
                <div className="promo__info-row">
                  <span className="promo__info-label">Vigencia</span>
                  <span className="promo__info-valor">{p.inicio} → {p.fin}</span>
                </div>
                <div className="promo__info-row">
                  <span className="promo__info-label">Usos</span>
                  <span className="promo__info-valor">
                    {p.usos}{p.limite ? ` / ${p.limite}` : ' (ilimitado)'}
                  </span>
                </div>
                {p.limite && (
                  <div className="ingresos__barra-prog" style={{ marginTop: 6 }}>
                    <div
                      className="ingresos__barra-prog-fill"
                      style={{ width: `${Math.min((p.usos / p.limite) * 100, 100)}%` }}
                    />
                  </div>
                )}
              </div>
              <div className="promo__card-acciones">
                <button className="seccion__btn-secundario">Editar</button>
                <button className="seccion__btn-secundario seccion__btn-secundario--danger">
                  {p.estado === 'activa' ? 'Pausar' : 'Activar'}
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="tabla-wrap">
          <table className="tabla">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Código</th>
                <th>Tipo</th>
                <th>Vigencia</th>
                <th>Usos</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filtradas.map(p => (
                <tr key={p.id}>
                  <td className="tabla__nombre">{p.nombre}</td>
                  <td><span className="promo__codigo">{p.codigo}</span></td>
                  <td>{tipoIcono[p.tipo]} {p.tipo}</td>
                  <td className="tabla__secundario">{p.inicio} → {p.fin}</td>
                  <td>{p.usos}{p.limite ? ` / ${p.limite}` : ''}</td>
                  <td>
                    <span className="tabla__badge" style={estadoColor[p.estado]}>{p.estado}</span>
                  </td>
                  <td>
                    <div className="tabla__acciones">
                      <button className="tabla__accion-btn">✏️</button>
                      <button className="tabla__accion-btn tabla__accion-btn--danger">🗑️</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
