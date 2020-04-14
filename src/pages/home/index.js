import React, { useState, useContext, useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import WobbleCard from '../../components/WobbleCard';
import familyData from '../../data.json';
import './home.css';

import { UserContext } from '../../App';
import IconBtn from '../../components/IconBtn';

export default function Home() {
  let history = useHistory();
  const { user, setUser } = useContext(UserContext);
  const [name, setName] = useState('');
  const [errorActive, setErrorActive] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const [foundUser] = familyData.filter(
      (person) => person?.name === name.toLowerCase().trim()
    );
    if (!foundUser) {
      return setErrorActive(true);
    }
    setUser({
      name: foundUser.name,
      image: foundUser.image,
    });
  };

  const confirmUser = () => {
    console.log('Take me to the game!!');
    history.push('/game');
  };

  const cancelUser = () => {
    setUser({
      name: '',
      image: '',
    });

    setName('');
  };

  const capitalizeStr = (str) => str.substr(0, 1).toUpperCase() + str.substr(1);

  return (
    <div className='home-container'>
      {!user.name ? (
        <div className={user.name ? 'fade-out' : 'fade-in'}>
          <h1>What is your name?</h1>
          <form onSubmit={handleSubmit}>
            <input
              value={name}
              type='text'
              onChange={(e) => {
                setErrorActive(false);
                setName(e.target.value);
              }}
              required
            />
            <IconBtn action='confirm' />
          </form>
        </div>
      ) : null}
      {errorActive ? (
        <div className='error'>
          <h2>I'm sorry...I don't recognize that name.</h2>
          <h2>Please try again.</h2>
        </div>
      ) : null}
      {user.name ? (
        <div
          className={
            user.name
              ? 'greeting-container fade-in'
              : 'greeting-container fade-out'
          }
        >
          <h1>
            Hello, {capitalizeStr(user.name)}, would you like to play a game?
          </h1>
          <WobbleCard size='lg' person={user} handleClick={() => null} />
          <div className='button-container'>
            <IconBtn action='cancel' handleClick={cancelUser} />

            <IconBtn action='confirm' handleClick={confirmUser} />
          </div>
        </div>
      ) : null}
    </div>
  );
}
