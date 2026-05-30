import './ProductosPopulares.css';

// Iconos reales del Figma
const iconoA = 'https://www.figma.com/api/mcp/asset/1d68e6b3-9496-452f-988a-92058fcefc46';
const iconoB = 'https://www.figma.com/api/mcp/asset/0e854605-4c35-437a-a67c-4a46a704a77c';
const iconoC = 'https://www.figma.com/api/mcp/asset/10d8d801-ee32-42ca-bbc0-ec93e5bc0f70';
const iconoD = 'https://www.figma.com/api/mcp/asset/e5a71cd3-0dba-423e-b891-cdeef8faf03c';

const productos = [
  { nombre: 'Producto A', ganancias: 'Rs 3081', icono: iconoA },
  { nombre: 'Producto B', ganancias: 'Rs 259',  icono: iconoB },
  { nombre: 'Producto C', ganancias: 'Rs 6057', icono: iconoC },
  { nombre: 'Producto D', ganancias: 'Rs 999',  icono: iconoD },
];

export default function ProductosPopulares() {
  return (
    <div className="productos">
      <h3 className="productos__titulo">Productos Populares</h3>

      <div className="productos__columnas">
        <span>Productos</span>
        <span>Ganancias</span>
      </div>

      <ul className="productos__lista">
        {productos.map((p) => (
          <li key={p.nombre} className="productos__item">
            <div className="productos__info">
              <img src={p.icono} alt={p.nombre} className="productos__icono" />
              <span className="productos__nombre">{p.nombre}</span>
            </div>
            <span className="productos__ganancia">{p.ganancias}</span>
          </li>
        ))}
      </ul>

      <button className="productos__btn-todos">Todos los productos</button>
    </div>
  );
}
