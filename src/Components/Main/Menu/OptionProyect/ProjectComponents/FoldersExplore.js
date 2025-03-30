const folders = [
    {
        name: "components/",
        description: "Contiene componentes reutilizables que pueden usarse en múltiples partes de la aplicación. Cada componente debería tener su propia carpeta con archivos relacionados.",
        example: `components/
├── Button/
│   ├── Button.jsx      # Componente principal
│   ├── Button.test.jsx # Tests unitarios
│   ├── Button.module.css # Estilos específicos
│   └── index.js        # Exportación
├── Card/
└── ...`
    },
    {
        name: "pages/",
        description: "Alberga componentes que representan páginas enteras y normalmente están conectados directamente con rutas. Cada página puede usar múltiples componentes.",
        example: `pages/
├── Home/
│   ├── Home.jsx
│   └── Home.module.css
├── Dashboard/
│   ├── Dashboard.jsx
│   └── components/     # Componentes específicos de esta página
│       ├── DashboardHeader.jsx
│       └── ...
└── ...`
    },
    {
        name: "hooks/",
        description: "Contiene hooks personalizados que encapsulan y reutilizan lógica entre componentes.",
        example: `hooks/
├── useForm.js     # Hook para manejar formularios
├── useFetch.js    # Hook para realizar peticiones HTTP
├── useLocalStorage.js
└── ...`
    },
    {
        name: "context/",
        description: "Almacena contextos de React (Context API) para manejar estado global o proveedores de temas.",
        example: `context/
├── AuthContext.jsx    # Contexto para autenticación
├── ThemeContext.jsx   # Contexto para tema de la aplicación
└── ...`
    },
    {
        name: "services/",
        description: "Contiene funciones y clases para interactuar con servicios externos como APIs o Firebase.",
        example: `services/
├── api/
│   ├── client.js     # Configuración de cliente HTTP
│   ├── endpoints.js  # Definición de endpoints
│   └── users.js      # Métodos específicos para usuarios
├── firebase/
│   ├── config.js
│   └── auth.js
└── ...`
    },
    {
        name: "utils/",
        description: "Alberga funciones utilitarias reutilizables que no están directamente relacionadas con React.",
        example: `utils/
├── formatters.js   # Funciones para formatear datos
├── validators.js   # Funciones de validación
├── constants.js    # Constantes de la aplicación
└── ...`
    },
    {
        name: "assets/",
        description: "Contiene recursos estáticos como imágenes, fuentes, archivos SVG, etc.",
        example: `assets/
├── images/
│   ├── logo.svg
│   └── ...
├── fonts/
└── icons/`
    },
    {
        name: "styles/",
        description: "Almacena estilos globales, variables, mixins y temas.",
        example: `styles/
├── global.css      # Estilos globales
├── variables.css   # Variables CSS o SCSS
├── themes/         # Definiciones de temas
└── ...`
    },
];

export default folders;