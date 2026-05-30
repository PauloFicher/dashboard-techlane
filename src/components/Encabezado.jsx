import { useState } from 'react';
import './Encabezado.css';

const avatarUrl = 'https://www.figma.com/api/mcp/asset/5fb69cdf-c7e0-41bd-90f2-5691c9563358';

export default function Encabezado() {
  const [busqueda, setBusqueda] = useState('');

  return (
    <header className="encabezado">
      <div className="encabezado__logo" />

      <div className="encabezado__busqueda">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#727272" strokeWidth="2.5">
          <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
        </svg>
        <input
          type="text"
          placeholder="Buscar o escribir un comando..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
      </div>

      <div className="encabezado__acciones">
        <button className="encabezado__btn-crear">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
            <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          Crear
        </button>
        <button className="encabezado__icono-btn" title="Editar">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
          </svg>
        </button>
        <button className="encabezado__icono-btn" title="Mensajes">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
        </button>
        <img src={avatarUrl} alt="Usuario" className="encabezado__avatar" />
      </div>
    </header>
  );
}
