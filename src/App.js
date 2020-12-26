import React,{Component} from 'react';
import {
  Navbar,
  NavbarBrand,
} from 'reactstrap';
import Menucomponent from './components/MenuComponent'
import './App.css';

class App extends Component{
  render(){
   return (
    <div className="App">
     <Navbar color="primary" dark>
       <div className="container">
         <NavbarBrand href='/'>restraunt con funsion</NavbarBrand>
       </div>
      </Navbar>
      <Menucomponent />
    </div>
  )
   }
}

export default App;
