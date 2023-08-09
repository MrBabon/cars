import React from "react";

// Ceci est une fonction !

const Car = ({children, color}) => {

    // Condition inportante afin de mettre un text si pas de couleur défini par exemple.
    const colorInfo = color ? <p>Couleur: {color} </p> : <p>Couleur: Non définie</p>;

    if(children) {
        return (
            <div style={ {backgroundColor: 'pink', width: '400px', padding: '10px', margin: '5px auto'} }>
                <p>Marque: {children} </p>
                {colorInfo}
            </div>
        )
    } else {
        return (
            <div style={ {backgroundColor: 'pink', width: '400px', padding: '10px', margin: '5px auto'} }>
                <p>Information manquante</p>
            </div>
        )
    }


}

export default Car;