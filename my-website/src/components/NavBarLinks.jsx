import React from "react";
import Toggle from "./Toggle";

function NavBarLinks() {
    return (
        <div className="nav-bar">
            <a href="#" className="nav-tp"><span className="nav-br">&lt;</span>Home <span className="nav-br">/&gt;</span></a>
            <a href="#" className="nav-tp"><span className="nav-br">&lt;</span>Skills <span className="nav-br">/&gt;</span></a>
            <a href="#" className="nav-tp"><span className="nav-br">&lt;</span>Projects <span className="nav-br">/&gt;</span></a>
            <a href="#" className="nav-tp"><span className="nav-br">&lt;</span>About Me <span className="nav-br">/&gt;</span></a>
            <a href="#" className="nav-tp"><span className="nav-br">&lt;</span>Contact <span className="nav-br">/&gt;</span></a>
            <Toggle />
        </div>
    );
}

export default NavBarLinks;
