import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';


class App extends Component {

  handleOnClickItems() {
    this.props.store.dispatch({
      type: 'GET_COUNT_OF_ITEMS',
    });
  }

  handleOnClickUsers() {
    this.props.store.dispatch({
      type: 'GET_COUNT_OF_USERS',
    });
  }

  render() {
    // debugger;
    console.log(this.props);
    return (
      <div className="App">
          <button onClick={() => this.handleOnClickItems()}>
            Click to change items count
            </button>
          <button onClick={() => this.handleOnClickUsers()}>
            Click to change user count
          </button>
          <p>{this.props.orangePeel.length}</p>
      </div>
    );
  }
}

const vanilla = (milkshake) => {
  console.log(milkshake.items);
  console.log(milkshake);
  return { orangePeel: milkshake.items.concat(['a', 'b', 'c']) };
}

export default connect(vanilla)(App);
