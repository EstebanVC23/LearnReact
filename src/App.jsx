import "./App.css";
import reactObject from "./DataConcepts.js"; // Importación corregida
import Header from "./Components/Header.jsx";
import CoreConcepts from "./Components/CoreConcepts.jsx";

function App() {
    
    return (
        <div>
            <Header />
            <section id="CoreConcepts">
                <h2>Conceptos Clave</h2>
                <div className="CoreConcepts">
                    {reactObject.map(({ src, tittle, description }, index) => (
                        <CoreConcepts
                            key={index}
                            src={src}
                            tittle={tittle}
                            description={description}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}

export default App;
