import { useState } from 'react';
import { clientes } from '../../data/mockData';
import './Secciones.css';

const estadoColor = {
  'activo':   { bg: '#d1fae5', color: '#065f46' },
  'inactivo': { bg: '#f3f4f6', color: '#374151' },
  'vip':      { bg: '#ede9fe', color: '#5b21b6' },
};

export default function SeccionClientes() {
  const [busqueda, setBusqueda] = useState('');
  const [filtroEstado, setFiltroEstado] = useState('Todos');

  const estados = ['Todos', 'activo', 'inactivo', 'vip'];

  const filtrados = clientes.filter(c => {
    const coincide = c.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
                     c.email.toLowerCase().includes(busqueda.toLowerCase());
    const estado = filtroEstado === 'Todos' || c.estado === filtroEstado;
    return coincide && estado;
  });

  return (
    <div className="seccion">
      <div className="seccion__stats-row">
        <div className="seccion__stat-card">
          <span className="seccion__stat-label">Total clientes</span>
          <span className="seccion__stat-valor">10.382</span>
        </div>
        <div className="seccion__stat-card">
          <span className="seccion__stat-label">Activos este mes</span>
          <span className="seccion__stat-valor">8.941</span>
        </div>
        <div className="seccion__stat-card">
          <span className="seccion__stat-label">Clientes VIP</span>
          <span className="seccion__stat-valor">127</span>
        </div>
        <div className="seccion__stat-card">
          <span className="seccion__stat-label">Nuevos este mes</span>
          <span className="seccion__stat-valor">+312</span>
        </div>
      </div>

      <div className="seccion__toolbar">
        <input
          className="seccion__busqueda"
          placeholder="Buscar cliente o email..."
          value={busqueda}
          onChange={e => setBusqueda(e.target.value)}
        />
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
        <button className="seccion__btn-primario">+ Nuevo cliente</button>
      </div>

      <div className="tabla-wrap">
        <table className="tabla">
          <thead>
            <tr>
              <th>Cliente</th>
              <th>Email</th>
              <th>País</th>
              <th>Compras</th>
              <th>Total gastado</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filtrados.map(c => (
              <tr key={c.id}>
                <td>
                  <div className="tabla__producto">
                    <img src={c.foto} alt={c.nombre} className="tabla__avatar tabla__avatar--redondo" />
                    <span className="tabla__nombre">{c.nombre}</span>
                  </div>
                </td>
                <td className="tabla__secundario">{c.email}</td>
                <td>{c.pais}</td>
                <td>{c.compras}</td>
                <td className="tabla__monto">{c.total}</td>
                <td>
                  <span className="tabla__badge" style={estadoColor[c.estado]}>
                    {c.estado}
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
        <span className="seccion__total">{filtrados.length} clientes encontrados</span>
      </div>
    </div>
  );
}
