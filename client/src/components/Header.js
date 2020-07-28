import React from "react";
import {Link} from "react-router-dom";

class Header extends React.Component {
    render() {
        return(
            <header>
                <ul className="navBar">
                    <li><Link to="/home" className="link">Home</Link></li>
                    <li><Link to="/about" className="link">About</Link></li>
                </ul>
            </header>
        )
    }
}

export default Header;
