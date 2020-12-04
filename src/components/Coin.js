import React, { Component } from 'react';
import '../css/Coin.css';
class Coin extends Component {
render(){
    var x = this.props.info.url;
    var y = this.props.info.state;
    return(
        <div>
            <img className="Coin" src={x} alt={y}></img>
        </div>
    );
}
}

export default Coin;