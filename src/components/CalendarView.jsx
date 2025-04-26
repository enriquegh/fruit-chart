import { useEffect, useState, useRef } from 'react';
import { months, produceData } from '../data/produceData';

const CalendarView = ({ onMonthChange }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [produceType, setProduceType] = useState('fruits');
  const detailRef = useRef(null);

  const handleItemSelect = (item) => {
    setSelectedItem(item);
    // On mobile, show a modal instead of scrolling to top
    if (window.innerWidth <= 768) {
      document.body.style.overflow = 'hidden';
    }
  };

  const handleCloseDetail = () => {
    setSelectedItem(null);
    document.body.style.overflow = '';
  };

  return (
    <div className="calendar-view">
      <div className="produce-filter">
        <button 
          className={produceType === 'fruits' ? 'active' : ''}
          onClick={() => setProduceType('fruits')}
        >
          Fruits
        </button>
        <button 
          className={produceType === 'vegetables' ? 'active' : ''}
          onClick={() => setProduceType('vegetables')}
        >
          Vegetables
        </button>
      </div>

      {selectedItem && (
        <div className="item-detail-overlay">
          <div className="item-detail" ref={detailRef}>
            <button className="close-button" onClick={handleCloseDetail}>
              &times;
            </button>
            <div className="item-image-container">
              <img 
                src={selectedItem.image} 
                alt={selectedItem.name} 
                onError={(e) => e.target.src = `/images/${produceType === 'fruits' ? 'fruit' : 'vegetable'}-placeholder.jpg`}
              />
            </div>
            <h3>{selectedItem.name}</h3>
            <p>{selectedItem.description}</p>
            <div className="season-months">
              <h4>Available in:</h4>
              <div className="months-grid">
                {months.map((month, index) => (
                  <span 
                    key={month} 
                    className={selectedItem.seasons.includes(index + 1) ? 'in-season' : 'off-season'}
                    onClick={() => selectedItem.seasons.includes(index + 1) && onMonthChange(index + 1)}
                  >
                    {month.substring(0, 3)}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="items-grid">
        {produceData[produceType].map(item => (
          <div 
            key={item.name} 
            className="calendar-item"
            onClick={() => handleItemSelect(item)}
          >
            <div className="item-image-container">
              <img 
                src={item.image} 
                alt={item.name} 
                onError={(e) => e.target.src = `/images/${produceType === 'fruits' ? 'fruit' : 'vegetable'}-placeholder.jpg`}
              />
            </div>
            <div className="item-name">{item.name}</div>
            <div className="availability-strip">
              {months.map((_, index) => (
                <span 
                  key={index} 
                  className={item.seasons.includes(index + 1) ? 'available' : ''}
                  style={{ width: `${100/12}%` }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;