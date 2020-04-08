import React from 'react';
import WobbleCard from '../../components/WobbleCard';
import familyData from '../../data.json';
import './home.css';

export default function Home() {
  const renderCards = () =>
    familyData.map((person) => (
      <WobbleCard key={person.id} person={person} handleClick={handleClick} />
    ));

  const handleClick = (id) => {
    console.log('CLICK ID - ', id);
  };

  return (
    <div>
      <h1>This is home</h1>
      <div className='card-container'>{renderCards()}</div>
    </div>
  );
}
