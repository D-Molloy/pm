import React, { useState, useEffect } from 'react';
import WobbleCard from '../../components/WobbleCard';
import familyData from '../../data.json';
import './home.css';

export default function Home() {
  const [people, setPeople] = useState(familyData);
  const [score, setScore] = useState(0);
  const [topScore, setTopScore] = useState(0);

  // useEffect(() => {
  //   document.querySelector('.App').classList.toggle('element');
  // }, []);

  const handleCorrectGuess = (newData) => {
    const newScore = score + 1;
    const newTopScore = Math.max(newScore, topScore);

    setScore(newScore);
    setTopScore(newTopScore);
    setPeople(shuffleData(newData));
  };

  const handleIncorrectGuess = (data) => {
    setScore(0);
    setPeople(resetData(data));
  };

  const resetData = (data) => {
    const resetData = data.map((item) => ({ ...item, clicked: false }));
    return shuffleData(resetData);
  };

  const shuffleData = (data) => {
    let i = data.length - 1;
    while (i > 0) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = data[i];
      data[i] = data[j];
      data[j] = temp;
      i--;
    }
    return data;
  };

  const handleCardClick = (id) => {
    let guessedCorrectly = false;
    const newData = people.map((item) => {
      const newItem = { ...item };
      if (newItem.id === id) {
        if (!newItem.clicked) {
          newItem.clicked = true;
          guessedCorrectly = true;
        }
      }
      return newItem;
    });
    guessedCorrectly
      ? handleCorrectGuess(newData)
      : handleIncorrectGuess(newData);
  };

  const renderCards = () =>
    people.map((person) => (
      <WobbleCard
        key={person.id}
        person={person}
        handleClick={handleCardClick}
      />
    ));

  return (
    <div id='main'>
      {/* TODO: move background animation to it's own component */}
      {/* TODO: move styles to css */}
      <div
        className='element'
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: -1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1>HELLO WORLD</h1>
      </div>
      <h1>{`Score: ${score}  |  Top score: ${topScore}`}</h1>
      <div className='card-container'>{renderCards()}</div>
    </div>
  );
}
