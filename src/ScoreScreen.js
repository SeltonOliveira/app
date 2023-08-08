import React from 'react';
import './ScoreScreen.css';

  // Tela de pontuação após o quiz
const ScoreScreen = ({ username, score, perguntas, handleRestartQuiz }) => {
  const errorCount = perguntas.length - score;
  const percentage = (score / perguntas.length) * 100;

  return (
    <div className='main-score'>
    <div className="score-screen">
      <h2>{`score`}</h2>
      <div className='acpt-err-container'>
        <div className='acertos-container'>
          <span>Acertos</span>
        </div>
        <span className='result'>{`${score}`}</span>
      </div>
      <div className='acpt-err-container'>
        <div className='erros-container'>
          <span>Erros</span>
        </div>
        <span className='result'>{`${errorCount}`}</span>
      </div>
      <div className='percent-main'>
        <div className='percent-container'>
          <span>{`Porcentagem`}</span>
          <span className='result-percent'>{`${percentage}%`}</span>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ScoreScreen;
