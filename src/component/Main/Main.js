import { Component } from "react";

import './main.css'
import logoCoffeeBlack from '../../img/icons/Beanslogo-black.png'

class Main extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="main-containerrr">
                <h2 className="main-title">About Us</h2>
                <div className="main-img-coffee">
                    <img src={logoCoffeeBlack} alt="" className="main-coffee" />
                </div>

                <div className="main-text">
                    Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                    Afraid at highly months do things on at. Situation recommend objection do intention
                    so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                    met spot shy want. Children me laughing we prospect answered followed. At it went
                    is song that held help face.
                    <br/>
                    <br/>
                    Now residence dashwoods she excellent you. Shade being under his bed her, Much
                    read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                    horrible but confined day end marriage. Eagerness furniture set preserved far
                    recommend. Did even but nor are most gave hope. Secure active living depend son
                    repair day ladies now.
                </div>
            </div>
        )
    }
}

export default Main