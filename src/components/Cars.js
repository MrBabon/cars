import Wrapper from "./Wrapper";

// Ceci est une fonction !

const Car = ({children, color}) => {

    // Condition importante afin de mettre un text si pas de couleur défini par exemple.
    let colorInfo = "";
    if (color) {
        colorInfo = color;
    } else {
        colorInfo = "Non définie";
    }

    return children && (
        <Wrapper>
            <p>Marque: {children}</p>
            <p>Couleur: {colorInfo}</p>
        </Wrapper>
    )

    // if(children) {
    //     return (
    //         <div style={ {backgroundColor: 'pink', width: '400px', padding: '10px', margin: '5px auto'} }>
    //             <p>Marque: {children} </p>
    //             {colorInfo}
    //         </div>
    //     )
    // } else {
    //     return (
    //         <div style={ {backgroundColor: 'pink', width: '400px', padding: '10px', margin: '5px auto'} }>
    //             <p>Information manquante</p>
    //         </div>
    //     )
    // }


}

export default Car;