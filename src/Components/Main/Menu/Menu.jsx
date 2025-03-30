import TabButton from "./TabButton.jsx";
import { useState } from "react";
import CoreConcepts from "./OptionConcepts/CoreConcepts.jsx";
import Hooks from "./OptionHooks/HooksMenu.jsx";
import EventsAndForms from "./OptionEventsAndForms/EventsForms.jsx";
import PracticalProject from "./OptionProyect/PracticalProyect.jsx";

function Menu(){
    const [selectedOption, setSelectedOption] = useState('Conceptos');

    function handleClickMenu(selectedButton) {
        setSelectedOption(selectedButton);
        console.log(`Has seleccionado el botón: ${selectedButton}`);
    }

    function renderSelectedOption() {
        switch (selectedOption) {
            case "Conceptos":
                return <CoreConcepts />;
            case "Hooks":
                return <Hooks />;
            case "Eventos y Formularios":
                return <EventsAndForms />;
            case "Proyectos":
                return <PracticalProject />;
            default:
                return null;
        }
    }

    return (
        <section id="ReactExamples">
            <h2>Ejemplos de React</h2>
            <menu>
                <TabButton 
                    isSelected={selectedOption === 'Conceptos'} 
                    onClick={() => handleClickMenu("Conceptos")}
                >
                    Conceptos Clave
                </TabButton>
                <TabButton 
                    isSelected={selectedOption === 'Hooks'} 
                    onClick={() => handleClickMenu("Hooks")}
                >
                    Hooks
                </TabButton>
                <TabButton 
                    isSelected={selectedOption === 'Eventos y Formularios'} 
                    onClick={() => handleClickMenu("Eventos y Formularios")}
                >
                    Eventos y Formularios
                </TabButton>
                <TabButton 
                    isSelected={selectedOption === 'Proyectos'} 
                    onClick={() => handleClickMenu("Proyectos")}
                >
                    Proyecto Práctico
                </TabButton>
            </menu>

            {/* Sección para mostrar el componente seleccionado */}
            <div className="tab-content">
                {renderSelectedOption()}
            </div>
        </section>
    );
}

export default Menu;