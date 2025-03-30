import "../../../../Styles/Menu/OptionHooks/HookContent.css";

function HookContent({ hook }) {
    return (
        <div className="hook-content">
            <h3 className="hook-name">{hook.name}</h3>
            <p className="hook-description">{hook.description}</p>

            {/* Sección de detalles adicionales */}
            {hook.details && hook.details.length > 0 && (
                <div className="hook-details">
                    <h4>Características</h4>
                    <ul>
                        {hook.details.map((detail, index) => (
                            <li key={index}>{detail}</li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Ejemplo de código */}
            {hook.example && (
                <div className="hook-example">
                    <h4>Ejemplo</h4>
                    <pre>
                        <code>{hook.example}</code>
                    </pre>
                </div>
            )}
        </div>
    );
}

export default HookContent;
