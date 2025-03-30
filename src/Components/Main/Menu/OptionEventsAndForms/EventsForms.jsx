import Events from "./Events.jsx";
import Forms from "./Forms.jsx";
import "../../../../Styles/Menu/OptionEventsForms/EventsForms.css";


function EventsForms() {
    return (
        <section id="EventsForms">
            <h3>Eventos y Formularios</h3>
            <div className="EventsForms">
                <Events />
                <Forms />
            </div>
        </section>
    );
}

export default EventsForms;