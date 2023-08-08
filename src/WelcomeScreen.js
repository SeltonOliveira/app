import React, { useState } from 'react';
import './quiz.css';

  // capturando o nome do usuário
const WelcomeScreen = ({ onUsernameSubmit }) => {
  const [username, setUsername] = useState('');

  // envio do nome de usuário
  const handleSubmit = (event) => {
    event.preventDefault();
    onUsernameSubmit(username);
  };

  return (
    <div className="welcome-screen">
      <form onSubmit={handleSubmit}>
        <h2 className="name">Nome</h2>
        <input
          type="text"
          maxLength="10"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <button className="btn-acess" type="submit">Acessar</button>
      </form>
    </div>
  );
};

export default WelcomeScreen;
