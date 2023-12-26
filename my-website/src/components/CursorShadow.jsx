import React from "react";

function CursorShadow() {
    const [coordinates, setCoordinates] = React.useState({x:0, y:0});
    const [scroll, setScroll] = React.useState(0);

    React.useEffect(() => {
        function handleMouseMove(e) {
            setCoordinates({
                x: e.pageX,
                y: e.pageY
            });
        }
    
        function handleScroll(e) {
            setCoordinates(prev => ({
                x: prev.x,
                y: prev.y
            }));
        }
    
        window.addEventListener("mousemove", (e) => {
            handleMouseMove(e);
        });
    
        window.addEventListener("scroll", (e) => {
            handleScroll(e);
        });

        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("scroll", handleScroll);
    }, []);

    const customStyle = {
        position: "absolute",
        height: "2650px",
        width: "2650px",
        background: `radial-gradient(2650px at ${coordinates.x-25}px ${coordinates.y-25}px, rgba(255, 106, 61, 0.396), transparent 50%)`,
        zIndex: 0
    }

    return (
        <div>
            <div style={customStyle} />
        </div>
    );
}

export default CursorShadow;
