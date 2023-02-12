import React from 'react';

const CardGrid = ({ data }) => {
  return (
    <div className="card-grid">
      {data.map((item, index) => (
        <div className="card" key={index}>
          <div className="card-title">{item.title}</div>
          <div className="card-description">{item.description}</div>
        </div>
      ))}
    </div>
  );
};

export default CardGrid;
