import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

interface MoodCalendarProps {
  moodEntries: { mood: string; date: string; note: string }[];
}

const MoodCalendar: React.FC<MoodCalendarProps> = ({ moodEntries }) => {
  const tileContent = ({ date, view }: { date: Date; view: string }) => {
    if (view === 'month') {
      const entry = moodEntries.find((moodEntry) => new Date(moodEntry.date).toDateString() === date.toDateString());
      if (entry) {
        return <div className={`mood-indicator ${entry.mood}`}></div>;
      }
    }
    return null;
  };

  return (
    <div className="mood-calendar">
      <h2>Ruh Hali Takvimi</h2>
      <Calendar tileContent={tileContent} />
    </div>
  );
};

export default MoodCalendar;