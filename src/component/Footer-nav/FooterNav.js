import { Component } from "react";

import logoCoffeeBlack from '../../img/icons/Beanslogo-black.png'
import logoCoffeeBlackSmall from '../../img/icons/logo-small-black.png'
import './footernav.css'

class FooterNav extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="footernav-container">
                <div className="footernav-coffee">
                    <div className="footernav-wrapper">
                        <div className="footernav-img">
                            <img className="footernav-img-logo" src={logoCoffeeBlackSmall} alt=""/>
                        </div>
                        <a onClick={() => this.props.onChangeScreen('first')} className="footernav-item">Coffee house</a>
                    </div>
                    <a onClick={() => this.props.onChangeScreen('second')} className="footernav-item">Our coffee</a>
                    <a onClick={() => this.props.onChangeScreen('triy')} className="footernav-item">For your pleasure</a>
                </div>

                <div className="footernav-img-wrapeer">
                    <img src={logoCoffeeBlack} alt="" className="footernav-img-coffee" />
                </div>
            </div>
        )
    }
}

export default FooterNav