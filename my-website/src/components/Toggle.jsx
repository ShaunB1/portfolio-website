import React from "react";
import Moon from "./Moon";
import Sun from "./Sun";

function Toggle() {
    const [isSelected, setIsSelected] = React.useState(false);

    function handleClick() {
        setIsSelected(!isSelected);
    }

    return (
        <div className={isSelected ? "flex w-[70px] h-[30px] bg-green-600 rounded-full" : "flex w-[70px] h-[30px] bg-gray-600 rounded-full"} onClick={handleClick}>
            <span className={isSelected ? "h-[30px] w-[30px] bg-white rounded-full toggle-right z-10" : "h-[30px] w-[30px] bg-white rounded-full toggle-left z-10"} />
        </div>
    );
}

export default Toggle;
