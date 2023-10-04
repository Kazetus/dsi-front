import React, { useState } from 'react';
import Wrapper from './Wrapper';
import Car from './Car';



function MyCars({title}) {

    const [cars, setCar] = useState([
        { marque: 'Renault', couleur: 'Rouge' },
        { marque: 'Honda', couleur: 'Bleu' },
        { marque: 'Ford', couleur: 'Vert' }
    ]);
    
    return (
        <Wrapper>
            <h2>{title}</h2>
            {cars.map((car) => (
                <>
                <Car marque={car.marque} couleur={car.couleur} />
                <hr/>
                </>
            ))}
            {/* <Car marque="Ford" couleur="vert" />
            <Car marque="Renault" couleur="rouge" />
            <Car marque="Citroen" couleur="bleu" /> */}
        </Wrapper>
    );
}

export default MyCars;