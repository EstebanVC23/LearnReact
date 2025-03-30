const hooksData = [
    {
        name: "useState",
        description: "Permite manejar el estado local en componentes funcionales. Es útil para valores que cambian dinámicamente, como entradas del usuario, contadores o estados de formularios.",
        details: [
            "Devuelve un array con dos elementos: el valor actual del estado y una función para actualizarlo.",
            "Cada cambio en el estado desencadena un re-render del componente.",
            "El estado puede ser de cualquier tipo, como números, cadenas, objetos o arrays.",
            "Puedes usar múltiples instancias de useState en un solo componente."
        ],
        example: `
        import { useState } from 'react';

        function Counter() {
            const [count, setCount] = useState(0);

            const increment = () => setCount(count + 1);
            const decrement = () => setCount(count - 1);

            return (
                <div>
                    <h3>Contador: {count}</h3>
                    <button onClick={increment}>Incrementar</button>
                    <button onClick={decrement}>Decrementar</button>
                </div>
            );
        }
        `
    },
    {
        name: "useEffect",
        description: "Se utiliza para manejar efectos secundarios, como solicitudes a APIs, suscripciones a eventos, actualizaciones de DOM o temporizadores.",
        details: [
            "Recibe dos parámetros: una función que define el efecto y un array de dependencias opcional.",
            "Si el array de dependencias está vacío ([]), el efecto solo se ejecuta al montar el componente.",
            "Es posible incluir una función de limpieza (cleanup) para desuscribir eventos o liberar recursos al desmontar el componente.",
            "Se ejecuta después del renderizado inicial y después de actualizar las dependencias especificadas."
        ],
        example: `
        import { useEffect, useState } from 'react';

        function Clock() {
            const [time, setTime] = useState(new Date().toLocaleTimeString());

            useEffect(() => {
                const interval = setInterval(() => {
                    setTime(new Date().toLocaleTimeString());
                }, 1000);

                return () => clearInterval(interval); // Limpieza del efecto
            }, []);

            return <p>Hora actual: {time}</p>;
        }
        `
    },
    {
        name: "useContext",
        description: "Facilita el acceso a valores almacenados en un contexto de React, evitando pasar props manualmente a través de varios niveles del árbol de componentes.",
        details: [
            "Funciona junto con createContext para definir el contexto.",
            "Permite que los componentes consuman datos directamente desde un proveedor (Provider).",
            "Es útil para compartir temas de diseño, autenticación, configuraciones globales, y más.",
            "Elimina la necesidad del 'prop drilling', donde las props se pasan manualmente a través de varios niveles."
        ],
        example: `
        import { createContext, useContext } from 'react';

        const ThemeContext = createContext('light');

        function ThemeDisplay() {
            const theme = useContext(ThemeContext);
            return <p>El tema actual es: {theme}</p>;
        }

        function App() {
            return (
                <ThemeContext.Provider value="dark">
                    <ThemeDisplay />
                </ThemeContext.Provider>
            );
        }
        `
    },
    {
        name: "useRef",
        description: "Proporciona una referencia mutable que persiste entre renderizados. Es útil para manejar elementos del DOM directamente o almacenar valores que no desencadenan re-renders.",
        details: [
            "Devuelve un objeto con una propiedad current que contiene el valor referenciado.",
            "Ideal para manejar elementos DOM (por ejemplo, enfocar un input o controlar un video).",
            "También se puede usar para almacenar valores persistentes entre renderizados.",
            "No causa un re-render del componente cuando se actualiza."
        ],
        example: `
        import { useRef } from 'react';

        function FocusInput() {
            const inputRef = useRef(null);

            const handleFocus = () => {
                inputRef.current.focus(); // Enfoca el input
            };

            return (
                <div>
                    <input ref={inputRef} type="text" placeholder="Haz clic para enfocar" />
                    <button onClick={handleFocus}>Enfocar</button>
                </div>
            );
        }
        `
    },
    {
        name: "useReducer",
        description: "Una alternativa más potente a useState para manejar estados complejos con lógica avanzada. Utiliza un patrón basado en reducers para actualizar el estado.",
        details: [
            "El reducer es una función pura que toma el estado actual y una acción, y devuelve un nuevo estado.",
            "Se utiliza en aplicaciones más avanzadas donde el estado incluye múltiples valores relacionados.",
            "Es similar al enfoque de Redux, pero más simple y enfocado dentro del componente.",
            "Devuelve el estado actual y una función dispatch para enviar acciones."
        ],
        example: `
        import { useReducer } from 'react';

        function reducer(state, action) {
            switch (action.type) {
                case 'increment':
                    return { count: state.count + 1 };
                case 'decrement':
                    return { count: state.count - 1 };
                default:
                    return state;
            }
        }

        function Counter() {
            const [state, dispatch] = useReducer(reducer, { count: 0 });

            return (
                <div>
                    <p>Contador: {state.count}</p>
                    <button onClick={() => dispatch({ type: 'increment' })}>Incrementar</button>
                    <button onClick={() => dispatch({ type: 'decrement' })}>Decrementar</button>
                </div>
            );
        }
        `
    },
    {
        name: "useMemo",
        description: "Optimiza el rendimiento al memorizar valores calculados. Recalcula el valor solo cuando cambian sus dependencias.",
        details: [
            "Recibe dos parámetros: una función para realizar el cálculo y un array de dependencias.",
            "Evita que cálculos costosos se ejecuten innecesariamente.",
            "Es útil para optimizar componentes que requieren cálculos intensivos o listas filtradas.",
            "La memoria de los valores mejora el rendimiento general en aplicaciones grandes."
        ],
        example: `
        import { useMemo, useState } from 'react';

        function ExpensiveCalculation() {
            const [number, setNumber] = useState(10);
            const [factor, setFactor] = useState(2);

            const result = useMemo(() => {
                console.log("Realizando cálculo...");
                return number * factor;
            }, [number, factor]);

            return (
                <div>
                    <p>Resultado: {result}</p>
                    <button onClick={() => setNumber(number + 1)}>Incrementar número</button>
                    <button onClick={() => setFactor(factor + 1)}>Incrementar factor</button>
                </div>
            );
        }
        `
    },
    {
        name: "useCallback",
        description: "Memoriza funciones para evitar que se redefinan en cada render. Es especialmente útil cuando las funciones se pasan como props a componentes hijos.",
        details: [
            "Evita que se creen nuevas instancias de funciones en cada renderizado.",
            "Se utiliza junto con dependencias para controlar cuándo se vuelve a definir la función.",
            "Útil para optimizar el rendimiento en componentes envueltos en React.memo.",
            "Mejora la estabilidad y el comportamiento predecible de los componentes hijos."
        ],
        example: `
        import { useCallback, useState } from 'react';

        function ParentComponent() {
            const [count, setCount] = useState(0);

            const increment = useCallback(() => {
                setCount((prev) => prev + 1);
            }, []);

            return (
                <div>
                    <ChildComponent onIncrement={increment} />
                    <p>Contador: {count}</p>
                </div>
            );
        }

        function ChildComponent({ onIncrement }) {
            console.log("Renderizando ChildComponent...");
            return <button onClick={onIncrement}>Incrementar</button>;
        }
        `
    }
];
export default hooksData;
