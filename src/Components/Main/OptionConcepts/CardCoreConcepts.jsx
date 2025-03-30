import "../../../Styles/CardCoreConcepts.css";

function CardCoreConcepts({ src, tittle, description }) {
    return (
        <div className="Card">
            <img className="imgprop" src={src} alt="..." />
            <h3 className="h3prop">{tittle}</h3>
            <p className="pprop">{description}</p>
        </div>
    );
}

export default CardCoreConcepts;