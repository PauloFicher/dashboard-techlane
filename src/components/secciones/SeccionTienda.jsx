import { useState } from 'react';
import { pedidos } from '../../data/mockData';
import './Secciones.css';

const estadoColor = {
  'entregado':  { bg: '#d1fae5', color: '#065f46' },
  'en camino':  { bg: '#dbeafe', color: '#1e40af' },
  'procesando': { bg: '#fef3c7', color: '#92400e' },
  'cancelado':  { bg: '#fee2e2', color: '#991b1b' },
};

export default function SeccionTienda() {
  const [filtroEstado, setFiltroEstado] = useState('Todos');

  const estados = ['Todos', 'entregado', 'en camino', 'procesando', 'cancelado'];

  const filtrados = filtroEstado === 'Todos'
    ? pedidos
    : pedidos.filter(p => p.estado === filtroEstado);

  const conteo = {
    entregado:  pedidos.filter(p => p.estado === 'entregado').length,
    'en camino': pedidos.filter(p => p.estado === 'en camino').length,
    procesando: pedidos.filter(p => p.estado === 'procesando').length,
    cancelado:  pedidos.filter(p => p.estado === 'cancelado').length,
  };

  return (
    <div className="seccion">
      <div className="seccion__stats-row">
        <div className="seccion__stat-card seccion__stat-card--verde">
          <span className="seccion__stat-label">Entregados</span>
          <span className="seccion__stat-valor">{conteo.entregado}</span>
        </div>
        <div className="seccion__stat-card seccion__stat-card--azul">
          <span className="seccion__stat-label">En camino</span>
          <span className="seccion__stat-valor">{conteo['en camino']}</span>
        </div>
        <div className="seccion__stat-card seccion__stat-card--amarillo">
          <span className="seccion__stat-label">Procesando</span>
          <span className="seccion__stat-valor">{conteo.procesando}</span>
        </div>
        <div className="seccion__stat-card seccion__stat-card--rojo">
          <span className="seccion__stat-label">Cancelados</span>
          <span className="seccion__stat-valor">{conteo.cancelado}</span>
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
        <button className="seccion__btn-primario">+ Nuevo pedido</button>
      </div>

      <div className="tabla-wrap">
        <table className="tabla">
          <thead>
            <tr>
              <th>ID Pedido</th>
              <th>Cliente</th>
              <th>Producto</th>
              <th>Fecha</th>
              <th>Monto</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filtrados.map(p => (
              <tr key={p.id}>
                <td className="tabla__id">{p.id}</td>
                <td className="tabla__nombre">{p.cliente}</td>
                <td className="tabla__secundario">{p.producto}</td>
                <td className="tabla__secundario">{p.fecha}</td>
                <td className="tabla__monto">{p.monto}</td>
                <td>
                  <span className="tabla__badge" style={estadoColor[p.estado]}>
                    {p.estado}
                  </span>
                </td>
                <td>
                  <div className="tabla__acciones">
                    <button className="tabla__accion-btn">👁️</button>
                    <button className="tabla__accion-btn">✏️</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="seccion__pie">
        <span className="seccion__total">{filtrados.length} pedidos</span>
      </div>
    </div>
  );
}
