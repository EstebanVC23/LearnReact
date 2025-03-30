import reactImage from "./assets/react.svg";
import "./App.css";

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
            <img src={reactImage} alt="React logo" />
            <h1>{tittleWinner}</h1>
            <p>
                ¡Conceptos fundamentales de React que necesitas conocer para
                desarrollar cualquier app con esta famosa librería!
            </p>
        </header>
    );
}

function CoreConcepts(props) {
    return (
        <div className="Card">
            <img className= "imgprop"src={props.src} alt="..." />
            <h3 className= "h3prop">{props.tittle}</h3>
            <p className= "pprop">{props.description}</p>
        </div>
    )
}

function App() {
    return (
        <div>
            <Header />
            <section id= "CoreConcepts">
                <h2>Conceptos Clave</h2>
                <div className="CoreConcepts">
                <CoreConcepts
                    src="https://cdn-icons-png.flaticon.com/512/2462/2462719.png"
                    tittle="Componentes"
                    description="Los componentes permiten reutilizar código y dividen la UI en partes más manejables."
                />
                <CoreConcepts
                    src="https://cdn-icons-png.flaticon.com/512/919/919828.png"
                    tittle="JSX"
                    description="JSX es una extensión de JavaScript que facilita la escritura de estructuras HTML en React."
                />
                <CoreConcepts
                    src="https://cdn-icons-png.flaticon.com/512/1197/1197467.png"
                    tittle="Props"
                    description="Las props permiten pasar datos de un componente padre a un componente hijo en React."
                />
                <CoreConcepts
                    src="https://cdn-icons-png.flaticon.com/512/3199/3199875.png"
                    tittle="Estado"
                    description="El estado permite que un componente administre datos dinámicos y responda a eventos."
                />
                <CoreConcepts
                    src="https://cdn-icons-png.flaticon.com/512/7859/7859007.png"
                    tittle="Eventos"
                    description="React maneja eventos de manera eficiente utilizando sintaxis similar a JavaScript."
                />
                <CoreConcepts
                    src="https://cdn-icons-png.flaticon.com/512/3004/3004625.png"
                    tittle="Hooks"
                    description="Los Hooks permiten usar estado y otras características de React sin escribir una clase."
                />
                <CoreConcepts
                    src="https://cdn-icons-png.flaticon.com/512/3659/3659896.png"
                    tittle="UseEffect"
                    description="El Hook useEffect permite manejar efectos secundarios como llamadas a API o suscripciones."
                />
                <CoreConcepts
                    src="https://cdn-icons-png.flaticon.com/512/897/897024.png"
                    tittle="React Router"
                    description="React Router permite la navegación entre diferentes vistas de una aplicación React."
                />
                <CoreConcepts
                    src="https://cdn-icons-png.flaticon.com/512/3039/3039569.png"
                    tittle="Context API"
                    description="La Context API proporciona una forma de gestionar datos globales sin prop drilling."
                />
                <CoreConcepts
                    src="https://cdn-icons-png.flaticon.com/512/3532/3532751.png"
                    tittle="UseState"
                    description="El Hook useState permite gestionar el estado local en componentes funcionales."
                />
                <CoreConcepts
                    src="https://cdn-icons-png.flaticon.com/512/4305/4305640.png"
                    tittle="UseMemo"
                    description="UseMemo optimiza el rendimiento memorizando valores costosos de calcular."
                />
                <CoreConcepts
                    src="https://cdn-icons-png.flaticon.com/512/857/857678.png"
                    tittle="UseReducer"
                    description="UseReducer es una alternativa avanzada a useState para manejar lógica compleja."
                />
                <CoreConcepts
                    src="https://cdn-icons-png.flaticon.com/512/3361/3361556.png"
                    tittle="Custom Hooks"
                    description="Los Custom Hooks permiten reutilizar lógica de estado entre componentes."
                />
                <CoreConcepts
                    src="https://cdn-icons-png.flaticon.com/512/1904/1904425.png"
                    tittle="Renderizado Condicional"
                    description="React permite renderizar elementos basados en condiciones usando operadores lógicos."
                />
                <CoreConcepts
                    src="https://cdn-icons-png.flaticon.com/512/679/679922.png"
                    tittle="Render Props"
                    description="Render Props es un patrón avanzado para compartir lógica entre componentes."
                />
                </div>
            </section>
            
            <main>
                <h2>¡Comenzamos Picando Código en React!</h2>
            </main>
        </div>
    );
}

export default App;
