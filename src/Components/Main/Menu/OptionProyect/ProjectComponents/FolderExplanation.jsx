import React from 'react';
import folders from "./FoldersExplore"

function FolderExplanation() {

    return (
        <div className="folder-explanation">
            <h3 className="section-title">Organización de Carpetas</h3>
            
            <p>
                La estructura de carpetas juega un papel crucial en la mantenibilidad de tu proyecto.
                Cada carpeta tiene un propósito específico y comprenderlo te ayudará a organizar tu código
                de manera eficiente.
            </p>
            
            {folders.map((folder, index) => (
                <div key={index} className="folder-container">
                    <h4 className="folder-name">{folder.name}</h4>
                    <p className="folder-description">{folder.description}</p>
                    
                    <div className="code-folder">
                        {folder.example}
                    </div>
                </div>
            ))}
            
            <p>
                Esta organización puede adaptarse según las necesidades específicas de tu proyecto.
                Lo importante es mantener una estructura consistente y que el equipo entienda claramente
                dónde debe ir cada tipo de archivo.
            </p>
        </div>
    );
}

export default FolderExplanation;