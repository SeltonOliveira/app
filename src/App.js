import React, { useState } from 'react';
import './App.css';
//componentes do quiz
import { Quiz, WelcomeScreen } from './quiz'; 
import UserIcon from './UserIcon';

const App = () => {
  const [username, setUsername] = useState(''); // armazenar o nome do usuário
  const [quizStarted, setQuizStarted] = useState(false); // controlador para verificar se o quiz foi iniciado

  const handleUsernameSubmit = (name) => {
    setUsername(name); // Definindo o nome de usuário
    setQuizStarted(true); // Iniciando o quiz
  };

  return (
    <div className="App">
      <header className="App-header" style={{ display: quizStarted ? 'flex' : 'none' }}>
        <div className='icon'><UserIcon /></div>
        <h1>{username}</h1>
      </header>
      <main className="main-content">
        {quizStarted ? (
          <Quiz username={username} /> // Renderiza o quiz quando o quizStarted é verdadeiro
        ) : (
          <WelcomeScreen onUsernameSubmit={handleUsernameSubmit} /> // Renderiza a tela de boas-vindas quando o quizStarted é falso
        )}
      </main>
    </div>
  );
};

export default App;
