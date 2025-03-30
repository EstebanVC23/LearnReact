import React from 'react';

function BestPractices() {
    return (
        <div className="best-practices">
            <h3 className="section-title">Buenas Prácticas en React</h3>
            
            <div className="best-practice-item">
                <h4 className="best-practice-title">Componentización Efectiva</h4>
                <p>
                    Divide tu interfaz en componentes pequeños y reutilizables con responsabilidades claras.
                    Sigue el principio de responsabilidad única: cada componente debe hacer una sola cosa y hacerla bien.
                </p>
                <p>
                    <strong>Consejo:</strong> Si un componente supera las 250-300 líneas, probablemente debería dividirse.
                </p>
            </div>
            
            <div className="best-practice-item">
                <h4 className="best-practice-title">Manejo de Estado</h4>
                <p>
                    Utiliza el estado local para datos que solo pertenecen a un componente,
                    y soluciones como Context API o Redux para estado global compartido entre múltiples componentes.
                </p>
                <p>
                    Evita el "prop drilling" excesivo (pasar props a través de múltiples niveles de componentes).
                    Usa state managers como Zustand o Redux para aplicaciones complejas.
                </p>
            </div>
            
            <div className="best-practice-item">
                <h4 className="best-practice-title">Utiliza Componentes Funcionales y Hooks</h4>
                <p>
                    Prioriza componentes funcionales con hooks sobre componentes de clase.
                    Los hooks como useState, useEffect, useCallback y useMemo te permiten
                    gestionar el estado y efectos secundarios de forma más clara.
                </p>
                <p>
                    Crea hooks personalizados para reutilizar lógica entre componentes.
                </p>
            </div>
            
            <div className="best-practice-item">
                <h4 className="best-practice-title">Rendimiento</h4>
                <p>
                    Evita renderizados innecesarios utilizando React.memo, useMemo y useCallback cuando sea apropiado.
                    Implementa "lazy loading" para componentes pesados o que no son inmediatamente necesarios.
                </p>
                <p>
                    <strong>Consejo:</strong> No optimices prematuramente. Primero mide, luego optimiza.
                </p>
            </div>
            
            <div className="best-practice-item">
                <h4 className="best-practice-title">Testing</h4>
                <p>
                    Escribe tests unitarios para tus componentes y hooks utilizando herramientas como Jest y React Testing Library.
                    Implementa tests de integración para flujos críticos de la aplicación.
                </p>
                <p>
                    Adopta Test-Driven Development (TDD) cuando sea posible.
                </p>
            </div>
            
            <div className="best-practice-item">
                <h4 className="best-practice-title">Separación de Lógica y UI</h4>
                <p>
                    Separa la lógica de negocio de los componentes de UI.
                    Utiliza custom hooks para encapsular lógica compleja, dejando tus componentes
                    enfocados principalmente en renderizar la interfaz.
                </p>
            </div>
            
            <div className="best-practice-item">
                <h4 className="best-practice-title">Consistencia en el Código</h4>
                <p>
                    Utiliza herramientas como ESLint, Prettier y TypeScript para mantener
                    la calidad y consistencia del código.
                </p>
                <p>
                    Establece y documenta convenciones de nomenclatura para archivos, componentes y funciones.
                </p>
            </div>
        </div>
    );
}

export default BestPractices;