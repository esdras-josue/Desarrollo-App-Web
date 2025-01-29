import React from 'react';
import PersonComponent from './components/PersonComponent.tsx';
import { Person } from './models/Person';
import './App.css';

function App() {
  const personas: Person[] = [
    { nombre: 'Esdras', ocupacion: 'Developer', pais: 'Honduras' },
    { nombre: 'Kevin', ocupacion: 'Footballer', pais: 'Canada' },
    { nombre: 'Isaac', ocupacion: 'Entrepreneur', pais: 'USA' }
  ];

  return (
    <div className="app">
      <h1>Cards Information</h1>
      <div className="card-container">
        {personas.map((persona) => (
          <PersonComponent
            nombre={persona.nombre}
            ocupacion={persona.ocupacion}
            pais={persona.pais}
          />
        ))}
      </div>
    </div>
  );
}

export default App;