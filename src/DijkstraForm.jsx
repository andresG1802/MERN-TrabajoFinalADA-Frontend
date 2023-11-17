import { useState } from 'react';
import DijkstraFormStyles from './DijkstraFormStyles';

const DijkstraForm = () => {
  const [origen, setOrigen] = useState('');
  const [destino, setDestino] = useState('');
  const [resultado, setResultado] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch('http://localhost:8080/api/dijkstra/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ origen:origen, destino:destino }),
      });
      const data = await response.json();
      setResultado(data.caminoMasCorto);
    } catch (error) {
      console.error('Error al obtener la respuesta del servidor', error);
    }
  };

  return (
    <div style={DijkstraFormStyles.container}>
      <form id="formulario" onSubmit={handleSubmit} style={DijkstraFormStyles.form}>
        <h3>Calular - Ruta</h3>
        <label id="labelDisjktraForm1"style={DijkstraFormStyles.label}>
          Origen:
          <input id="formulario"
            type="text"
            value={origen}
            onChange={(e) => setOrigen(e.target.value)}
            style={DijkstraFormStyles.input}
          />
        </label>
        <label id="labelDisjktraForm2" style={DijkstraFormStyles.label}>
          Destino:
          <input
            type="text"
            value={destino}
            onChange={(e) => setDestino(e.target.value)}
            style={DijkstraFormStyles.input}
          />
        </label>
        <button id ="botonDijkstra" type="submit" style={DijkstraFormStyles.button}>
          Calcular Camino
        </button>
      </form>

      {resultado !== null && (
        <div style={DijkstraFormStyles.resultContainer}>
          <p id="parrafoDijkstra"style={DijkstraFormStyles.resultText}>El camino más corto es: {resultado}</p>
        </div>
      )}
    </div>
  );
};

export default DijkstraForm;
