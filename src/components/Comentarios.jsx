import './Comentarios.css';

const comentarios = [
  {
    id: 1,
    mensaje: 'Los productos son geniales y el diseño de la página es excelente.',
    fecha: '15/08/2023',
  },
];

export default function Comentarios() {
  return (
    <div className="comentarios">
      <h3 className="comentarios__titulo">Comentarios</h3>

      <div className="comentarios__columnas">
        <span>Mensaje</span>
        <span>Fecha</span>
      </div>

      <ul className="comentarios__lista">
        {comentarios.map((c) => (
          <li key={c.id} className="comentarios__item">
            <p className="comentarios__mensaje">{c.mensaje}</p>
            <span className="comentarios__fecha">{c.fecha}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
