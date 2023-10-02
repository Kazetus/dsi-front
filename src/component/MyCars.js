import React from 'react';
import Wrapper from './Wrapper';
import Car from './Car';

function MyCars({title}) {
    return (
        <Wrapper>
            <h2>{title}</h2>
            <Car marque="Ford" couleur="vert" />
            <Car marque="Renault" couleur="rouge" />
            <Car marque="Citroen" couleur="bleu" />
        </Wrapper>
    );
}

export default MyCars;