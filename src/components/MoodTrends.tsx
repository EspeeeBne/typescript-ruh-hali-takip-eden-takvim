import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface MoodTrendsProps {
  moodEntries: { mood: string; date: string; note: string }[];
}

const MoodTrends: React.FC<MoodTrendsProps> = ({ moodEntries }) => {
  const data = moodEntries.map((entry) => ({
    date: entry.date,
    mood: entry.mood,
  }));

  return (
    <div className="mood-trends">
      <h2>Ruh Hali Eğilimleri</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="mood" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MoodTrends;