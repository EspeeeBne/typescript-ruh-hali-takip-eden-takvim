import React, { useState, useEffect } from 'react';
import MoodEntryForm from './components/MoodEntryForm';
import MoodChart from './components/MoodChart';
import './App.css';
import WeeklyMoodSummary from './components/WeeklyMoodSummary';
import MoodCalendar from './components/MoodCalendar';
import MoodStatistics from './components/MoodStatistics';
import MoodTrends from './components/MoodTrends';
import MoodJournal from './components/MoodJournal';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

interface MoodEntry {
  mood: string;
  date: string;
  note: string;
}

const App: React.FC = () => {
  const [moodEntries, setMoodEntries] = useState<MoodEntry[]>(() => {
    try {
      const data = localStorage.getItem('moodEntries');
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('Error reading moodEntries from localStorage:', error);
      return [];
    }
  });

  const [selectedTab, setSelectedTab] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('moodEntries', JSON.stringify(moodEntries));
    } catch (error) {
      console.error('Error writing moodEntries to localStorage:', error);
    }
  }, [moodEntries]);

  useEffect(() => {
    document.body.className = isDarkMode ? 'dark-mode' : '';
  }, [isDarkMode]);

  const addMoodEntry = (newEntry: MoodEntry) => {
    setMoodEntries([...moodEntries, newEntry]);
  };

  const deleteMoodEntry = (date: string) => {
    setMoodEntries(moodEntries.filter((entry) => entry.date !== date));
  };

  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setSelectedTab(newValue);
  };

  const toggleDarkMode = (checked: boolean) => {
    setIsDarkMode(checked);
  };

  return (
    <div className="App">
      <header className="app-header">
        <DarkModeSwitch
          checked={isDarkMode}
          onChange={toggleDarkMode}
          size={30}
          style={{ position: 'absolute', top: '10px', right: '10px' }}
        />
        <h1 className="app-title">Ruh Durumu Takipçisi</h1>
      </header>
      <MoodEntryForm addMoodEntry={addMoodEntry} />

      <Tabs
        value={selectedTab}
        onChange={handleTabChange}
        centered
        TabIndicatorProps={{
          style: {
            backgroundColor: 'var(--tab-selected-color)', // Dark mode için uygun renk
          },
        }}
        style={{
          backgroundColor: 'var(--tab-background-color)', // Tablar için dark mode uyumlu arkaplan
        }}
      >
        <Tab label="Haftalık Özet" style={{ color: 'var(--tab-text-color)' }} />
        <Tab label="İstatistikler" style={{ color: 'var(--tab-text-color)' }} />
        <Tab label="Ruh Durumu Analizi" style={{ color: 'var(--tab-text-color)' }} />
        <Tab label="Takvim" style={{ color: 'var(--tab-text-color)' }} />
        <Tab label="Eğilimler" style={{ color: 'var(--tab-text-color)' }} />
        <Tab label="Günlük" style={{ color: 'var(--tab-text-color)' }} />
      </Tabs>

      {selectedTab === 0 && <WeeklyMoodSummary moodEntries={moodEntries} />}
      {selectedTab === 1 && <MoodStatistics moodEntries={moodEntries} />}
      {selectedTab === 2 && <MoodChart moodEntries={moodEntries} />}
      {selectedTab === 3 && <MoodCalendar moodEntries={moodEntries} />}
      {selectedTab === 4 && <MoodTrends moodEntries={moodEntries} />}
      {selectedTab === 5 && <MoodJournal moodEntries={moodEntries} deleteMoodEntry={deleteMoodEntry} />}
    </div>
  );
};

export default App;
