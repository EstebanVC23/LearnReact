import { useState } from "react";
import "../../../../Styles/Menu/OptionEventsForms/Events_Forms.css";
import formSlides from "./DataForms";

function FormExplanation() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % formSlides.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + formSlides.length) % formSlides.length);

    return (
        <div className="carousel-container">
            <div className="slide">
                <div className="carousel-buttons">
                <button onClick={prevSlide}>⬅ Anterior</button>
                <button onClick={nextSlide}>Siguiente ➡</button>
            </div>
                <h2>{formSlides[currentSlide].title}</h2>
                <p>{formSlides[currentSlide].content}</p>

                

                <pre><code>{formSlides[currentSlide].code}</code></pre>
            </div>
            
        </div>
    );
}

export default FormExplanation;
