import "../../../../Styles/Menu/OptionHooks/HookTab.css";

function HookTab({ hook, isActive, onClick }) {
    return (
        <button 
            className={`tab-button ${isActive ? 'active' : ''}`} 
            onClick={onClick}>
            {hook.name}
        </button>
    );
}

export default HookTab;