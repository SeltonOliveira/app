import React, { useState } from 'react';
import './quiz.css';
import QuestionScreen from './QuestionScreen';
import ScoreScreen from './ScoreScreen';


// Componente para exibir a tela de acesso e capturar o nome do usuário
const WelcomeScreen = ({ onUsernameSubmit }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onUsernameSubmit(username);
  };

  return (
    <div className="welcome-screen">
      <form onSubmit={handleSubmit}>
        <h2 class="name">Nome</h2>
        <input
          type="text" maxlength="10"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <button class="btn-acess"type="submit">acessar</button>
      </form>
    </div>
  );
};

  // Componente para o quiz em si
const Quiz = ({ username }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [ setErrorCount] = useState(0);

    // Array de perguntas e respostas
  const perguntas = [
    {
      id: 1,
      pergunta: 'O que significa a sigla CPU?',
      // ... Outras opções de resposta ...
      resposta_correta: 'Central Processing Unit',
      resposta_errada1: 'Computer Processing Unit',
      resposta_errada2: 'Core Processing Unit',
    },
    {
      id: 2,
      pergunta: 'Qual das seguintes empresas é conhecida por seus dispositivos móveis, como o iPhone e o iPad?',
      // ... Outras opções de resposta ...
      resposta_correta: 'Apple',
      resposta_errada1: 'Samsung',
      resposta_errada2: 'Microsoft',
    },
    {
      id: 3,
      pergunta: 'O que é um firewall em relação à segurança cibernética?',
      // ... Outras opções de resposta ...
      resposta_correta: 'Uma barreira de segurança que monitora e controla o tráfego de rede.',
      resposta_errada1: 'Um dispositivo que protege contra sobrecargas de energia.',
      resposta_errada2: 'Um programa que verifica e remove vírus de um computador.',
    },
    {
      id: 4,
      pergunta: 'O que é um loop em programação?',
      // ... Outras opções de resposta ...
      resposta_correta: 'Uma sequência de instruções que é executada repetidamente.',
      resposta_errada1: 'Um erro de sintaxe no código.',
      resposta_errada2: 'Uma função que retorna um valor específico.',
    },
    {
      id: 5,
      pergunta: 'O que significa a sigla HTML em termos de programação para a web?',
      // ... Outras opções de resposta ...
      resposta_correta: 'HyperText Markup Language',
      resposta_errada1: 'Home Tool Markup Language',
      resposta_errada2: 'Hyperlink and Text Markup Language',
    },
    // Adicionar mais perguntas aqui...
  ];

  // Envio de respostas
  const handleAnswerSubmit = (selectedAnswer) => {
    const currentPergunta = perguntas[currentQuestion];
    if (currentPergunta.resposta_correta === selectedAnswer) {
      setScore((prevScore) => prevScore + 1);
    } else {
      setErrorCount((prevErrorCount) => prevErrorCount + 1);
    }

    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  };

  // Função para reiniciar o quiz
  // Caso necessário adicionar um botão de reset
  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setErrorCount(0);
  };

  return (
    <div className="quiz-container">
      {currentQuestion < perguntas.length ? (
        <QuestionScreen
          currentQuestion={currentQuestion}
          perguntas={perguntas}
          handleAnswerSubmit={handleAnswerSubmit}
        />
      ) : (
        <ScoreScreen
          username={username}
          score={score}
          perguntas={perguntas}
          handleRestartQuiz={handleRestartQuiz}
        />
      )}
    </div>
  );
};

export {Quiz, WelcomeScreen};