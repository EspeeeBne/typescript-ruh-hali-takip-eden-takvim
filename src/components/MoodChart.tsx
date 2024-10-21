import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

interface MoodChartProps {
  moodEntries: { mood: string; date: string; note: string }[];
}

const MoodChart: React.FC<MoodChartProps> = ({ moodEntries }) => {
  // Ruh hali verilerini gruplandırarak analiz ediyoruz
  const moodData = [
    { name: 'Mutlu', value: moodEntries.filter((entry) => entry.mood === 'mutlu').length },
    { name: 'Üzgün', value: moodEntries.filter((entry) => entry.mood === 'üzgün').length },
    { name: 'Stresli', value: moodEntries.filter((entry) => entry.mood === 'stresli').length },
    { name: 'Enerjik', value: moodEntries.filter((entry) => entry.mood === 'enerjik').length },
  ];

  const COLORS = ['#0088FE', '#FFBB28', '#FF8042', '#00C49F'];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
      <PieChart width={400} height={400}>
        <Pie
          data={moodData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          label
        >
          {moodData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default MoodChart;
