import { useState } from 'react';
import DijkstraFormStyles from './DijkstraFormStyles';
import { TableComponent } from './TableComponent';

const DijkstraForm = () => {
  const [origen, setOrigen] = useState('');
  const [destino, setDestino] = useState('');
  const [resultado, setResultado] = useState(null);
  const [id1, setid1] = useState(null);
  const [lugar1, setlugar1] = useState(null);
  const [beneficio_ambiental1, setbeneficio_ambiental1] = useState(null);
  const [beneficio_economico1, setbeneficio_economico1] = useState(null);
  const [beneficio_social1, setbeneficio_social1] = useState(null);
  const [comentarios1, setcomentarios1] = useState(null);
  const [fecha_aterrizaje1, setfecha_aterrizaje1] = useState(null);
  const [hora_aterrizaje1, sethora_aterrizaje1] = useState(null);
  const [nombre_ciudad1, setnombre_ciudad1] = useState(null);

  const [id2, setid2] = useState(null);
  const [lugar2, setlugar2] = useState(null);
  const [beneficio_ambiental2, setbeneficio_ambiental2] = useState(null);
  const [beneficio_economico2, setbeneficio_economico2] = useState(null);
  const [beneficio_social2, setbeneficio_social2] = useState(null);
  const [comentarios2, setcomentarios2] = useState(null);
  const [fecha_aterrizaje2, setfecha_aterrizaje2] = useState(null);
  const [hora_aterrizaje2, sethora_aterrizaje2] = useState(null);
  const [nombre_ciudad2, setnombre_ciudad2] = useState(null);

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
      const response2 = await fetch('http://localhost:8080/api/aterrizaje/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ origen:origen,destino:destino }),
      });
      
      const {partida,llegada} = await response2.json();
      const inicio = partida[0];
      const final = llegada[0];
      
      const {id,lugar,beneficio_ambiental,beneficio_economico,beneficio_social,comentarios,fecha_aterrizaje,hora_aterrizaje,nombre_ciudad}= inicio;
      setid1(id);
      setlugar1(lugar);
      setbeneficio_ambiental1(beneficio_ambiental);
      setbeneficio_economico1(beneficio_economico);
      setbeneficio_social1(beneficio_social);
      setcomentarios1(comentarios);
      setfecha_aterrizaje1(fecha_aterrizaje);
      sethora_aterrizaje1(hora_aterrizaje);
      setnombre_ciudad1(nombre_ciudad);

      if(inicio)
      {
        const {id,lugar,beneficio_ambiental,beneficio_economico,beneficio_social,comentarios,fecha_aterrizaje,hora_aterrizaje,nombre_ciudad}= final;
        setid2(id);
        setlugar2(lugar);
        setbeneficio_ambiental2(beneficio_ambiental);
        setbeneficio_economico2(beneficio_economico);
        setbeneficio_social2(beneficio_social);
        setcomentarios2(comentarios);
        setfecha_aterrizaje2(fecha_aterrizaje);
        sethora_aterrizaje2(hora_aterrizaje);
        setnombre_ciudad2(nombre_ciudad);
      }
      // if(true)
      // {
      //   const response3 = await fetch('http://localhost:8080/api/aterrizaje/', {
      //     method: 'POST',
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //     body: JSON.stringify({nombre_ciudad:destino}),
      //   });
        
      //   const data3 = await response3.json();
      //   const {id,lugar,beneficio_ambiental,beneficio_economico,beneficio_social,comentarios,fecha_aterrizaje,hora_aterrizaje,nombre_ciudad}= data3[0];
      //   setid2(id);
      //   setlugar2(lugar);
      //   setbeneficio_ambiental2(beneficio_ambiental);
      //   setbeneficio_economico2(beneficio_economico);
      //   setbeneficio_social2(beneficio_social);
      //   setfecha_aterrizaje2(fecha_aterrizaje);
      //   sethora_aterrizaje2(hora_aterrizaje);
      //   setnombre_ciudad2(nombre_ciudad);
      // }
      //Destino
      



    } catch (error) {
      console.error('Error al obtener la respuesta del servidor', error);
    }
  };

  return (
    <div>
      <form id="formulario" onSubmit={handleSubmit} style={DijkstraFormStyles.form}>
        <h3>Mostrar ruta con mayor beneficio</h3>
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
          <p id="parrafoDijkstra"style={DijkstraFormStyles.resultText}>Ruta minima calculada en kilometros: {resultado} km</p>
          <div className="tableContainer">
            <h2>Documentacion de Destino</h2>
            <table border="1">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Lugar</th>
                  <th>Beneficio Ambiental</th>
                  <th>Beneficio Económico</th>
                  <th>Beneficio Social</th>
                  <th>Comentarios</th>
                  <th>Fecha de Aterrizaje</th>
                  <th>Hora de Aterrizaje</th>
                  <th>Nombre de la Ciudad</th>
                </tr>
              </thead>
              <tbody>
                  <tr>
                    <td>{id1}</td>
                    <td>{lugar1}</td>
                    <td>{beneficio_ambiental1}</td>
                    <td>{beneficio_economico1}</td>
                    <td>{beneficio_social1}</td>
                    <td>{comentarios1}</td>
                    <td>{fecha_aterrizaje1}</td>
                    <td>{hora_aterrizaje1}</td>
                    <td>{nombre_ciudad1}</td>
                  </tr>
              </tbody>
            </table>
          </div>
          <div className="tableContainer">
            <h2>Documentacion de Destino</h2>
            <table border="1">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Lugar</th>
                  <th>Beneficio Ambiental</th>
                  <th>Beneficio Económico</th>
                  <th>Beneficio Social</th>
                  <th>Comentarios</th>
                  <th>Fecha de Aterrizaje</th>
                  <th>Hora de Aterrizaje</th>
                  <th>Nombre de la Ciudad</th>
                </tr>
              </thead>
              <tbody>
                  <tr>
                    <td>{id2}</td>
                    <td>{lugar2}</td>
                    <td>{beneficio_ambiental2}</td>
                    <td>{beneficio_economico2}</td>
                    <td>{beneficio_social2}</td>
                    <td>{comentarios2}</td>
                    <td>{fecha_aterrizaje2}</td>
                    <td>{hora_aterrizaje2}</td>
                    <td>{nombre_ciudad2}</td>
                  </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default DijkstraForm;
