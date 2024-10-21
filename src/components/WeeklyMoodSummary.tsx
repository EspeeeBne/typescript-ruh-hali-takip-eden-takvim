import React from 'react';

interface WeeklyMoodSummaryProps {
  moodEntries: { mood: string; date: string; note: string }[];
}

const WeeklyMoodSummary: React.FC<WeeklyMoodSummaryProps> = ({ moodEntries }) => {
  const today = new Date();
  const weekAgo = new Date();
  weekAgo.setDate(today.getDate() - 7);

  const weeklyEntries = moodEntries.filter((entry) => {
    const entryDate = new Date(entry.date);
    return entryDate >= weekAgo && entryDate <= today;
  });

  const latestEntry = weeklyEntries[weeklyEntries.length - 1];
  const message = latestEntry ? `Bugün ${latestEntry.mood} hissediyorsunuz.` : 'Bu hafta henüz bir ruh hali girişi yapılmadı.';

  return (
    <div className="weekly-summary">
      <h2>Haftalık Ruh Hali Özeti</h2>
      <p>{message}</p>
    </div>
  );
};

export default WeeklyMoodSummary;
