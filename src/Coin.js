import React from 'react';

function Coin(props) {
  return (
    <div className='Coin'>
      <img src={props.src} />
    </div>
  );
}

export default Coin;
