import {Component} from 'react';
import { Card,CardImg,CardBody,CardTitle,CardText} from "reactstrap";

class DishdetailComponent extends Component{

    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
       }


    render(){
       const dish = this.props.dish;
        if (dish != null){
            const comments = dish.comments.map((list)=>{
                return(
                    <li>
                    <p>{list.comment}</p>
                    <p>{list.author},{list.date}</p>
                    </li>

                )
            })
        return(
                
                <div className="container">
                    <div className="row">
                    <Card className="col-15 col-md-5 m-1">
                        <CardImg top src={dish.image} alt={dish.name} />
                        <CardBody>
                          <CardTitle>{dish.name}</CardTitle>
                          <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                    <div className="col-15 col-md-5 m-1">
                    <ul className="list-unstyled">
                    {comments}
                  </ul>
                  </div>
                  </div>
                  </div>
        );
        }else{
            return( <div></div>)
        }
            
        }
}
export default DishdetailComponent;