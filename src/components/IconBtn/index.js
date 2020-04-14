import React from 'react';
import './iconBtn.css';

export default function IconBtn({ action, handleClick }) {
  let icon;
  let color;
  switch (action) {
    case 'confirm':
      icon = 'done';
      color = 'green';
      break;
    case 'cancel':
      icon = 'close';
      color = 'red';
      break;
    default:
      color = 'black';
  }

  // checkmark: done
  // X: close

  return (
    <button
      className='button'
      style={{ backgroundColor: color }}
      onClick={handleClick}
    >
      <span class='material-icons'>{icon}</span>
    </button>
  );
}
