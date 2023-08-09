import React, { Component } from "react";
import Car from './Cars';
// Ceci est une class !

class Mycars extends Component {
    render() {
        const {title} = this.props;
        return (
            <div>
                <h1>{title}</h1>
                <Car color="red">Ford</Car>
                <Car>Mercedes</Car>
                <Car color="green"></Car>

            </div>
        )
    }
}

export default Mycars;