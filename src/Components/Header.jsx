import reactLogo from "../assets/react.svg";
import "../Styles/Header.css";

const reactTitles = [
    "React Fundamentos",
    "React Avanzado",
    "React Router",
    "React Hooks",
    "React Context",
];

function getRamdomIntInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function Header() {
    const tittleWinner = reactTitles[getRamdomIntInRange(0, 4)];
    return (
        <header>
            <img src={reactLogo} alt="React logo" />
            <h1>{tittleWinner}</h1>
            <p>
                ¡Conceptos fundamentales de React que necesitas conocer para
                desarrollar cualquier app con esta famosa librería!
            </p>
        </header>
    );
}

export default Header;