import React, { useState } from 'react';

export function WordCard({ word, onToggleFavorite, onToggleLearned }) {
  const [showMeaning, setShowMeaning] = useState(false);

  return (
    <div className="word-card">
      <h2 onClick={() => setShowMeaning(!showMeaning)}>{word.english}</h2>
      {showMeaning && (
        <div>
          <p>{word.meaning}</p>
          {word.example && <p><em>例: {word.example}</em></p>}
        </div>
      )}
      <div className="actions">
        <button onClick={onToggleFavorite}>
          {word.favorite ? '💖お気に入り' : '🤍お気に入り'}
        </button>
        <button onClick={onToggleLearned}>
          {word.learned ? '✅覚えた' : '📘未学習'}
        </button>
      </div>
    </div>
  );
}
