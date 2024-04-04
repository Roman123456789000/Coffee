import { Component } from "react";
import CardItem from "../../component/CardItem/CardItem";
import DescrAnimals from "../../component/DescrAnimals/DescrAnimals";
import ImgCoffeeCup from '../../img/imgCarts/imgCoffeeCup.png'
import logoCoffeeBlack from '../../img/icons/Beanslogo-black.png'
import { data } from "../../data/cardData";
import  './TriyScreen.css'
class TriyScreen extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {

        return (
            <div className="triyScreen">
                <DescrAnimals img={ImgCoffeeCup} title={'About our goods'} imgCoffee={logoCoffeeBlack} descr={'Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.Afraid at highly months do things on at. Situation recommend objection do intentionso questions. As greatly removed calling pleased improve an. Last ask him cold feelmet spot shy want. Children me laughing we prospect answered followed. At it wentis song that held help face.'}/> 
                <div className="second-menu-carts">
                   {data.map((item, index) => {
                    return(
                        <CardItem country={item.country} title={item.title} price={item.price} img={item.img} key={index} style={item.style}/>
                    )
                   })}
                </div>
            </div>
            
        )
    }
}

export default TriyScreen