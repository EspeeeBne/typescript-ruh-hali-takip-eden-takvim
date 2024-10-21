import React from 'react';

interface MoodStatisticsProps {
  moodEntries: { mood: string; date: string; note: string }[];
}

const MoodStatistics: React.FC<MoodStatisticsProps> = ({ moodEntries }) => {
  const totalEntries = moodEntries.length;
  const moodCounts = moodEntries.reduce((acc, entry) => {
    acc[entry.mood] = (acc[entry.mood] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="mood-statistics">
      <h2>Ruh Hali İstatistikleri</h2>
      <p>Toplam Giriş Sayısı: {totalEntries}</p>
      {Object.keys(moodCounts).map((mood) => (
        <p key={mood}>{mood}: {moodCounts[mood]}</p>
      ))}
    </div>
  );
};

export default MoodStatistics;