import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainContainer from './container/MainContainer'

class App extends React.Component {

  state={
    page:'welcome'
  }


  render(){
    return (
      <>
        {/* <NavBar/> */}
        <MainContainer page={this.state.page}/>
      </>
    );
  }
}

export default App;
