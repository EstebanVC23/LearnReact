import { useState } from 'react';
import hooksData from './DataHooks';
import HookTab from './HookTab';
import HookContent from './HookContent';
import "../../../../Styles/Menu/OptionHooks/HooksMenu.css";

function HooksTabs() {
    const [activeHook, setActiveHook] = useState(hooksData[0]);
    
    return (
        <section id="HooksTabs">
            {/* Introducción: ¿Qué es un Hook? */}
            <h2 className='Subtitulo'>¿Qué es un Hook?</h2>
            <p className='Paragraph'>
                Un hook en React es una función especial que permite utilizar características como el estado y el ciclo de vida 
                dentro de componentes funcionales, haciéndolos más poderosos y reutilizables. Los hooks transforman el flujo de desarrollo 
                al simplificar la lógica y promover la reutilización de código.
            </p>

            {/* Nueva Sección: Características de los Hooks */}
            <div className="features-section">
                <h2 className='Subtitulo'>Características de los Hooks</h2>
                <ul className='FeaturesList'>
                    <li>Permiten usar el estado en componentes funcionales con <code>useState</code>.</li>
                    <li>Manejan efectos secundarios como solicitudes a API o actualizaciones de DOM con <code>useEffect</code>.</li>
                    <li>Facilitan el acceso y la administración de contexto con <code>useContext</code>.</li>
                    <li>Promueven la creación de lógica reusable mediante hooks personalizados.</li>
                    <li>Hacen que los componentes sean más simples y fáciles de probar.</li>
                </ul>
            </div>

            {/* Tabs para navegar entre diferentes hooks */}
            <div className="tabs-container">
                <div className="tabs">
                    {hooksData.map((hook) => (
                        <HookTab 
                            key={hook.name} 
                            hook={hook} 
                            isActive={activeHook.name === hook.name} 
                            onClick={() => setActiveHook(hook)}
                        />
                    ))}
                </div>
                <HookContent hook={activeHook} />
            </div>
        </section>
    );
}

export default HooksTabs;