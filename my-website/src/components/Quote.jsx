import React from "react";

function Quote() {
    const background = {
        backgroundImage: `url(${require("../images/banner.webp")})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
    };

    return (
        <div className="h-[500px] w-[100%] bg-[#1a2238] mt-[200px] flex flex-col justify-center items-center text-white -skew-y-3 p-[100px]" style={background}>
            <div className="skew-y-3 text-[56px] text-center font-bold">
                <p>"It's not at all important to get it right the first time. It's vitally important to get it right the last time."</p>
                <p className="mt-[40px] text-[22px] font-normal">Andrew Hunt</p>
            </div>
            
        </div>
    );
}

export default Quote;
