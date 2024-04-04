import { Component } from "react";


import SecondScreen from "../../screens/SecondScreen/SecondScreen";
import FirstScreen from "../../screens/FirstScreen/FirstScreen";
import Header from "../Header/Header";
import FooterNav from "../Footer-nav/FooterNav";
import TriyScreen from "../../screens/TriyScreen/TriyScreen";
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            screen: 'first'
        }
    }
    
    handleChangeScreen = (screenName) => {
        this.setState({
            screen: screenName 
        }) 
    }
    render() {

        return (
            <>
                <Header onChangeScreen={this.handleChangeScreen} currentScreen={this.state.screen} title={'sdfjshfjkshdsehfjsdvjsdj'}/>
                {this.state.screen === 'first' && (<FirstScreen/>)}
                {this.state.screen === 'second' && <SecondScreen/>}
                {this.state.screen === 'triy' && <TriyScreen/>}
                <FooterNav onChangeScreen={this.handleChangeScreen} currentScreen={this.state.screen}/>
            </>
        )
    }
}

export default App