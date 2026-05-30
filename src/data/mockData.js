// ─── PRODUCTOS ───────────────────────────────────────────────
export const productos = [
  { id: 1, nombre: 'Auriculares Pro X',    categoria: 'Electrónica',  precio: 12500, stock: 48,  ventas: 312, estado: 'activo',    imagen: 'https://i.pravatar.cc/40?img=1' },
  { id: 2, nombre: 'Silla Ergonómica Z',   categoria: 'Mobiliario',   precio: 45000, stock: 12,  ventas: 87,  estado: 'activo',    imagen: 'https://i.pravatar.cc/40?img=2' },
  { id: 3, nombre: 'Teclado Mecánico RGB', categoria: 'Electrónica',  precio: 8900,  stock: 95,  ventas: 540, estado: 'activo',    imagen: 'https://i.pravatar.cc/40?img=3' },
  { id: 4, nombre: 'Monitor 4K 27"',       categoria: 'Electrónica',  precio: 89000, stock: 5,   ventas: 63,  estado: 'bajo stock',imagen: 'https://i.pravatar.cc/40?img=4' },
  { id: 5, nombre: 'Mochila Tech 30L',     categoria: 'Accesorios',   precio: 5500,  stock: 200, ventas: 890, estado: 'activo',    imagen: 'https://i.pravatar.cc/40?img=5' },
  { id: 6, nombre: 'Mouse Inalámbrico',    categoria: 'Electrónica',  precio: 3200,  stock: 0,   ventas: 430, estado: 'sin stock', imagen: 'https://i.pravatar.cc/40?img=6' },
  { id: 7, nombre: 'Lámpara LED Desk',     categoria: 'Mobiliario',   precio: 2800,  stock: 67,  ventas: 215, estado: 'activo',    imagen: 'https://i.pravatar.cc/40?img=7' },
  { id: 8, nombre: 'Hub USB-C 7 en 1',     categoria: 'Accesorios',   precio: 4100,  stock: 33,  ventas: 178, estado: 'activo',    imagen: 'https://i.pravatar.cc/40?img=8' },
];

// ─── CLIENTES ────────────────────────────────────────────────
export const clientes = [
  { id: 1,  nombre: 'Andrés García',    email: 'andres@mail.com',   pais: 'Paraguay',  compras: 14, total: 'Rs 84.500',  estado: 'activo',    foto: 'https://i.pravatar.cc/40?img=11' },
  { id: 2,  nombre: 'Ana Martínez',     email: 'ana@mail.com',      pais: 'Argentina', compras: 8,  total: 'Rs 42.000',  estado: 'activo',    foto: 'https://i.pravatar.cc/40?img=5'  },
  { id: 3,  nombre: 'Juan López',       email: 'juan@mail.com',     pais: 'Brasil',    compras: 22, total: 'Rs 155.800', estado: 'activo',    foto: 'https://i.pravatar.cc/40?img=12' },
  { id: 4,  nombre: 'Marco Torres',     email: 'marco@mail.com',    pais: 'Uruguay',   compras: 3,  total: 'Rs 12.400',  estado: 'inactivo',  foto: 'https://i.pravatar.cc/40?img=8'  },
  { id: 5,  nombre: 'Laura Fernández',  email: 'laura@mail.com',    pais: 'Paraguay',  compras: 17, total: 'Rs 96.200',  estado: 'activo',    foto: 'https://i.pravatar.cc/40?img=9'  },
  { id: 6,  nombre: 'Carlos Ruiz',      email: 'carlos@mail.com',   pais: 'Chile',     compras: 5,  total: 'Rs 28.900',  estado: 'activo',    foto: 'https://i.pravatar.cc/40?img=13' },
  { id: 7,  nombre: 'María Gómez',      email: 'maria@mail.com',    pais: 'Paraguay',  compras: 31, total: 'Rs 210.000', estado: 'vip',       foto: 'https://i.pravatar.cc/40?img=20' },
  { id: 8,  nombre: 'Diego Sandoval',   email: 'diego@mail.com',    pais: 'Bolivia',   compras: 2,  total: 'Rs 8.600',   estado: 'inactivo',  foto: 'https://i.pravatar.cc/40?img=15' },
  { id: 9,  nombre: 'Sofía Herrera',    email: 'sofia@mail.com',    pais: 'Argentina', compras: 11, total: 'Rs 67.300',  estado: 'activo',    foto: 'https://i.pravatar.cc/40?img=21' },
  { id: 10, nombre: 'Pablo Mendoza',    email: 'pablo@mail.com',    pais: 'Paraguay',  compras: 9,  total: 'Rs 51.500',  estado: 'activo',    foto: 'https://i.pravatar.cc/40?img=33' },
];

// ─── TIENDA / PEDIDOS ────────────────────────────────────────
export const pedidos = [
  { id: '#PED-001', cliente: 'Andrés García',   producto: 'Auriculares Pro X',    fecha: '28/05/2025', monto: 'Rs 12.500', estado: 'entregado'  },
  { id: '#PED-002', cliente: 'Ana Martínez',     producto: 'Teclado Mecánico RGB', fecha: '27/05/2025', monto: 'Rs 8.900',  estado: 'en camino'  },
  { id: '#PED-003', cliente: 'Juan López',       producto: 'Monitor 4K 27"',       fecha: '26/05/2025', monto: 'Rs 89.000', estado: 'procesando' },
  { id: '#PED-004', cliente: 'Laura Fernández',  producto: 'Mochila Tech 30L',     fecha: '25/05/2025', monto: 'Rs 5.500',  estado: 'entregado'  },
  { id: '#PED-005', cliente: 'Carlos Ruiz',      producto: 'Hub USB-C 7 en 1',     fecha: '24/05/2025', monto: 'Rs 4.100',  estado: 'cancelado'  },
  { id: '#PED-006', cliente: 'María Gómez',      producto: 'Silla Ergonómica Z',   fecha: '23/05/2025', monto: 'Rs 45.000', estado: 'entregado'  },
  { id: '#PED-007', cliente: 'Sofía Herrera',    producto: 'Lámpara LED Desk',     fecha: '22/05/2025', monto: 'Rs 2.800',  estado: 'en camino'  },
  { id: '#PED-008', cliente: 'Pablo Mendoza',    producto: 'Mouse Inalámbrico',    fecha: '21/05/2025', monto: 'Rs 3.200',  estado: 'procesando' },
];

// ─── INGRESOS ────────────────────────────────────────────────
export const resumenIngresos = {
  totalMes: 'Rs 284.300',
  totalAnio: 'Rs 1.384.230',
  ticketPromedio: 'Rs 8.640',
  crecimiento: '+12%',
};

export const ingresosCategoria = [
  { categoria: 'Electrónica', monto: 650000, porcentaje: 47 },
  { categoria: 'Mobiliario',  monto: 420000, porcentaje: 30 },
  { categoria: 'Accesorios',  monto: 210000, porcentaje: 15 },
  { categoria: 'Otros',       monto: 104230, porcentaje: 8  },
];

export const transacciones = [
  { id: 'TXN-2201', fecha: '29/05/2025', cliente: 'Andrés García',  monto: 'Rs 12.500', tipo: 'venta',      metodo: 'Tarjeta' },
  { id: 'TXN-2200', fecha: '29/05/2025', cliente: 'María Gómez',    monto: 'Rs 45.000', tipo: 'venta',      metodo: 'Transferencia' },
  { id: 'TXN-2199', fecha: '28/05/2025', cliente: 'Juan López',     monto: 'Rs 89.000', tipo: 'venta',      metodo: 'Tarjeta' },
  { id: 'TXN-2198', fecha: '28/05/2025', cliente: 'Carlos Ruiz',    monto: 'Rs 4.100',  tipo: 'reembolso',  metodo: 'Tarjeta' },
  { id: 'TXN-2197', fecha: '27/05/2025', cliente: 'Sofía Herrera',  monto: 'Rs 2.800',  tipo: 'venta',      metodo: 'Efectivo' },
  { id: 'TXN-2196', fecha: '27/05/2025', cliente: 'Laura Fernández',monto: 'Rs 5.500',  tipo: 'venta',      metodo: 'Transferencia' },
];

// ─── PROMOCIONES ─────────────────────────────────────────────
export const promociones = [
  { id: 1, nombre: 'Descuento Electrónica 20%', tipo: 'descuento',  estado: 'activa',   inicio: '01/05/2025', fin: '31/05/2025', usos: 142, limite: 200, codigo: 'ELEC20' },
  { id: 2, nombre: '2x1 en Accesorios',          tipo: 'bundle',     estado: 'activa',   inicio: '15/05/2025', fin: '15/06/2025', usos: 67,  limite: 100, codigo: '2X1ACC' },
  { id: 3, nombre: 'Envío gratis +Rs 5.000',     tipo: 'envío',      estado: 'activa',   inicio: '01/05/2025', fin: '30/06/2025', usos: 389, limite: null, codigo: 'FREESHIPING' },
  { id: 4, nombre: 'Flash Sale -30% Mobiliario', tipo: 'descuento',  estado: 'pausada',  inicio: '20/05/2025', fin: '22/05/2025', usos: 28,  limite: 50,  codigo: 'FLASH30' },
  { id: 5, nombre: 'Cupón VIP clientes top',     tipo: 'cupón',      estado: 'activa',   inicio: '01/01/2025', fin: '31/12/2025', usos: 14,  limite: 30,  codigo: 'VIP2025' },
  { id: 6, nombre: 'Temporada Invierno 15%',     tipo: 'descuento',  estado: 'borrador', inicio: '01/06/2025', fin: '31/08/2025', usos: 0,   limite: 500, codigo: 'INVIERNO15' },
];
