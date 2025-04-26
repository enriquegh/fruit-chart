import { useState } from 'react';

const ProduceCard = ({ item, type }) => {
  const [showDetail, setShowDetail] = useState(false);
  
  // Use a placeholder image if the actual image is not available
  const fallbackImage = `/images/${type === 'fruit' ? 'fruit' : 'vegetable'}-placeholder.jpg`;
  
  const handleImageError = (e) => {
    e.target.src = fallbackImage;
  };

  const handleCardClick = () => {
    setShowDetail(true);
    if (window.innerWidth <= 768) {
      document.body.style.overflow = 'hidden';
    }
  };

  const handleCloseDetail = () => {
    setShowDetail(false);
    document.body.style.overflow = '';
  };

  return (
    <>
      <div className="produce-card" onClick={handleCardClick}>
        <div className="produce-image-container">
          <img 
            src={item.image} 
            alt={item.name} 
            onError={handleImageError} 
            className="produce-image"
          />
        </div>
        <div className="produce-info">
          <h3>{item.name}</h3>
          <p className="produce-description">{item.description}</p>
        </div>
      </div>

      {showDetail && (
        <div className="item-detail-overlay">
          <div className="item-detail">
            <button className="close-button" onClick={handleCloseDetail}>
              &times;
            </button>
            <div className="item-image-container">
              <img 
                src={item.image} 
                alt={item.name} 
                onError={handleImageError} 
              />
            </div>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            {item.seasons && (
              <div className="season-months">
                <h4>Available in: {item.seasons.map(s => s).join(', ')}</h4>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ProduceCard;