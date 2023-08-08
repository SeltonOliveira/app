import React from 'react';
import './QuestionScreen.css';

// QuestionScreen para exibir uma pergunta e opções de resposta
const QuestionScreen = ({ currentQuestion, perguntas, handleAnswerSubmit }) => {
  return (
    <div className='fatherScreen'>
      <div className="question-screen">
        {/* Exibir a pergunta atual */}
        <h2>{perguntas[currentQuestion].pergunta}</h2>
        <ul>
          {/* Opção de resposta correta */}
          <li onClick={() => handleAnswerSubmit(perguntas[currentQuestion].resposta_correta)}>
            {perguntas[currentQuestion].resposta_correta}
          </li>
          {/* Opção de resposta errada 1 */}
          <li onClick={() => handleAnswerSubmit(perguntas[currentQuestion].resposta_errada1)}>
            {perguntas[currentQuestion].resposta_errada1}
          </li>
          {/* Opção de resposta errada 2 */}
          <li onClick={() => handleAnswerSubmit(perguntas[currentQuestion].resposta_errada2)}>
            {perguntas[currentQuestion].resposta_errada2}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default QuestionScreen;
