import React, { useState } from 'react';

interface MoodEntryFormProps {
  addMoodEntry: (mood: { mood: string; date: string; note: string }) => void;
}

const MoodEntryForm: React.FC<MoodEntryFormProps> = ({ addMoodEntry }) => {
  const [mood, setMood] = useState('mutlu');
  const [date, setDate] = useState('');
  const [note, setNote] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addMoodEntry({ mood, date, note });
    setMood('mutlu');
    setDate('');
    setNote('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="mood">Ruh Hali:</label>
        <select
          id="mood"
          value={mood}
          onChange={(e) => setMood(e.target.value)}
          aria-label="Ruh Hali Seçimi"
        >
          <option value="mutlu">Mutlu</option>
          <option value="üzgün">Üzgün</option>
          <option value="stresli">Stresli</option>
          <option value="enerjik">Enerjik</option>
        </select>
      </div>
      <div>
        <label htmlFor="date">Tarih:</label>
        <input
          id="date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          aria-label="Tarih Seçimi"
        />
      </div>
      <div>
        <label htmlFor="note">Not:</label>
        <textarea
          id="note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Bugün nasıldı?"
          aria-label="Gün Notu"
        />
      </div>
      <button type="submit">Kaydet</button>
    </form>
  );
};

export default MoodEntryForm;
