import React from 'react'

export const TableComponent = () => {
    
    const data = [
        {
          id: 1,
          lugar: "Aeropuerto Internacional Jorge Chávez",
          beneficio_ambiental: "Reducción de emisiones de carbono",
          beneficio_economico: "Incremento en el turismo local",
          beneficio_social: "Mejora en empleo local",
          comentarios: "Aterrizaje exitoso",
          fecha_aterrizaje: "2023-01-10",
          hora_aterrizaje: "12:30:00",
          nombre_ciudad: "Lima",
          viaje_id: 1
        }
        // Agrega más datos si es necesario
      ];
    
    return (
        <div>
          <h2>Tabla de Aterrizajes</h2>
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
                <th>ID de Viaje</th>
              </tr>
            </thead>
            <tbody>
              {data.map(item => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.lugar}</td>
                  <td>{item.beneficio_ambiental}</td>
                  <td>{item.beneficio_economico}</td>
                  <td>{item.beneficio_social}</td>
                  <td>{item.comentarios}</td>
                  <td>{item.fecha_aterrizaje}</td>
                  <td>{item.hora_aterrizaje}</td>
                  <td>{item.nombre_ciudad}</td>
                  <td>{item.viaje_id}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
}
