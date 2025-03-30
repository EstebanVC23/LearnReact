import "../Styles/CoreConcepts.css";

function CoreConcepts({ src, tittle, description }) {
    // Desestructuración de props
    // const { src, tittle, description } = props;
    // const src = props.src;
    // const tittle = props.tittle;
    // const description = props.description;
    // const { src, tittle, description } = props;
    return (
        <div className="Card">
            <img className="imgprop" src={src} alt="..." />
            <h3 className="h3prop">{tittle}</h3>
            <p className="pprop">{description}</p>
        </div>
    );
}

export default CoreConcepts;