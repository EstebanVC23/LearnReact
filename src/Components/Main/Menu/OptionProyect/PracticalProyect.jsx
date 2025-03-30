import { useState } from 'react';
import ProjectStructure from './ProjectComponents/ProyectStructure';
import BestPractices from './ProjectComponents/BestPractices';
import FolderExplanation from './ProjectComponents/FolderExplanation';
import DevelopmentTools from './ProjectComponents/DevelopmentTools';
import GithubProjects from './ProjectComponents/GithubProjects';
import '../../../../Styles/Menu/OptionProyect/PracticalProject.css';

function PracticalProject() {
    const [activeSection, setActiveSection] = useState('structure');
    
    // Función para cambiar entre secciones
    const handleSectionChange = (section) => {
        setActiveSection(section);
    };
    
    // Renderizar la sección activa
    const renderSection = () => {
        switch(activeSection) {
            case 'structure':
                return <ProjectStructure />;
            case 'best-practices':
                return <BestPractices />;
            case 'folders':
                return <FolderExplanation />;
            case 'tools':
                return <DevelopmentTools />;
            case 'github':
                return <GithubProjects />;
            default:
                return <ProjectStructure />;
        }
    };
    
    return (
        <div className="practical-project">
            <h2>Proyecto Práctico en React</h2>
            <p className="intro-text">
                Aprende a estructurar y organizar proyectos de React siguiendo las mejores prácticas de la industria.
                Descubre cómo los desarrolladores profesionales organizan su código y explora proyectos reales.
            </p>
            
            <div className="project-nav">
                <button 
                    className={activeSection === 'structure' ? 'active' : ''} 
                    onClick={() => handleSectionChange('structure')}
                >
                    Estructura de Proyectos
                </button>
                <button 
                    className={activeSection === 'best-practices' ? 'active' : ''} 
                    onClick={() => handleSectionChange('best-practices')}
                >
                    Buenas Prácticas
                </button>
                <button 
                    className={activeSection === 'folders' ? 'active' : ''} 
                    onClick={() => handleSectionChange('folders')}
                >
                    Organización de Carpetas
                </button>
                <button 
                    className={activeSection === 'tools' ? 'active' : ''} 
                    onClick={() => handleSectionChange('tools')}
                >
                    Herramientas de Desarrollo
                </button>
                <button 
                    className={activeSection === 'github' ? 'active' : ''} 
                    onClick={() => handleSectionChange('github')}
                >
                    Proyectos en GitHub
                </button>
            </div>
            
            <div className="section-content">
                {renderSection()}
            </div>
        </div>
    );
}

export default PracticalProject;