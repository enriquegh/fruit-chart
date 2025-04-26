import { useEffect, useState } from 'react';
import { getProduceBySeason, seasons } from '../data/produceData';
import ProduceList from './ProduceList';

const SeasonView = () => {
  const [currentSeason, setCurrentSeason] = useState('Summer');
  const [produceData, setProduceData] = useState({ fruits: [], vegetables: [] });

  useEffect(() => {
    const data = getProduceBySeason(currentSeason);
    setProduceData(data);
  }, [currentSeason]);

  return (
    <div className="season-view">
      <div className="season-selector">
        {seasons.map(season => (
          <button 
            key={season.name}
            className={currentSeason === season.name ? 'active' : ''}
            onClick={() => setCurrentSeason(season.name)}
          >
            {season.name}
          </button>
        ))}
      </div>
      
      <h2 className="season-title">{currentSeason} Produce</h2>
      
      <ProduceList 
        title="Fruits" 
        items={produceData.fruits} 
        type="fruit" 
      />
      <ProduceList 
        title="Vegetables" 
        items={produceData.vegetables} 
        type="vegetable" 
      />
    </div>
  );
};

export default SeasonView;