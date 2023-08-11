import { Component } from 'react'
import Car from './Cars'

class Mycars extends Component {

    state = {
        voitures: [
            {name: 'Ford', color: 'red', year: 2023},
            {name: 'Mercedes', color: 'black', year: 2022},
            {name: 'Peugeot', color: 'green', year: 2011},
        ],
        titre: 'Mon Catalogue Voitures'
    }

    addTenYears = () => {
        const updatedState = this.state.voitures.map((param) => {
            return param.year -= 10;
        })
        this.setState({
            updatedState
        })
    }

    getAge = (year) => {
        const now = new Date().getFullYear();
        const age = now - year;
        
        // ans, an
        let frenchYearStr = "";
        if (age === 1) {
            frenchYearStr = "an";
        } else if (age > 1) {
            frenchYearStr = "ans";
        }
        return `${age} ${frenchYearStr}`;
    }
    render() {
        
        return (
            <div>
                <h1>{this.state.titre}</h1>
                    
                <button onClick={this.addTenYears}>+ 10 ans</button>

                {
                    this.state.voitures.map(({name, color, year}, index) => {
                        return(
                            <div key={index}>
                                <Car name={name} color={color} year={this.getAge(year)}/>
                            </div>
                        )
                    })
                } 
            
            </div>
           
        )
    }
}

export default Mycars