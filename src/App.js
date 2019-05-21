import React from 'react';
import './App.css';
import Text from './components/Text';
import BigButton from './components/BigButton';
import Counter from './components/Counter';

class App extends React.Component {
  state = {
    count: 0
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <Text content={"Fabulous Counter"} />
          <BigButton action={this.increaseCount} text="Press me" />
        </div>
        <div className="calendar">
          <Text content="Count" />
          <Text content="HELLOO" />
          <Counter count={this.state.count} />
        </div>
        <div className="updatePoster">
          <Text content={"Update Poster"} />
          <BigButton action={this.resetCount} text="reset count" />
          <Text content="Why isnt this working?" />
        </div>
      </div>
    )
  }

  increaseCount = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  resetCount = () => {
    this.setState({
      count: 0
    })
  }

}

export default App;
