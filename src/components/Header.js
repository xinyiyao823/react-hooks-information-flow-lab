import { useState } from "react";

function Header({ mode, onDarkModeClick}) {
    
    return (
        <header>
            <h2>Shopster</h2>
            <button onClick={onDarkModeClick}>{mode? "Dark Mode " : "Light Mode"}</button>
        </header>
    );
}

export default Header;