import React, { Component, Fragment, createContext, useContext } from 'react';

const CounterContext = createContext(0);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
  }

  render() {
    const { counter } = this.state;
    return (
      <CounterContext.Provider value={this.state.counter}>
        <AppContainer
          updateCounter={() => this.setState({ counter: counter + 1 })}
        />
      </CounterContext.Provider>
    )
  }
}

const AppContainer = (props) => {
  const { updateCounter } = props;
  return (
    <Fragment>
      <button onClick={() => updateCounter()}>Increase Number</button>
      <DisplayCounter />
    </Fragment>
  );
}

const DisplayCounter = (props) => {
  const counter = useContext(CounterContext);
  return (
    <h1>{counter}</h1>
  )
}

export default App;
