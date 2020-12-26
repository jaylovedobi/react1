import React,{Component} from 'react';
import {
  Navbar,
  NavbarBrand,
} from 'reactstrap';
import Menucomponent from './components/MenuComponent'
import DISHES from './shared/dishes'
import './App.css';

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      dishes:DISHES
    }
  }
  render(){
   return (
    <div className="App">
     <Navbar color="primary" dark>
       <div className="container">
         <NavbarBrand href='/'>restraunt con funsion</NavbarBrand>
       </div>
      </Navbar>
      <Menucomponent dishes={this.state.dishes} />
    </div>
  )
   }
}

export default App;
