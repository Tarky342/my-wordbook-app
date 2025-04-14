// QuizResult.jsx
import React from 'react';

export default function QuizResult({ score, total, onRetry }) {
  return (
    <div>
      <h2>結果発表 🎉</h2>
      <p>{score} / {total} 正解でした！</p>
      <button onClick={onRetry}>もう一回挑戦する</button>
    </div>
  );
}
