import { Component } from "react";

import './secondScreen.css'
import secondImg from '../../img/imgCarts/secondImg.png'
import logoCoffeeBlack from '../../img/icons/Beanslogo-black.png'
import lineBlack from '../../img/icons/Line.png'
import CardItem from "../../component/CardItem/CardItem";
import DescrAnimals from "../../component/DescrAnimals/DescrAnimals";
import { data } from "../../data/cardData";



class SecondScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data,
            term: '',
            filter: '',
        }
    }

    searchEmp = (items, term) => {
        if(term.length === 0) {
            return items
        }


        return items.filter(item => {
            return item.title.toLowerCase().indexOf(term.toLowerCase()) > -1
        })
    }

    
    onUpdataValue = (e) => {
        const term = e.target.value;
        this.setState({term});
    }

    filterNav = (items, filter) => {
        switch(filter) {
            case 'Brazil':
                return items.filter(item => item.country === 'Brazil');
            case 'Columbia':
                return items.filter(item => item.country === 'Columbia');
            case 'Kenya':
                return items.filter(item => item.country === 'Kenya');
            default:
                return items;
        }
    }

    onFilterSelect = (filter) => {
        if(this.state.filter === filter) {
            return this.setState({filter: ''})
        }
        this.setState({filter});
    }

    render() {
        const {term, data, filter} = this.state
        const visibleData = this.filterNav(this.searchEmp(data, term), filter)
        console.log(this.state.data.country)
        return (
            <div className="SecondScreen">
               <DescrAnimals title={'About our beans'} img={secondImg} imgCoffee={logoCoffeeBlack} descr={'Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. Afraid at highly months do things on at. Situation recommend objection do intentionso questions. As greatly removed calling pleased improve an. Last ask him cold feelmet spot shy want. Children me laughing we prospect answered followed. At it wentis song that held help face.'}/>
                <div className="second-line">
                    <img src={lineBlack} alt="" />
                </div>
                <div className="second-filter">
                    <div className="second-lookiing-for">
                        <label>Lookiing for<input value={this.state.term} onChange={this.onUpdataValue} className="second-input-placeholdr" type="text" placeholder='start typing here...'/></label>
                    </div>
                   <div className="second-wrapper-filter">
                        <p className="second-filter-title">Or filter</p>
                        <button onClick={() => this.onFilterSelect('Brazil')} className="second-filter-btn left">Brazil</button>
                        <button onClick={() => this.onFilterSelect('Kenya')} className="second-filter-btn middle">Kenya</button>
                        <button onClick={() => this.onFilterSelect('Columbia')} className="second-filter-btn right">Columbia</button>
                   </div>
                </div>

                <div className="second-menu-carts">
                    {visibleData.map((item, index) => {
                        return(
                            <CardItem country={item.country} title={item.title} price={item.price} img={item.img} key={index}/>
                        )
                    })}
                </div>
            </div>
        ) 

    }
}

export default SecondScreen