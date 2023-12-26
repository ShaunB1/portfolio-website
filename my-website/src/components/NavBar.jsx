import React from "react";
import NavBarLinks from "./NavBarLinks";

function NavBar() {
    const [scrolled, setScrolled] = React.useState(false);

    React.useEffect(() => {
        function handleScroll() {
            if (window.scrollY >= 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
    
        window.addEventListener("scroll", () => {
            handleScroll();
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    });

    if (scrolled === false) {
        return (
            <div className="nav-bar nav-top">
                <NavBarLinks />
            </div>
        );
    } else {
        return (
            <div className="nav-bar sticky floating">
                <NavBarLinks />
            </div>
        )
    }
}

export default NavBar;
