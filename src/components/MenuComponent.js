import  { Component } from "react";
import { Card,CardImg,CardImgOverlay,CardBody,CardTitle,CardText } from "reactstrap";

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
    renderselected(dish){
        if (dish != null)
        return(
            <Card width="100%">
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                  <CardTitle>{dish.name}</CardTitle>
                  <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    else
        return(
            <div></div>
        );
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
                  <div  className="col-12 col-md-5 m-1">
                    {this.renderselected(this.state.selected)}
                  </div>
                </div>
            </div>
        )
        
    }
}
export default Menucomponent;