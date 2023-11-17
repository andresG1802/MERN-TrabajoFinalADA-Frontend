import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import { TableJourneys } from './TableJourneys';

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = (userData) => {
    // Aquí puedes manejar la lógica después de iniciar sesión
    setLoggedInUser(userData);
  };

  const handleRegister = (userData) => {
    // Aquí puedes manejar la lógica después de registrarse
    setLoggedInUser(userData);
  };

  return (
    <div>
      {loggedInUser ? (
        <div>
          <TableJourneys></TableJourneys>
        </div>
      ) : (
        <div>
          <LoginForm onLogin={handleLogin} />
          <RegisterForm onRegister={handleRegister} />
        </div>
      )}
    </div>
  );
};

export default App;
