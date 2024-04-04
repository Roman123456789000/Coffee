import { Component } from "react";

class DescrAnimals extends Component {
    constructor(props) {
        super(props)
      
    }
    
  
    render() {

        return (
            <div className="second-container">
                <div className="second-img">
                    <img src={this.props.img} alt="" />
                </div>
                <div className="second-wrapper">
                    <div className="second-title">{this.props.title}</div>
                    <div className="second-logo">
                        <img src={this.props.imgCoffee} alt="" />
                    </div>
                    <div className="second-decr">
                        {this.props.descr}
                    </div>
                </div>
            </div>
        )
    }
}

export default DescrAnimals