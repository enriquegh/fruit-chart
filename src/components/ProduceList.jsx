import ProduceCard from './ProduceCard';

const ProduceList = ({ title, items, type }) => {
  if (items.length === 0) {
    return (
      <div className="produce-list empty">
        <h2>{title}</h2>
        <p className="no-items">No {title.toLowerCase()} in season.</p>
      </div>
    );
  }

  return (
    <div className="produce-list">
      <h2>{title}</h2>
      <div className="produce-grid">
        {items.map(item => (
          <ProduceCard key={item.name} item={item} type={type} />
        ))}
      </div>
    </div>
  );
};

export default ProduceList;