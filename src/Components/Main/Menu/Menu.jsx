import TabButton from "./TabButton.jsx";

function Menu(){
    function handleClickMenu(selectedButton) {
        return (
            console.log(`Has seleccionado el botón: ${selectedButton}`)
        );
    }
    return(
        <section id = "ReactExamples">
                <h2>Ejemplos de React</h2>
                <menu>
                    <TabButton onClick={() => handleClickMenu("Componentes")}>Componentes</TabButton>
                    <TabButton onClick={() => handleClickMenu("Conceptos")}>Conceptos Clave</TabButton>
                    <TabButton onClick={() => handleClickMenu("Hooks")}>Hooks</TabButton>
                    <TabButton onClick={() => handleClickMenu("Estados")}>Estado y Props</TabButton>
                    <TabButton onClick={() => handleClickMenu("Eventos y Formularios")}>Eventos y Formularios</TabButton>
                    <TabButton onClick={() => handleClickMenu("Proyectos")}>Proyecto Práctico</TabButton>
                </menu>

        </section>    
    )
}

export default Menu;