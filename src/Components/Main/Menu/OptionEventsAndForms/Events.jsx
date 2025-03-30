import { useState } from "react";
import "../../../../Styles/Menu/OptionEventsForms/Events_Forms.css";
import eventSlides from "./DataEvents";

function EventExplanation() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % eventSlides.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + eventSlides.length) % eventSlides.length);

    return (
        <div className="carousel-container">
            <div className="slide">

                <div className="carousel-buttons">
                    <button onClick={prevSlide}>⬅ Anterior</button>
                    <button onClick={nextSlide}>Siguiente ➡</button>
                </div>

                <h2>{eventSlides[currentSlide].title}</h2>
                <p>{eventSlides[currentSlide].content}</p>
                <pre><code>{eventSlides[currentSlide].code}</code></pre>
            </div>
           
        </div>
    );
}

export default EventExplanation;
