import React from 'react';
import FlexCard from './FlexCard';
import topics from './topics.json'; 

function App() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {topics.map(topic => (
        <FlexCard key={topic.id} title={topic.title} description={topic.description} />
      ))}
    </div>
  );
}

export default App;
