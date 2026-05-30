import './Sidebar.css';

const iconoCasa = (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  </svg>
);
const iconoCarrito = (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
  </svg>
);
const iconoPersona = (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);
const iconoDolar = (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="12" y1="1" x2="12" y2="23" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);
const iconoPromover = (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" />
  </svg>
);
const iconoFlecha = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const navegacion = [
  { id: 'inicio',     etiqueta: 'Inicio',     icono: iconoCasa,     submenu: false },
  { id: 'productos',  etiqueta: 'Productos',  icono: iconoCarrito,  submenu: true  },
  { id: 'clientes',   etiqueta: 'Clientes',   icono: iconoPersona,  submenu: true  },
  { id: 'tienda',     etiqueta: 'Tienda',     icono: iconoDolar,    submenu: true  },
  { id: 'ingresos',   etiqueta: 'Ingresos',   icono: iconoCarrito,  submenu: true  },
  { id: 'promocion',  etiqueta: 'Promoción',  icono: iconoPromover, submenu: true  },
];

export default function Sidebar({ seccionActiva, onNavegar }) {
  return (
    <aside className="sidebar">
      <nav className="sidebar__nav">
        <ul>
          {navegacion.map((item) => (
            <li key={item.id}>
              <button
                className={`sidebar__item ${seccionActiva === item.id ? 'sidebar__item--activo' : ''}`}
                onClick={() => onNavegar(item.id)}
              >
                <span className="sidebar__icono">{item.icono}</span>
                <span className="sidebar__etiqueta">{item.etiqueta}</span>
                {item.submenu && <span className="sidebar__flecha">{iconoFlecha}</span>}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="sidebar__pie">
        <div className="sidebar__separador" />
        <button className="sidebar__item sidebar__item--pie">
          <span className="sidebar__icono">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
          </span>
          <span className="sidebar__etiqueta">Ayuda y guía</span>
        </button>
        <button className="sidebar__item sidebar__item--pie">
          <span className="sidebar__icono">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" y1="12" x2="9" y2="12" />
            </svg>
          </span>
          <span className="sidebar__etiqueta">Cerrar sesión</span>
        </button>
      </div>
    </aside>
  );
}
