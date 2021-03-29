

function Article(props){
    return(
        <div>
            <p>Article : {props.nom}</p>
            <p>Couleur : {props.couleur}</p>
        </div>
    );
}

export default Article;