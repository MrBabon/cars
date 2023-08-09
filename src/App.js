import React, {Component} from 'react';
import Mycars from './components/Mycars';

import './App.css';

class App extends Component {

  state = {
    titre: 'Mon catalogue voiture',
    color: 'green'
  }

  render() {
    return (
      <div className="App">
        <Mycars
          color={this.state.color}
          title={this.state.titre}
        />
      </div>
    );
  }
}

export default App;
