import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import MonthView from './components/MonthView'
import SeasonView from './components/SeasonView'
import CalendarView from './components/CalendarView'

function App() {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);
  const [viewType, setViewType] = useState('current');

  // Register service worker for PWA
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then(registration => {
            console.log('Service Worker registered: ', registration);
          })
          .catch(error => {
            console.log('Service Worker registration failed: ', error);
          });
      });
    }
  }, []);

  const handleMonthChange = (month) => {
    setCurrentMonth(month);
    if (viewType !== 'current') {
      setViewType('current');
    }
  };

  const handleToggleView = (view) => {
    setViewType(view);
  };

  return (
    <div className="app">
      <Header 
        currentMonth={currentMonth} 
        onMonthChange={handleMonthChange} 
        onToggleView={handleToggleView}
        viewType={viewType}
      />
      
      <main>
        {viewType === 'current' && <MonthView month={currentMonth} />}
        {viewType === 'season' && <SeasonView />}
        {viewType === 'calendar' && <CalendarView onMonthChange={handleMonthChange} />}
      </main>
      
      <footer>
        <p>Data sourced from <a href="https://foodwise.org/eat-seasonally/seasonality-charts/" target="_blank" rel="noopener noreferrer">Foodwise.org</a></p>
        <p>Created for the San Francisco Bay Area</p>
      </footer>
    </div>
  )
}

export default App
