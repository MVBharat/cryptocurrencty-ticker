import React from 'react';
import './App.css'
import Ticker from './components/Ticker'

class App extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render () {
    return  (
      <div className="App">
        <div className="App-header">
          <h1>Cryptocurrency Ticker</h1>
        </div>
          <Ticker />
      </div>
      )
  }
 }

 export default App;