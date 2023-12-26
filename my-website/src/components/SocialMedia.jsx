import React from "react";

function SocialMedia() {
    return (
        <div className="flex flex-col items-center w-[20px] pl-[40px]">
            <div className="socials" />
            <img src={require("../images/linkedin.png")} alt="linkedin logo" className="w-[25px] absolute top-[410px] hover:cursor-pointer hover:scale-110" />
            <img src={require("../images/github-mark-white.png")} alt="linkedin logo" className="w-[25px] absolute top-[450px] hover:cursor-pointer hover:scale-110" />
            <div className="absolute top-[490px] hover:cursor-pointer hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
            </div>
        </div>
    );
}

export default SocialMedia;
