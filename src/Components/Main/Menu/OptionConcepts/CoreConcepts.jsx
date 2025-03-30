import CardCoreConcepts from "./CardCoreConcepts.jsx"
import reactObject from "./DataConcepts.js";
import "../../../../Styles/Menu/OptionConcepts/CoreConcepts.css";

function CoreConcepts(){
    return (
    <section id="CoreConcepts">
        <h2>Conceptos Clave</h2>
        <div className="CoreConcepts">
            {reactObject.map(({ src, tittle, description }, index) => (
                <CardCoreConcepts
                    key={index}
                    src={src}
                    tittle={tittle}
                    description={description}
                />
            ))}
        </div>
    </section>
    )
}

export default CoreConcepts;