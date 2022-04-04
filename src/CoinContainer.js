import React, { Component } from 'react';
import Coin from './Coin';
import tailsImg from './assets/tails.jpeg';

class CoinContainer extends Component {
  static defaultProps = {
    coins: [
      { side: 'heads', imgSrc: 'https://tinyurl.com/react-coin-heads-jpg' },
      {
        side: 'tails',
        imgSrc: tailsImg,
      },
    ],
  };
  constructor(props) {
    super(props);
    this.state = {
      currCoin: null,
      numFlips: 0,
      numHeads: 0,
      numTails: 0,
    };
  }
  render() {
    return (
      <div>
        <Coin src={this.props.coins[0].imgSrc} />
        <button onClick={this.handleClick}>Flip Me!</button>
      </div>
    );
  }
}

export default CoinContainer;
