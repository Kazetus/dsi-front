import Car from "./Car";

function MyCars({titre}) {

    return (
      
      <>
        <h2>{titre}</h2>
        <Car marque="Ford" couleur="Bleu" />
        <Car marque="Renault" couleur="Noir"/>
        <Car marque="Toyota" couleur="Vert"/>
      </>
    )
  }
  
  export default MyCars;