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
    this.handleClick = this.handleClick.bind(this);
  }
  flipCoin() {
    let choice = () => {
      const randIdx = Math.floor(Math.random() * this.props.coins.length);
      return this.props.coins[randIdx];
    };
    let newCoin = choice();
    this.setState((st) => {
      return {
        currCoin: newCoin,
        numFlips: st.numFlips + 1,
        numHeads: st.numHeads + (newCoin.side === 'heads' ? 1 : 0),
        numTails: st.numTails + (newCoin.side === 'tails' ? 1 : 0),
      };
    });
  }
  handleClick() {
    this.flipCoin();
  }
  render() {
    return (
      <div>
        <h1>Let's Flip A Coin</h1>
        {this.state.currCoin && <Coin info={this.state.currCoin} />}
        <h4>
          Out of {this.state.numFlips} flips, there have been{' '}
          {this.state.numHeads} heads and {this.state.numTails} tails.
        </h4>
        <button onClick={this.handleClick}>Flip Me!</button>
      </div>
    );
  }
}

export default CoinContainer;
