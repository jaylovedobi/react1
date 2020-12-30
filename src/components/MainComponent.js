import React,{Component} from 'react';
import {
  Navbar,
  NavbarBrand,
} from 'reactstrap';
import Menucomponent from './MenuComponent'
import DISHES from '../shared/dishes'
import DishdetailComponent from './DishdetailComponent'

class Main  extends Component{
  constructor(props){
    super(props)
    this.state={
      dishes:DISHES,
      selecteddishid:null
    }
  }
  onselected(dishid){
    this.setState({
        selecteddishid:dishid
    })
}
  render(){
   return (
    <div className="App">
     <Navbar color="primary" dark>
       <div className="container">
         <NavbarBrand href='/'>restraunt con funsion</NavbarBrand>
       </div>
      </Navbar>
      <Menucomponent dishes={this.state.dishes} onClick={(dishid)=>{this.onselected(dishid)}} />
      <DishdetailComponent dish={this.state.dishes.filter(
          (dish) =>  dish.id === this.state.selecteddishid)[0]
          }/>

    </div>
  )
   }
}

export default Main ;
