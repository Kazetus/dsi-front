import React, {useState} from 'react';

function CarInput({addCar}) {

    const [marque, setMarque] = useState('');
    const [couleur, setCouleur] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
        addCar({ marque, couleur });
        setMarque('');
        setCouleur('');
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input value={marque} onChange={(e) => setMarque(e.target.value)} placeholder="Marque" />
            <input value={couleur} onChange={(e) => setCouleur(e.target.value)} placeholder="Couleur" />
            <button type="submit">Ajouter un véhicule</button>
        </form>
    );
}

export default CarInput;