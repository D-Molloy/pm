import React, { useState, useContext } from 'react';
import WobbleCard from '../../components/WobbleCard';
import familyData from '../../data.json';
import './home.css';

import { UserContext } from '../../App';

export default function Home() {
  const { user, setUser } = useContext(UserContext);
  const [name, setName] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const [foundUser] = familyData.filter((person) => person?.name === name);
    if (!foundUser) {
      return setError(true);
    }
    setUser({
      name: foundUser.name,
      image: foundUser.image,
    });
  };
  const capitalizeStr = (str) => str.substr(0, 1).toUpperCase() + str.substr(1);

  return (
    <div align='center'>
      <h1>What is your name?</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={(e) => {
            setError(false);
            setName(e.target.value);
          }}
          required
        />
        <button>[CheckMark]</button>
      </form>
      {error ? (
        <>
          <h2>I'm sorry...I don't recognize that name.</h2>
          <h2>Please try again.</h2>
        </>
      ) : null}
      {user.name ? (
        <>
          <h1>
            Greetings, {capitalizeStr(user.name)}, would you like to play a
            game?
          </h1>
          <img src={user.image} alt={user.name} />
        </>
      ) : null}
    </div>
  );
}
