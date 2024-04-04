import { Component } from "react";

import Main from "../../component/Main/Main";
import Footer from "../../component/Footer/Footer";
class FirstScreen extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="FirstScrenn">
                <Main/>
                <Footer/>
            </div>
        ) 

    }
}

export default FirstScreen
