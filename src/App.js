import { Component } from 'react';
import Mycars from './components/Mycars';
import Welcome from './components/Welcome';
import './App.css';

class App extends Component {

  state = {
    titre: 'Mon Catalogue Voitures'
  }

  render() {
    return (
      <div className='App'>
        <Welcome/>
        <Mycars/>
      </div>
    )
  }
}

export default App;