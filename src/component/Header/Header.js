import { Component } from "react";

import './style.css'
import logoImg from '../../img/icons/Beanslogo.png'
import logoCoffee from '../../img/icons/coffee-logo-small.png'
import bg2Img from '../../img/MaskGrouCitchen.png'
import bg3img from '../../img/triyImg.png'

class Header extends Component {
    constructor(props) {
        super(props)
    }   

    renderTitle = () => {
        if(this.props.currentScreen === 'first') {
            return 'Everything You Love About Coffee'
        }
        if(this.props.currentScreen === 'second') {
            return 'Our Coffee'
        }
        if(this.props.currentScreen === 'triy') {
            return 'For your pleasure'
        }
    }

    // this.props.currentScreen === 'triy' ? {backgroundImage: `url(${bg3img})`, height: 260} : {}

    renderStyle = () => {
        if(this.props.currentScreen === 'second') {
            return {backgroundImage: `url(${bg2Img})`, height: 260}
        }
        if(this.props.currentScreen === 'triy') {
            return {backgroundImage: `url(${bg3img})`, height: 260}
        }
    }

    render() {
        console.log(this.props.title)
        return (
            <div className="container" style={this.renderStyle()}>
                <div className="wrapper">
                    <div className="nav-coffee">
                        <div  onClick={() => this.props.onChangeScreen('first')} className="name-wrapper">
                            <div className="img-coffee-house">
                                <img className="img-house" src={logoCoffee} alt=""/>
                            </div>
                            <a className="nav-item">Coffee house</a>
                        </div>
                        <a onClick={() => this.props.onChangeScreen('second')} className="nav-item" >Our coffee</a>
                        <a onClick={() => this.props.onChangeScreen('triy')} className="nav-item">For your pleasure</a>
                    </div>
                    <h1 className="title" style={this.props.currentScreen !== 'first' ?  {paddingTop: '0px', marginTop: '84px' }: {}}>{this.renderTitle()}</h1>
                   {this.props.currentScreen === 'first' && (
                        <>
                            <div className="img-coffee">
                                <img className="img-title" src={logoImg} alt=""/>
                            </div>
                            <h2>We makes every day full of energy and taste</h2>
                            <h2>Want to try our beans?</h2>
                            <div className="btn-wrapper">
                                <button className="more">More</button>
                            </div>
                        </>
                   )}
                </div>
            </div>
        )
                
    }
}

export default Header