import { useState } from 'react';
import { months } from '../data/produceData';

const Header = ({ currentMonth, onMonthChange, onToggleView, viewType }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-content">
        <h1>Bay Area Seasonal Produce</h1>
        <div className="header-controls">
          <button 
            className={`view-toggle ${viewType === 'calendar' ? 'active' : ''}`}
            onClick={() => onToggleView('calendar')}
          >
            Calendar View
          </button>
          <button 
            className={`view-toggle ${viewType === 'current' ? 'active' : ''}`}
            onClick={() => onToggleView('current')}
          >
            Current Month
          </button>
          <button 
            className={`view-toggle ${viewType === 'season' ? 'active' : ''}`}
            onClick={() => onToggleView('season')}
          >
            By Season
          </button>
          <div className="month-selector">
            <button 
              className="current-month"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {months[currentMonth - 1]}
            </button>
            {isMenuOpen && (
              <div className="month-dropdown">
                {months.map((month, index) => (
                  <button
                    key={month}
                    className={currentMonth === index + 1 ? 'active' : ''}
                    onClick={() => {
                      onMonthChange(index + 1);
                      setIsMenuOpen(false);
                    }}
                  >
                    {month}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;