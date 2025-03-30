import "./App.css";
import ReactLogo from "./assets/react.svg";
import reactObject from "./DataConcepts.js"; // Importación corregida

const reactTitles = [
    "React Fundamentos",
    "React Avanzado",
    "React Router",
    "React Hooks",
    "React Context",
];

function getRamdomIntInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function Header() {
    const tittleWinner = reactTitles[getRamdomIntInRange(0, 4)];
    return (
        <header>
            <img src={ReactLogo} alt="React logo" />
            <h1>{tittleWinner}</h1>
            <p>
                ¡Conceptos fundamentales de React que necesitas conocer para
                desarrollar cualquier app con esta famosa librería!
            </p>
        </header>
    );
}

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
