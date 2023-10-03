import React, { useState } from 'react';
import Wrapper from './Wrapper';
import Car from './Car';
import CarInput from './CarInput';



function MyCars({title}) {

    const [cars, setCar] = useState([
        { marque: 'Renault', couleur: 'Rouge' },
        { marque: 'Honda', couleur: 'Bleu' },
        { marque: 'Ford', couleur: 'Vert' }
    ]);

    const addCar = (car) => {
        setCar([...cars, car]);
      };
    
    return (
        <Wrapper>
            <h2>{title}</h2>
            <CarInput addCar={addCar} />
            {cars.map((car) => (
                <>
                <Car marque={car.marque} couleur={car.couleur} />
                <hr/>
                </>
            ))}
        </Wrapper>
    );
}

export default MyCars;