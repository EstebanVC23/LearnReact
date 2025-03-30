import "../../../Styles/TabButton.css";

function TabButton({ children, onClick }) {
    return (
        <li className="TabButton">
            <button
            onClick={onClick}>{children}</button>
        </li>
    );
}

export default TabButton;
