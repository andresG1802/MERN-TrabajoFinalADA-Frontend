import React, { useState } from 'react';
const LoginForm = ({ onLogin }) => {
  
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ correo_electronico:correo, contraseña:password }),
      });

      const data = await response.json();
      //Si la respuesta esta bien
      if(response.ok)
      {
        //Pasas
        onLogin(data); // Envía los datos al componente principal
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  };
  return (
    <form onSubmit={handleLogin}>
      <h1>Login</h1>
      <label>
        Correo:
        <input type="text" value={correo} onChange={(e) => setCorreo(e.target.value)} />
      </label>
      <label>
        Contraseña:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button type="submit">Ingresar</button>
    </form>
  );
};

export default LoginForm;
