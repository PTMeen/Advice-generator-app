import React from 'react';
import { BsFillPauseFill } from 'react-icons/bs';
import Spinner from './Spinner';
import diceImg from '../assets/images/icon-dice.svg';

const Card = ({ id, advice, isLoading, getAdvice }) => {
  return (
    <div className='card'>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className='content'>
          <h1 className='title'>ADVICE #{id}</h1>
          <article>
            <p>
              <span>&#8220;</span>
              {advice}
              <span>&rdquo;</span>
            </p>
          </article>
          <div className='divider'>
            <span>
              <BsFillPauseFill size={30} />
            </span>
            <div className='line'></div>
          </div>
        </div>
      )}
      <button
        className={`diceBtn ${isLoading ? 'disabled' : 'active'}`}
        onClick={getAdvice}
        disabled={isLoading}>
        <img src={diceImg} alt='get a advice' />
      </button>
    </div>
  );
};

export default Card;
