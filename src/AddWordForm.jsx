// AddWordForm.jsx
import React, { useState } from 'react';

export function AddWordForm({ addWord }) {
  const [english, setEnglish] = useState('');
  const [meaning, setMeaning] = useState('');
  const [example, setExample] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!english || !meaning) return;

    addWord({ english, meaning, example, favorite: false, learned: false });
    setEnglish('');
    setMeaning('');
    setExample('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="英単語"
        value={english}
        onChange={(e) => setEnglish(e.target.value)}
      />
      <input
        placeholder="意味"
        value={meaning}
        onChange={(e) => setMeaning(e.target.value)}
      />
      <input
        placeholder="例文（任意）"
        value={example}
        onChange={(e) => setExample(e.target.value)}
      />
      <button>追加</button>
    </form>
  );
}
