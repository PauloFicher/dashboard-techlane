import { useState } from 'react';
import { productos } from '../../data/mockData';
import './Secciones.css';

const estadoColor = {
  'activo':      { bg: '#d1fae5', color: '#065f46' },
  'bajo stock':  { bg: '#fef3c7', color: '#92400e' },
  'sin stock':   { bg: '#fee2e2', color: '#991b1b' },
};

export default function SeccionProductos() {
  const [busqueda, setBusqueda] = useState('');
  const [categoriaFiltro, setCategoriaFiltro] = useState('Todas');

  const categorias = ['Todas', ...new Set(productos.map(p => p.categoria))];

  const filtrados = productos.filter(p => {
    const coincideBusqueda = p.nombre.toLowerCase().includes(busqueda.toLowerCase());
    const coincideCategoria = categoriaFiltro === 'Todas' || p.categoria === categoriaFiltro;
    return coincideBusqueda && coincideCategoria;
  });

  return (
    <div className="seccion">
      <div className="seccion__toolbar">
        <input
          className="seccion__busqueda"
          placeholder="Buscar producto..."
          value={busqueda}
          onChange={e => setBusqueda(e.target.value)}
        />
        <div className="seccion__filtros">
          {categorias.map(c => (
            <button
              key={c}
              className={`seccion__filtro-btn ${categoriaFiltro === c ? 'seccion__filtro-btn--activo' : ''}`}
              onClick={() => setCategoriaFiltro(c)}
            >
              {c}
            </button>
          ))}
        </div>
        <button className="seccion__btn-primario">+ Nuevo producto</button>
      </div>

      <div className="tabla-wrap">
        <table className="tabla">
          <thead>
            <tr>
              <th>Producto</th>
              <th>Categoría</th>
              <th>Precio</th>
              <th>Stock</th>
              <th>Ventas</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filtrados.map(p => (
              <tr key={p.id}>
                <td>
                  <div className="tabla__producto">
                    <img src={p.imagen} alt={p.nombre} className="tabla__avatar" />
                    <span className="tabla__nombre">{p.nombre}</span>
                  </div>
                </td>
                <td><span className="tabla__categoria">{p.categoria}</span></td>
                <td className="tabla__monto">Rs {p.precio.toLocaleString('es-PY')}</td>
                <td className={p.stock === 0 ? 'tabla__stock--vacio' : p.stock < 15 ? 'tabla__stock--bajo' : ''}>
                  {p.stock}
                </td>
                <td>{p.ventas}</td>
                <td>
                  <span className="tabla__badge" style={estadoColor[p.estado]}>
                    {p.estado}
                  </span>
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

      <div className="seccion__pie">
        <span className="seccion__total">{filtrados.length} productos encontrados</span>
      </div>
    </div>
  );
}
