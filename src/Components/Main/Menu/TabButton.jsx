import "../../../Styles/Menu/TabButton.css";

function TabButton({ children, onClick, isSelected }) {
    return (
        <li className="TabButton">
            <button
            onClick={onClick}
            className={isSelected ? 'active' : ''}>{children}</button>
        </li>
    );
}

export default TabButton;
