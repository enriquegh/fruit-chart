import { useEffect, useState } from 'react';
import { getProduceByMonth } from '../data/produceData';
import ProduceList from './ProduceList';

const MonthView = ({ month }) => {
  const [produceData, setProduceData] = useState({ fruits: [], vegetables: [] });

  useEffect(() => {
    const data = getProduceByMonth(month);
    setProduceData(data);
  }, [month]);

  return (
    <div className="month-view">
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

export default MonthView;