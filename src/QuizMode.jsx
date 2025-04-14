// QuizMode.jsx
import React, { useState, useEffect } from 'react';
import QuizQuestion from './QuizQuestion';
import QuizResult from './QuizResult';

export default function QuizMode() {
    const [questions, setQuestions] = useState([]);
    const [current, setCurrent] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [selected, setSelected] = useState(null);
  
    useEffect(() => {
      const data = JSON.parse(localStorage.getItem('words')) || [];
      const filtered = data.filter(w => w.meaning);
      const shuffled = [...filtered].sort(() => 0.5 - Math.random()).slice(0, 5);
      setQuestions(shuffled);
    }, []);
  
    const handleSelect = (option) => {
      if (selected) return; // 2回選べないように
      setSelected(option);
      const isCorrect = option.meaning === questions[current].meaning;
      if (isCorrect) setScore(score + 1);
  
      setTimeout(() => {
        if (current + 1 === questions.length) {
          setShowResult(true);
        } else {
          setCurrent(current + 1);
          setSelected(null); // 次の問題のためにリセット
        }
      }, 1000);
    };
  
    const handleRetry = () => {
      window.location.reload();
    };
  
    if (questions.length === 0) return <p>読み込み中ですえ…</p>;
  
    return (
      <div className="container">
        <h2>クイズモード：{current + 1} / {questions.length}</h2>
        {showResult ? (
          <QuizResult score={score} total={questions.length} onRetry={handleRetry} />
        ) : (
          <QuizQuestion
            word={questions[current]}
            options={generateOptions(questions, questions[current])}
            selected={selected}
            onSelect={handleSelect}
          />
        )}
      </div>
    );
  }
  

function generateOptions(all, correct) {
  const others = all.filter(w => w.english !== correct.english);
  const choices = [correct, ...others.slice(0, 3)];
  return choices.sort(() => 0.5 - Math.random());
}
