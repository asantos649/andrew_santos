import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainContainer from './container/MainContainer'
import Header from './component/Header'
import TableOfContents from './component/TableOfContents'


class App extends React.Component {

  state={
    page:1,
    maxPages:4
  }

  handlePageArrow = (plusMinus) => {
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

  handlePageTOC = (newPage) => {
    this.setState({page:newPage})
  }

  render(){
    return (
      <div className='content'>
        <Header/>
        <TableOfContents page={this.state.page} handlePage={this.handlePageTOC}/>
        <MainContainer page={this.state.page} handlePage={this.handlePageArrow}/>
      </div>
    );
  }
}

export default App;
