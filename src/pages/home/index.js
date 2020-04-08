import React from 'react';
import WobbleCard from '../../components/WobbleCard';
import './home.css';

export default function Home() {
  return (
    <div>
      <h1>This is home</h1>
      <div className='card-container'>
        <WobbleCard />
        <WobbleCard />
        <WobbleCard />
        <WobbleCard />
      </div>
    </div>
  );
}
