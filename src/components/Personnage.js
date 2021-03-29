

function Personnage(props) {

    return(
        <div>
            <p>Nom : {props.nom}</p>
            <p>Prenom : {props.prenom}</p>
            <p>Age : {props.age}</p>
            <p>Commune : {props.commune}</p>
            <button onClick = {() => {props.change()}}>Change</button>
        </div>
    );
}

export default Personnage;