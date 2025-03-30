const slides = [
    {
        title: "Manejo de Formularios en React",
        content: "En React, los formularios se manejan con el estado para controlar los valores de entrada.",
        code: "import { useState } from 'react';\n\nfunction ControlledForm() {\n    const [name, setName] = useState('');\n\n    const handleSubmit = (e) => {\n        e.preventDefault();\n        alert('Nombre enviado: ' + name);\n    };\n\n    return (\n        <form onSubmit={handleSubmit}>\n            <input type='text' value={name} onChange={(e) => setName(e.target.value)} />\n            <button type='submit'>Enviar</button>\n        </form>\n    );\n}"
    },
    {
        title: "Componentes No Controlados",
        content: "Los formularios no controlados usan referencias (useRef) en lugar del estado.",
        code: "import { useRef } from 'react';\n\nfunction UncontrolledForm() {\n    const inputRef = useRef();\n\n    const handleSubmit = (e) => {\n        e.preventDefault();\n        alert('Nombre enviado: ' + inputRef.current.value);\n    };\n\n    return (\n        <form onSubmit={handleSubmit}>\n            <input type='text' ref={inputRef} />\n            <button type='submit'>Enviar</button>\n        </form>\n    );\n}"
    },
    {
        title: "Validación de Formularios",
        content: "La validación se puede implementar manejando el estado y verificando condiciones antes de enviar el formulario.",
        code: "import { useState } from 'react';\n\nfunction ValidatedForm() {\n    const [email, setEmail] = useState('');\n    const [error, setError] = useState('');\n\n    const handleSubmit = (e) => {\n        e.preventDefault();\n        if (!email.includes('@')) {\n            setError('Correo inválido');\n        } else {\n            alert('Correo enviado: ' + email);\n        }\n    };\n\n    return (\n        <form onSubmit={handleSubmit}>\n            <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />\n            {error && <p>{error}</p>}\n            <button type='submit'>Enviar</button>\n        </form>\n    );\n}"
    },
    {
        title: "Uso de Bibliotecas para Formularios",
        content: "Puedes usar bibliotecas como Formik o React Hook Form para simplificar la gestión de formularios.",
        code: "import { useForm } from 'react-hook-form';\n\nfunction HookForm() {\n    const { register, handleSubmit } = useForm();\n\n    const onSubmit = (data) => {\n        alert('Datos enviados: ' + JSON.stringify(data));\n    };\n\n    return (\n        <form onSubmit={handleSubmit(onSubmit)}>\n            <input {...register('name')} placeholder='Nombre' />\n            <input {...register('email')} placeholder='Correo' type='email' />\n            <button type='submit'>Enviar</button>\n        </form>\n    );\n}"
    },
    {
        title: "Formulario Básico",
        content: "Un formulario básico incluye elementos de entrada como campos de texto, botones y etiquetas.",
        code: "<form>\n    <label for='name'>Nombre:</label>\n    <input type='text' id='name' name='name' />\n    <button type='submit'>Enviar</button>\n</form>"
    },
    {
        title: "Métodos de Envío",
        content: "Los formularios HTML usan los métodos HTTP GET o POST para enviar datos.",
        code: "<form method='POST' action='/submit'>\n    <input type='text' name='data' />\n    <button type='submit'>Enviar</button>\n</form>"
    },
    {
        title: "Tipos de Formularios",
        content: "Existen formularios de registro, inicio de sesión, búsqueda, y contacto, entre otros.",
        code: "<form>\n    <!-- Formulario de contacto -->\n    <input type='email' placeholder='Correo' />\n    <textarea placeholder='Mensaje'></textarea>\n    <button type='submit'>Enviar</button>\n</form>"
    },
    {
        title: "Atributos del Formulario",
        content: "Atributos importantes incluyen `action`, `method`, `enctype`, `autocomplete` y `novalidate`.",
        code: "<form action='/submit' method='POST' enctype='multipart/form-data' autocomplete='off' novalidate>\n    <input type='text' name='username' />\n    <button type='submit'>Enviar</button>\n</form>"
    },
    {
        title: "Validación HTML",
        content: "Los formularios se pueden validar usando atributos como `required`, `pattern` y `maxlength`.",
        code: "<form>\n    <input type='text' required placeholder='Nombre (obligatorio)' />\n    <input type='email' pattern='[^@]+@[^@]+' placeholder='Correo (válido)' />\n    <button type='submit'>Enviar</button>\n</form>"
    },
    {
        title: "Subida de Archivos",
        content: "Los formularios permiten subir archivos usando el atributo `type='file'`.",
        code: "<form>\n    <input type='file' name='upload' />\n    <button type='submit'>Subir</button>\n</form>"
    },
    {
        title: "Campos Escondidos",
        content: "Los campos ocultos (`type='hidden'`) permiten enviar datos adicionales al servidor.",
        code: "<form>\n    <input type='hidden' name='userId' value='12345' />\n    <button type='submit'>Enviar</button>\n</form>"
    },
    {
        title: "Botones en Formularios",
        content: "Los formularios usan botones de tipo `submit`, `reset` o `button`.",
        code: "<form>\n    <input type='text' name='name' />\n    <button type='submit'>Enviar</button>\n    <button type='reset'>Limpiar</button>\n</form>"
    },
    {
        title: "Checkboxes y Radio Buttons",
        content: "Usa `checkbox` para opciones múltiples y `radio` para selecciones únicas.",
        code: "<form>\n    <label><input type='checkbox' name='option1' /> Opción 1</label>\n    <label><input type='checkbox' name='option2' /> Opción 2</label>\n    <label><input type='radio' name='gender' value='male' /> Hombre</label>\n    <label><input type='radio' name='gender' value='female' /> Mujer</label>\n    <button type='submit'>Enviar</button>\n</form>"
    },
    {
        title: "Select y Dropdown",
        content: "El elemento `select` permite la selección de una o varias opciones.",
        code: "<form>\n    <label for='country'>País:</label>\n    <select id='country' name='country'>\n        <option value='col'>Colombia</option>\n        <option value='usa'>Estados Unidos</option>\n        <option value='mex'>México</option>\n    </select>\n    <button type='submit'>Enviar</button>\n</form>"
    },
    {
        title: "Campos de Fecha y Hora",
        content: "Los tipos `date`, `time` y `datetime-local` ayudan a manejar fechas y horas.",
        code: "<form>\n    <label for='dob'>Fecha de nacimiento:</label>\n    <input type='date' id='dob' />\n    <label for='appointment'>Hora de cita:</label>\n    <input type='time' id='appointment' />\n    <button type='submit'>Enviar</button>\n</form>"
    },
    {
        title: "Interacción con JS",
        content: "Puedes manejar eventos como `onSubmit` para controlar el comportamiento.",
        code: "function handleSubmit(event) {\n    event.preventDefault();\n    alert('Formulario enviado.');\n}\n\n<form onSubmit={handleSubmit}>\n    <input type='text' />\n    <button type='submit'>Enviar</button>\n</form>"
    }
];

export default slides;
