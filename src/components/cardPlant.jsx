import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../CartSlice';

const CardPlant = ({ plant, onPress }) => {
  const [addedToCart, setAddedToCart] = useState(false);
  const dispatch = useDispatch();

  const addedToCartHandle = () => {
    dispatch(addItem(plant)); 
    onPress();
    setAddedToCart(true); 
  };

  const style_card = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    justifyContent: 'center',
    padding: '20px',
    backgroundColor: '#fff'
  };

  const img_style = {
    width: 'auto',
    height: '200px',
    objectFit: 'cover',
    padding: '10px'
  };

  return (
    <div style={style_card}>
      <img src={plant.image} alt={plant.name} style={img_style} />
      <h3>{plant.name}</h3>
      <p>{plant.description}</p>
      <p>{plant.cost}</p>
      {addedToCart ? <>
        <p>Added to Cart</p>
        <button onClick={addedToCartHandle}>Add to Cart</button>
      </> : <button onClick={addedToCartHandle}>Add to Cart</button>}
    </div>
  );
};

export default CardPlant;