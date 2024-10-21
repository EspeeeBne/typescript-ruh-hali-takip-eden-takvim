import React from 'react';

interface MoodJournalProps {
  moodEntries: { mood: string; date: string; note: string }[];
  deleteMoodEntry: (date: string) => void;
}

const MoodJournal: React.FC<MoodJournalProps> = ({ moodEntries, deleteMoodEntry }) => {
  return (
    <div className="mood-journal">
      {moodEntries.map((entry) => (
        <div key={entry.date} className="journal-entry">
          <p><strong>Tarih:</strong> {entry.date}</p>
          <p><strong>Ruh Hali:</strong> {entry.mood}</p>
          <p><strong>Not:</strong> {entry.note}</p>
          <button onClick={() => deleteMoodEntry(entry.date)}>Sil</button>
        </div>
      ))}
    </div>
  );
};

export default MoodJournal;
