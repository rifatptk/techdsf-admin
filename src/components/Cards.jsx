import React from 'react';
import { overviewCards } from '../constants';
import Card from './Card';

const Cards = () => {
  return (
    <div className="w-full">
      <div className="flex space-x-[20px] ">
        {overviewCards.map((cardData) => (
          <Card cardData={cardData} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
