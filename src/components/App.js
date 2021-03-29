import React, {useState} from 'react';
import Personnage from './Personnage';
import Article from './Article'

function App() {
  let [perso, setPerso] = useState({nom : 'Iula', prenom : 'Laurie', age : 20, commune : 'Uccle'});
  let [vetements, setVetements] = useState([{nom : "tshirt", couleur : "rouge"}, {nom : "pantalon", couleur : "bleu"}, {nom : "pull", couleur : "rose"}, {nom : "chaussette", couleur : "jaune"}, {nom : "short", couleur : "vert"}]);
  
  let rename = () => {
    setPerso({...perso, nom : "Dupont", prenom : "Jean", age : 50, commune : "Schaerbeek"})
  }

  let key = 0;
  return (
    <div>
      <Personnage 
      nom={perso.nom}
      prenom={perso.prenom}
      age={perso.age}
      commune={perso.commune}
      change={rename}
      />
      {
        vetements.map((element) => {
          key += 1;
          return(
            <Article key={key} nom={element.nom} couleur={element.couleur}/>
          )
        })
      }
      
    </div>
  );
}

export default App;
