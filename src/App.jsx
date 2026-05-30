import { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Encabezado from './components/Encabezado';
import Dashboard from './components/Dashboard';

function App() {
  const [seccionActiva, setSeccionActiva] = useState('inicio');

  return (
    <div className="app">
      <Encabezado />
      <div className="app__body">
        <Sidebar seccionActiva={seccionActiva} onNavegar={setSeccionActiva} />
        <Dashboard seccion={seccionActiva} />
      </div>
    </div>
  );
}

export default App;
