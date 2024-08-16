import React, { Component } from 'react';
import Greet from './component/Greet';
import Welcome from './component/Welcome';
import Navbar from './component/Navbar';

class App extends Component {
  render(){
  return (
    <div className="App">
      <Navbar />
      <Welcome />
      <Greet name = "Elvis" />
    </div>
  );
}
}

export default App;
