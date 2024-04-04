import { Component } from "react";


import './carditem.css'
class CardItem extends Component {
    constructor(props) {
        super(props)
    }
    

    render() {
        return (
            <div className="card">
                <div className="card-wrapper">
                    <img src={this.props.img} alt="" className="card-item"/>
                </div>
                <p className="title-card">{this.props.title}</p>
                <p className="country-card">{this.props.country}</p>
                <p className="price-card">{this.props.price}</p>
            </div>
        )
    }
}

export default CardItem