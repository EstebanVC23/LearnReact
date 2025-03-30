const slides = [
    {
        title: "Manejo de Eventos en React",
        content: "En React, los eventos se manejan utilizando camelCase y pasando funciones en lugar de strings como en HTML. Esto asegura un manejo más eficiente y controlado de los eventos.",
        code: "function ButtonClick() {\n    const handleClick = () => alert('¡Botón clickeado!');\n    return <button onClick={handleClick}>Haz clic</button>;\n}"
    },
    {
        title: "Eventos con Parámetros",
        content: "Para pasar parámetros en eventos, usamos funciones anónimas o el método bind(). Esto nos permite incluir datos específicos en la función manejadora del evento.",
        code: "function ButtonWithParam() {\n    const showMessage = (message) => alert(message);\n    return <button onClick={() => showMessage('¡Hola desde React!')}>Haz clic</button>;\n}"
    },
    {
        title: "Eventos de Teclado",
        content: "React permite manejar eventos de teclado como onKeyDown, onKeyPress y onKeyUp para responder a interacciones del usuario.",
        code: "function KeyPressHandler() {\n    const handleKeyPress = (event) => {\n        alert('Tecla presionada: ' + event.key);\n    };\n\n    return <input type='text' onKeyPress={handleKeyPress} placeholder='Escribe algo...' />;\n}"
    },
    {
        title: "Eventos de Enfoque y Desenfoque",
        content: "onFocus y onBlur se utilizan para manejar cuándo un elemento recibe o pierde el enfoque.",
        code: "function FocusBlurHandler() {\n    const handleFocus = () => alert('Elemento enfocado');\n    const handleBlur = () => alert('Elemento desenfocado');\n\n    return <input type='text' onFocus={handleFocus} onBlur={handleBlur} placeholder='Haz clic aquí...' />;\n}"
    },
    {
        title: "Eventos de Cambio",
        content: "onChange se usa para capturar los cambios en los elementos de entrada, como campos de texto y selectores.",
        code: "function ChangeHandler() {\n    const handleChange = (event) => {\n        alert('Valor cambiado: ' + event.target.value);\n    };\n\n    return <input type='text' onChange={handleChange} placeholder='Escribe algo...' />;\n}"
    },
    {
        title: "Eventos de Mouse",
        content: "React incluye eventos de mouse como onClick, onMouseOver y onMouseOut para manejar interacciones con el puntero.",
        code: "function MouseHandler() {\n    const handleMouseOver = () => alert('Mouse encima del elemento');\n    return <div onMouseOver={handleMouseOver} style={{ width: '200px', height: '200px', background: 'lightblue' }}>Pasa el mouse aquí</div>;\n}"
    },
    {
        title: "Eventos de Formulario",
        content: "Eventos como onSubmit se usan para manejar el envío de formularios y realizar validaciones personalizadas.",
        code: "function FormSubmitHandler() {\n    const handleSubmit = (event) => {\n        event.preventDefault();\n        alert('Formulario enviado.');\n    };\n\n    return <form onSubmit={handleSubmit}>\n        <input type='text' placeholder='Nombre' />\n        <button type='submit'>Enviar</button>\n    </form>;\n}"
    },
    {
        title: "Eventos de Propagación",
        content: "La propagación de eventos puede manejarse mediante event.stopPropagation() o event.preventDefault().",
        code: "function PropagationHandler() {\n    const handleOuterClick = () => alert('Div externo clickeado');\n    const handleInnerClick = (event) => {\n        event.stopPropagation();\n        alert('Div interno clickeado');\n    };\n\n    return (\n        <div onClick={handleOuterClick} style={{ padding: '20px', background: 'lightgray' }}>\n            <div onClick={handleInnerClick} style={{ padding: '10px', background: 'white' }}>Clic en el interior</div>\n        </div>\n    );\n}"
    },
    {
        title: "Eventos Personalizados",
        content: "Puedes crear eventos personalizados usando funciones para disparar comportamientos específicos.",
        code: "function CustomEvent() {\n    const handleCustomEvent = () => alert('Evento personalizado activado');\n    return <button onClick={handleCustomEvent}>Evento personalizado</button>;\n}"
    },
    {
        title: "Eventos Asíncronos",
        content: "Puedes manejar lógica asíncrona dentro de eventos utilizando funciones async/await.",
        code: "function AsyncEventHandler() {\n    const fetchData = async () => {\n        const data = await fetch('https://jsonplaceholder.typicode.com/posts/1');\n        const json = await data.json();\n        alert('Datos recibidos: ' + JSON.stringify(json));\n    };\n\n    return <button onClick={fetchData}>Cargar datos</button>;\n}"
    }
];

export default slides;