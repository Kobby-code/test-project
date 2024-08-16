import React from "react";
import './Greet.css';

const Greet = props => {
return <h1 className="header">Hello {props.name}</h1>
}
export default Greet