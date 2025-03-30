import React from "react";

function ProjectStructure() {
    return (
        <div className="project-structure">
            <h3 className="section-title">Estructura de Proyectos en React</h3>

            <p>
                Una buena estructura de proyecto te ayuda a mantener el código
                organizado, facilita la colaboración entre desarrolladores y
                hace que tu aplicación sea escalable. React no impone una
                estructura específica, pero hay patrones ampliamente adoptados
                por la comunidad.
            </p>

            <div className="code-folder">
                {`src/
├── assets/       # Estáticos: imágenes, fuentes, etc.
├── components/   # Componentes compartidos
│   ├── Button/
│   ├── Card/
│   └── ...
├── pages/        # Componentes de página/rutas
├── layouts/      # Estructuras de página reutilizables
├── hooks/        # Custom hooks
├── context/      # Contextos de React
├── services/     # Servicios externos, API calls
├── utils/        # Funciones de utilidad
├── store/        # Estado global (Redux, Zustand, etc.)
├── styles/       # Estilos globales
├── App.jsx       # Componente raíz
└── main.jsx      # Punto de entrada`}
            </div>

            <h4>Principios de Organización</h4>
            <ul>
                <li>
                    <strong>Modularidad:</strong> Divide tu aplicación en
                    módulos independientes que puedan ser desarrollados y
                    probados de forma aislada.
                </li>
                <li>
                    <strong>Cohesión:</strong> Agrupar archivos relacionados
                    para facilitar la navegación y entendimiento del código.
                </li>
                <li>
                    <strong>Separación de Responsabilidades:</strong> Cada
                    componente o módulo debe tener una responsabilidad única y
                    bien definida.
                </li>
                <li>
                    <strong>Escalabilidad:</strong> La estructura debe permitir
                    que el proyecto crezca sin volverse inmanejable.
                </li>
            </ul>

            <p>
                Para proyectos más grandes, considera una organización por
                características (feature-based) en lugar de por tipos de
                archivo:
            </p>

            <div className="code-folder">
                {`src/
├── features/
│   ├── authentication/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   └── store/
│   ├── dashboard/
│   ├── settings/
│   └── ...
├── shared/       # Componentes y utilidades compartidas
└── ...`}
            </div>
        </div>
    );
}

export default ProjectStructure;
