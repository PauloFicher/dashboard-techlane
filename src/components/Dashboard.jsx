import './Dashboard.css';
import Resumen from './Resumen';
import GraficoIngresos from './GraficoIngresos';
import ProductosPopulares from './ProductosPopulares';
import Comentarios from './Comentarios';
import SeccionProductos from './secciones/SeccionProductos';
import SeccionClientes from './secciones/SeccionClientes';
import SeccionTienda from './secciones/SeccionTienda';
import SeccionIngresos from './secciones/SeccionIngresos';
import SeccionPromocion from './secciones/SeccionPromocion';

const titulos = {
  inicio:    'Dashboard',
  productos: 'Productos',
  clientes:  'Clientes',
  tienda:    'Tienda',
  ingresos:  'Ingresos',
  promocion: 'Promoción',
};

export default function Dashboard({ seccion }) {
  const esInicio = seccion === 'inicio';

  return (
    <div className="dashboard-wrap">
      <h1 className="dashboard__titulo">{titulos[seccion] || 'Dashboard'}</h1>

      {esInicio ? (
        <div className="dashboard__grid">
          <div className="dashboard__col-principal">
            <Resumen />
            <GraficoIngresos />
          </div>
          <div className="dashboard__col-lateral">
            <ProductosPopulares />
            <Comentarios />
          </div>
        </div>
      ) : (
        <div className="dashboard__seccion">
          {seccion === 'productos' && <SeccionProductos />}
          {seccion === 'clientes'  && <SeccionClientes />}
          {seccion === 'tienda'    && <SeccionTienda />}
          {seccion === 'ingresos'  && <SeccionIngresos />}
          {seccion === 'promocion' && <SeccionPromocion />}
        </div>
      )}
    </div>
  );
}
