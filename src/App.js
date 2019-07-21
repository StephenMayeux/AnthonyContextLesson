import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
  }

  render() {
    const { counter } = this.state;
    return (
      <AppContainer
        counter={counter}
        updateCounter={() => this.setState({ counter: counter + 1 })}
      />
    )
  }
}

const AppContainer = (props) => {
  const { counter, updateCounter } = props;
  return (
    <React.Fragment>
      <button onClick={() => updateCounter()}>Increase Number</button>
      <DisplayCounter
        counter={counter}
      />
    </React.Fragment>
  );
}

const DisplayCounter = (props) => {
  const { counter } = props;
  return (
    <h1>{counter}</h1>
  )
}

export default App;
