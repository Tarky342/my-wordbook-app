import React, { useState, useEffect } from 'react';
import './index.css';
import { WordCard } from './WordCard';
import { AddWordForm } from './AddWordForm';
import QuizMode from './QuizMode';

export default function App() {
  const [words, setWords] = useState(() => {
    const saved = localStorage.getItem('words');
    return saved ? JSON.parse(saved) : [];
  });

  const [showQuiz, setShowQuiz] = useState(false);

  useEffect(() => {
    localStorage.setItem('words', JSON.stringify(words));
  }, [words]);

  const addWord = (word) => {
    setWords([...words, word]);
  };

  const toggleFavorite = (index) => {
    const newWords = [...words];
    newWords[index].favorite = !newWords[index].favorite;
    setWords(newWords);
  };

  const toggleLearned = (index) => {
    const newWords = [...words];
    newWords[index].learned = !newWords[index].learned;
    setWords(newWords);
  };

  return (
    <div className="container">
      <h1>🌸 英単語帳アプリ 🌸</h1>

      <div style={{ marginBottom: '1rem' }}>
        <button onClick={() => setShowQuiz(false)} style={{ marginRight: '10px' }}>
          📘 単語帳モード
        </button>
        <button onClick={() => setShowQuiz(true)}>
          📝 クイズモード
        </button>
      </div>

      {showQuiz ? (
        <QuizMode />
      ) : (
        <>
          <AddWordForm addWord={addWord} />
          {words.map((word, i) => (
            <WordCard
              key={i}
              word={word}
              onToggleFavorite={() => toggleFavorite(i)}
              onToggleLearned={() => toggleLearned(i)}
            />
          ))}
        </>
      )}
    </div>
  );
}
