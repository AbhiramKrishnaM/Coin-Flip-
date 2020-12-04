import React, { Component } from 'react';
import Coin from './Coin';

class CoinFlip extends Component {

    static defaultProps = {
        arr:[
            {side:'Heads', url:'https://tinyurl.com/react-coin-heads-jpg'},
            {side:'Tails', url:'https://tinyurl.com/react-coin-tails-jpg'}
        ]
    }

    constructor(props){
        super(props);
        this.state = {
            currCoin:null,
            nFlips:0,
            heads:0,
            tails:0
        }
        this.handleClick = this.handleClick.bind(this);
    }


    flipCoin(){
      const arr1 =  this.props.arr[Math.floor(Math.random()*this.props.arr.length)];
      this.setState((x)=>{
        return {
            currCoin:arr1,
            nFlips: x.nFlips + 1,
            heads: x.heads + (arr1.side === "Heads" ? 1 : 0),
            tails: x.tails + (arr1.side === "Tails" ? 1 : 0)  
        }
      })
    }


    handleClick(){
        this.flipCoin();
    }


    render(){
        return(
            <div>
                <h1>Lets Flip a Coin ?</h1>
                {this.state.currCoin && <Coin info={this.state.currCoin}/>}
                <button onClick={this.handleClick}>Flip Me</button>
                <p>Out of {this.state.nFlips}, there have been {this.state.heads} heads and {this.state.tails} tails.</p>
            </div>
        )
    }



}

export default CoinFlip;