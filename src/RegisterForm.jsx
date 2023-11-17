import React, { useState } from 'react';

const RegisterForm = ({ onRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/usuarios/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ correo_electronico:email, contraseña:password }),
      });
      
      const data = await response.json();
      onRegister(data); // Envía los datos al componente principal
    } catch (error) {
      console.error('Error al registrarse:', error);
    }
  };

  return (
    <form onSubmit={handleRegister}>
      {/* <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label> */}
      <label>
        Correo:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Contraseña:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button type="submit">Registrarse</button>
    </form>
  );
};

export default RegisterForm;
