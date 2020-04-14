import React, { useState, useContext, useRef } from 'react';
import WobbleCard from '../../components/WobbleCard';
import familyData from '../../data.json';
import './home.css';

import { UserContext } from '../../App';
import IconBtn from '../../components/IconBtn';

export default function Home() {
  const formRef = useRef(null);
  const { user, setUser } = useContext(UserContext);
  const [name, setName] = useState('');
  const [errorActive, setErrorActive] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formRef.current);

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
  };

  const cancelUser = () => {
    setUser({
      name: '',
      image: '',
    });
  };

  const capitalizeStr = (str) => str.substr(0, 1).toUpperCase() + str.substr(1);

  return (
    <div className='home-container'>
      <div ref={formRef} className={user.name ? 'fade-out' : 'fade-in'}>
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
      {errorActive ? (
        <>
          <h2>I'm sorry...I don't recognize that name.</h2>
          <h2>Please try again.</h2>
        </>
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
