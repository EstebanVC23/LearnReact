import CoreConcepts from "./CoreConcepts"
import reactObject from "../DataConcepts.js"; // Importación corregida
import "../Styles/Main.css"

function Main(){
    return (
        <main>
                <h2 className="Subtitulo">ReactJS</h2>
                <p className="parrafo">
                    React es una biblioteca de JavaScript para construir
                    interfaces de usuario. Permite crear aplicaciones web
                    interactivas y dinámicas de manera eficiente.
                    React utiliza un enfoque basado en componentes, lo que
                    facilita la reutilización del código y la gestión del estado
                    de la aplicación.
                </p>
                <p className="parrafo">
                    React es mantenido por Facebook y cuenta con una gran
                    comunidad de desarrolladores que contribuyen a su
                    evolución.
                </p>
                <p className="parrafo">
                    React es una biblioteca de JavaScript para construir
                    interfaces de usuario. Permite crear aplicaciones web
                    interactivas y dinámicas de manera eficiente.
                    React utiliza un enfoque basado en componentes, lo que
                    facilita la reutilización del código y la gestión del estado
                    de la aplicación.
                </p>
                <p className="parrafo">
                    En esta página encontrarás una breve descripción de los
                    conceptos clave de React.
                    Si deseas profundizar en cada uno de ellos, puedes
                    consultar la documentación oficial de React.
                    También puedes encontrar tutoriales y ejemplos prácticos en
                    línea.
                </p>
                    
                <p className="parrafo">    
                    ¡Espero que esta información te sea útil y te ayude a
                    comprender mejor React!
                    Si tienes alguna pregunta o comentario, no dudes en
                    contactarme.
                    ¡Gracias por visitar mi página sobre React!
                </p>

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
            </main>
    )
}

export default Main;