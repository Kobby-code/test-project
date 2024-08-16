import React from "react";
import "./Greet.css";

const Navbar = () => {
    return(
        <nav className="navbar">
            <ul className="nav-links">
                <li><a href="#Home">Home</a></li>
                <li><a href="#Contact">Contact</a></li>
                <li><a href="#Service">Service</a></li>

            </ul>
        </nav>
    )
}
export default Navbar