
export const TableJourneys=()=>{
  return (
    <div className="table-container">
      <table className="my-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Edad</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Usuario 1</td>
            <td>25</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Usuario 2</td>
            <td>30</td>
          </tr>
          {/* Agrega más filas según sea necesario */}
        </tbody>
      </table>
    </div>
  );
}