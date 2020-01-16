import React, {Component} from 'react';
import Menu from '../Menu/Menu';

export default class Header extends Component {
  constructor(){
    super();
    this.state = {
        isLoggedIn: false
    }
  }
  clickLogout(){
    if(this.state.isLoggedIn){
      this.setState({
        isLoggedIn: false
      }); 
    }else{
      this.setState({
        isLoggedIn: true
      }); 
    }    
  }
  render() {
    return (  
        <header className="App-header">
          header part
          <Menu />
          <button color="light" onClick={() => this.clickLogout()}>
              {this.state.isLoggedIn? 'Logout' : 'Login'}
          </button>
        </header>    
    );
  }
}

