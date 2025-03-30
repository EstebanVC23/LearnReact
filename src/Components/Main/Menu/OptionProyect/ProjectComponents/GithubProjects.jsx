import React from 'react';
import projects from './ProjectsGithub';

function GithubProjects() {

    return (
        <div className="github-projects">
            <h3 className="section-title">Proyectos React en GitHub</h3>
            
            <p>
                Explorar proyectos de código abierto es una excelente manera de aprender cómo los desarrolladores
                profesionales estructuran aplicaciones React a gran escala. Aquí hay una selección de proyectos
                educativos que puedes clonar y estudiar:
            </p>
            
            {projects.map((project, index) => (
                <div key={index} className="github-project-card">
                    <h4 className="project-title">{project.title}</h4>
                    <p className="project-description">{project.description}</p>
                    
                    <div className="tag-container">
                        {project.tags.map((tag, tagIndex) => (
                            <span key={tagIndex} className="tag">{tag}</span>
                        ))}
                    </div>
                    
                    <a 
                        href={project.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="github-link"
                    >
                        Ver en GitHub
                    </a>
                </div>
            ))}
            
            <div style={{ marginTop: '30px' }}>
                <h4>Recursos Adicionales</h4>
                <p>
                    Además de estos proyectos, te recomendamos revisar:
                </p>
                <ul>
                    <li>La documentación oficial de React: fuente definitiva para aprender React y sus patrones recomendados.</li>
                    <li>Ejemplos oficiales de Create React App: muestran cómo integrar React con diferentes tecnologías.</li>
                    <li>Repositorios de empresas tecnológicas como Airbnb, Facebook y Microsoft que han liberado componentes React o guías de estilo.</li>
                </ul>
            </div>
        </div>
    );
}

export default GithubProjects;