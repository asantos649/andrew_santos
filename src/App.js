import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainContainer from './container/MainContainer'
import Header from './component/Header'


class App extends React.Component {

  state={
    page:1,
    maxPages:4
  }

  handlePage = (plusMinus) => {
    if (plusMinus === '-'){
      if(this.state.page === 1){
        this.setState({page:this.state.maxPages})
      } else{
        this.setState({page:this.state.page - 1})
      }
    } else if (plusMinus === '+'){
      if(this.state.page === this.state.maxPages){
        this.setState({page:1})
      } else{
        this.setState({page:this.state.page + 1})
      }
    }
  }

  render(){
    return (
      <div className='content'>
        <Header/>
        <MainContainer page={this.state.page} handlePage={this.handlePage}/>
      </div>
    );
  }
}

export default App;
