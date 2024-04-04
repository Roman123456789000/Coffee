import { Component } from "react";

import './footer.css'
import Solimo from '../../img/imgCarts/Bestitem-solimo.png'
import Aromistico from '../../img/imgCarts/Aromistico.png'
import Presto from '../../img/imgCarts/Presto.png'
class Footer extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="footer-container">
               <div className="footer-wrapper-container">
                    <h2 className="footer-title">Our best</h2>
                    <div className="footer-wrapper">
                        <div className="footer-carts">
                            <img src={Solimo} alt="" className="footer-bg"/>               
                        </div>
                        <div className="footer-carts">
                            <img src={Presto} alt="" className="footer-bg"/>
                        </div>
                        <div className="footer-carts">
                            <img src={Aromistico} alt="" className="footer-bg"/>
                        </div>
                    </div>
               </div>
            </div>
        )
    }
}

export default Footer