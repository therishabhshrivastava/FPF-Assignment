import React from 'react';
import './ItemCard.css';

const ItemCard = ({item}) => {
  return (
    <div className='item-card'>
      <div className='item-content'>
        <h3>{item.title}</h3>
        <p>{item.body}</p>
      </div>
    </div>
  )
}

export default ItemCard
