import React, {Component} from 'react';
import spacex from "../assets/images/spacex.svg";

class Header extends Component {
    render() {
        return (
            <header>
                <img src={spacex} className="App-logo" alt="logo"/>
                <p className="title">
                    StarLink Tracker
                </p>
            </header>
        );
    }
}
export default Header;

