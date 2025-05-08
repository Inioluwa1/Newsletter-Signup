import React from 'react';
import './IndUpdateCard.css';
import Updates from './IndUpdate';


export default function IndUpdateCard() {
  return (
    <div className='UpdateCard'>
      {Updates.map((update, index) => (
        <div key={index} className='indUpdateCard'>
          <img src='/icon-list.svg' alt={update.text} />
          <p> {update.text} </p>
        </div>
      ))}
    </div>
  )
}
