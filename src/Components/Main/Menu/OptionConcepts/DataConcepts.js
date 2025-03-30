const reactObject = [
    {
        src: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png",
        tittle: "Componentes",
        description:
            "Los componentes son la base de React. Son bloques de construcción reutilizables que permiten crear interfaces de usuario complejas.",
    },
    {
        src: "https://cdn-icons-png.flaticon.com/512/2913/2913990.png",
        tittle: "Estado",
        description:
            "El estado es un objeto que representa la parte dinámica de un componente. Permite gestionar datos que pueden cambiar a lo largo del tiempo.",
    },
    {
        src: "https://cdn-icons-png.flaticon.com/512/1062/1062480.png",
        tittle: "Props",
        description:
            "Las props (propiedades) son una forma de pasar datos de un componente padre a un componente hijo. Permiten personalizar el comportamiento y la apariencia de los componentes.",
    },
    {
        src: "https://cdn-icons-png.flaticon.com/512/3798/3798385.png",
        tittle: "Ciclo de vida",
        description:
            "El ciclo de vida de un componente se refiere a las etapas por las que pasa desde su creación hasta su eliminación. React proporciona métodos para gestionar estas etapas.",
    },
    {
        src: "https://cdn-icons-png.flaticon.com/512/2841/2841771.png",
        tittle: "Hooks",
        description:
            "Los hooks son funciones que permiten utilizar el estado y otras características de React en componentes funcionales. Ejemplos populares son useState y useEffect.",
    },
    {
        src: "https://cdn-icons-png.flaticon.com/512/2777/2777075.png",
        tittle: "Eventos",
        description:
            "React maneja eventos de manera eficiente utilizando una sintaxis similar a JavaScript. Puedes agregar controladores de eventos a los elementos JSX.",
    },
    {
        src: "https://cdn-icons-png.flaticon.com/512/2772/2772309.png",
        tittle: "Renderizado condicional",
        description:
            "El renderizado condicional permite mostrar diferentes elementos o componentes según ciertas condiciones. Puedes usar operadores lógicos para lograrlo.",
    },
    {
        src: "https://cdn-icons-png.flaticon.com/512/3281/3281369.png",
        tittle: "Render props",
        description:
            "El patrón de render props permite compartir lógica entre componentes utilizando una función que devuelve un elemento React.",
    },
    {
        src: "https://cdn-icons-png.flaticon.com/512/2734/2734777.png",
        tittle: "Context API",
        description:
            "La Context API permite gestionar datos globales sin necesidad de prop drilling. Es útil para compartir información entre componentes sin pasar props manualmente.",
    },
    {
        src: "https://cdn-icons-png.flaticon.com/512/3665/3665923.png",
        tittle: "React Router",
        description:
            "React Router es una biblioteca que permite la navegación entre diferentes vistas de una aplicación React. Facilita la creación de aplicaciones de una sola página (SPA).",
    },
    {
        src: "https://cdn-icons-png.flaticon.com/512/2038/2038599.png",
        tittle: "Custom Hooks",
        description:
            "Los Custom Hooks son funciones que permiten reutilizar lógica de estado entre componentes. Son una forma de abstraer y compartir lógica compleja.",
    },
    {
        src: "https://cdn-icons-png.flaticon.com/512/2867/2867242.png",
        tittle: "UseMemo",
        description:
            "El hook useMemo memoriza valores calculados para optimizar el rendimiento. Evita cálculos innecesarios al recordar resultados previos.",
    },
    {
        src: "https://cdn-icons-png.flaticon.com/512/2656/2656404.png",
        tittle: "UseReducer",
        description:
            "El hook useReducer es una alternativa a useState para manejar lógica compleja. Permite gestionar el estado utilizando un reductor.",
    },
    {
        src: "https://cdn-icons-png.flaticon.com/512/2085/2085057.png",
        tittle: "UseEffect",
        description:
            "El hook useEffect permite manejar efectos secundarios como llamadas a API o suscripciones. Se ejecuta después de que el componente se haya renderizado.",
    },
    {
        src: "https://cdn-icons-png.flaticon.com/512/889/889648.png",
        tittle: "JSX",
        description:
            "JSX es una extensión de JavaScript que permite escribir estructuras HTML dentro de JavaScript. Facilita la creación de componentes y la legibilidad del código.",
    },
    {
        src: "https://cdn-icons-png.flaticon.com/512/4245/4245915.png",
        tittle: "Fragmentos",
        description:
            "Los fragmentos permiten agrupar múltiples elementos sin agregar nodos innecesarios al DOM.",
    },
    {
        src: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
        tittle: "Refs",
        description:
            "Los refs permiten acceder directamente a un elemento DOM dentro de un componente sin usar estados o props.",
    },
    {
        src: "https://cdn-icons-png.flaticon.com/512/992/992754.png",
        tittle: "Portales",
        description:
            "Los portales permiten renderizar un componente en un nodo diferente al del componente padre en el DOM.",
    },
    {
        src: "https://cdn-icons-png.flaticon.com/512/1903/1903162.png",
        tittle: "Error Boundaries",
        description:
            "Los Error Boundaries son componentes que capturan errores de JavaScript en cualquier parte del árbol de componentes React.",
    },
    {
        src: "https://cdn-icons-png.flaticon.com/512/4359/4359347.png",
        tittle: "Suspense",
        description:
            "Suspense permite manejar la carga de componentes asíncronos de forma sencilla. Es ideal para mejorar la experiencia del usuario en aplicaciones con datos dinámicos.",
    },
    {
        src: "https://cdn-icons-png.flaticon.com/512/3075/3075879.png",
        tittle: "Lazy Loading",
        description:
            "Lazy loading permite cargar componentes de manera diferida, optimizando el rendimiento y reduciendo el tiempo de carga inicial de la aplicación.",
    },
    {
        src: "https://cdn-icons-png.flaticon.com/512/2133/2133007.png",
        tittle: "StrictMode",
        description:
            "StrictMode es una herramienta para detectar problemas potenciales en la aplicación React, como prácticas obsoletas o inconsistencias en el código.",
    },
    {
        src: "https://cdn-icons-png.flaticon.com/512/2425/2425803.png",
        tittle: "Server Components",
        description:
            "Los Server Components son una característica que permite renderizar componentes en el servidor para optimizar el rendimiento y mejorar la carga inicial.",
    },
    {
        src: "https://cdn-icons-png.flaticon.com/512/4327/4327917.png",
        tittle: "Profiler",
        description:
            "El Profiler es una herramienta que ayuda a medir el rendimiento de los componentes React y analizar posibles cuellos de botella.",
    },
    {
        src: "https://cdn-icons-png.flaticon.com/512/1999/1999109.png",
        tittle: "Hydration",
        description:
            "Hydration sincroniza los componentes renderizados en el servidor con el cliente, facilitando aplicaciones isomórficas.",
    },
    {
        src: "https://cdn-icons-png.flaticon.com/512/1087/1087931.png",
        tittle: "Virtual DOM",
        description:
            "El Virtual DOM es una representación ligera del DOM real. React utiliza este concepto para optimizar actualizaciones y mejorar el rendimiento.",
    },
    {
        src: "https://cdn-icons-png.flaticon.com/512/3722/3722040.png",
        tittle: "Keys",
        description:
            "Las keys son atributos únicos utilizados por React para identificar elementos en una lista y mejorar la reconciliación.",
    },
    {
        src: "https://cdn-icons-png.flaticon.com/512/889/889514.png",
        tittle: "High-Order Components (HOC)",
        description:
            "Los HOC son funciones que toman un componente y devuelven uno nuevo, permitiendo reutilizar lógica entre componentes.",
    },
    {
        src: "https://cdn-icons-png.flaticon.com/512/1053/1053175.png",
        tittle: "Error Handling",
        description:
            "React incluye herramientas para manejar errores, como los Error Boundaries, que ayudan a capturar errores sin romper la aplicación.",
    },
    {
        src: "https://cdn-icons-png.flaticon.com/512/4228/4228819.png",
        tittle: "Reconciliation",
        description:
            "La reconciliación es el proceso mediante el cual React actualiza el Virtual DOM y luego sincroniza los cambios en el DOM real.",
    },
    {
        src: "https://cdn-icons-png.flaticon.com/512/2782/2782988.png",
        tittle: "Forward Refs",
        description:
            "Forward Refs permite pasar referencias directamente a un componente hijo, facilitando el acceso a nodos específicos del DOM.",
    },
    {
        src: "https://cdn-icons-png.flaticon.com/512/4116/4116173.png",
        tittle: "Prop Drilling",
        description:
            "El Prop Drilling ocurre cuando las props se pasan a través de múltiples niveles de componentes para llegar a un componente específico.",
    },
    {
        src: "https://cdn-icons-png.flaticon.com/512/3703/3703414.png",
        tittle: "Code Splitting",
        description:
            "Code Splitting es una técnica que divide el código en partes más pequeñas, cargándolas solo cuando se necesitan para mejorar el rendimiento.",
    },
    {
        src: "https://cdn-icons-png.flaticon.com/512/5698/5698528.png",
        tittle: "Immutable State",
        description:
            "El estado inmutable fomenta la creación de copias en lugar de modificar el estado original, lo que facilita el seguimiento de cambios y previene errores.",
    },
    {
        src: "https://cdn-icons-png.flaticon.com/512/4071/4071515.png",
        tittle: "Strict Rendering",
        description:
            "Strict Rendering ayuda a identificar problemas en el código al renderizar componentes de manera más estricta en el modo de desarrollo.",
    },
    {
        src: "https://cdn-icons-png.flaticon.com/512/2855/2855883.png",
        tittle: "DevTools",
        description:
            "React DevTools es una extensión que permite inspeccionar el árbol de componentes React y analizar su estado y props en tiempo real.",
    },
    {
        src: "https://cdn-icons-png.flaticon.com/512/1187/1187517.png",
        tittle: "Redux",
        description:
            "Redux es una biblioteca para la gestión global de estado. Aunque externa a React, se usa comúnmente con él para manejar aplicaciones grandes.",
    },
    {
        src: "https://cdn-icons-png.flaticon.com/512/4333/4333605.png",
        tittle: "Concurrent Mode",
        description: "El Concurrent Mode mejora la capacidad de respuesta de las aplicaciones, permitiendo que React pause y reanude tareas según sea necesario."
    },
    {
        src: "https://cdn-icons-png.flaticon.com/512/2645/2645897.png",
        tittle: "StrictMode Warning",
        description: "El modo estricto ayuda a detectar problemas potenciales en el código y a mejorar la consistencia de la aplicación a largo plazo."
    },
    {
        src: "https://cdn-icons-png.flaticon.com/512/3147/3147957.png",
        tittle: "Static Site Generation (SSG)",
        description: "La generación de sitios estáticos permite renderizar contenido en tiempo de compilación para mejorar el rendimiento y reducir la carga del servidor."
    }

];

export default reactObject;
