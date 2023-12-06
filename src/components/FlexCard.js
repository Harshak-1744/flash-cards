import React from 'react';

function FlexCard({ title, description }) {
  return (
    <div style={{ flex: 1, margin: 10, padding: 10, border: '1px solid #ccc', borderRadius: 5 }}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default FlexCard;
