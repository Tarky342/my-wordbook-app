import React from 'react';

export default function QuizQuestion({ word, options, selected, onSelect }) {
  const getButtonStyle = (option) => {
    if (!selected) return styles.default;
    if (option.meaning === word.meaning) return styles.correct;
    if (option === selected) return styles.incorrect;
    return styles.default;
  };

  return (
    <div>
      <h3>{word.english}</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {options.map((opt, i) => (
          <li key={i}>
            <button
              onClick={() => onSelect(opt)}
              style={{ ...styles.button, ...getButtonStyle(opt) }}
              disabled={!!selected}
            >
              {opt.meaning}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  button: {
    padding: '10px',
    margin: '5px 0',
    width: '100%',
    border: '1px solid #ccc',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  default: { background: '#eee' },
  correct: { background: '#a5d6a7' },
  incorrect: { background: '#ef9a9a' },
};
