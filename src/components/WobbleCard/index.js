import React from 'react';
import { useSpring, animated } from 'react-spring';
import './wobble.css';

const calc = (x, y) => [
  // -(y - window.innerHeight) / 2 / 30,
  // (x - window.innerWidth / 2) / 30,
  0,
  0,
  1.1,
];
const trans = (x, y, s) => `rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export default function WobbleCard({ person, handleClick }) {
  const [spring, setSpring] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  return (
    <animated.div
      className='card'
      onMouseMove={({ clientX: x, clientY: y }) =>
        setSpring({ xys: calc(x, y) })
      }
      onMouseLeave={() => setSpring({ xys: [0, 0, 1] })}
      style={{
        transform: spring.xys.interpolate(trans),
        backgroundImage: `url(${person.image})`,
      }}
      onClick={() => handleClick(person.id)}
    />
  );
}
