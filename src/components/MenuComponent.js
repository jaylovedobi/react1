import  { Component } from "react";
import { Card,CardImg,CardImgOverlay,CardTitle } from "reactstrap";
import DishdetailComponent from './DishdetailComponent'

class Menucomponent extends Component{

    constructor(props){
        super(props);

        this.state = {
           selected:null
        };
    }
    onselected(dish){
        this.setState({
            selected:dish
        })
    }
    render(){
        const menu = this.props.dishes.map((dish)=>{
            return(
                <div key={dish.id} className="col-15 col-md-5 m-1">
                    <Card onClick={()=>this.onselected(dish)}>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Card>
                </div>
            )
        });
        return(
            <div
             className="container">
                 <div className="row">
                        {menu}
                 </div>
                 <div className="row">
                 
                      <DishdetailComponent dish={this.state.selected}/>
                  
                </div>
            </div>
        )
        
    }
}
export default Menucomponent;