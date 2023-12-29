import React from "react"
import styled, {keyframes} from "styled-components";

function WebDevelopment() {
    const [color, setColor] = React.useState("0, 0, 0");

    const pulseAnimation = keyframes`
        0% {
            transform: scale(0.9);
            box-shadow: 0 0 0 0 rgb(${color});
        }
        50% {
            transform: scale(1);
            box-shadow: 0 0 0 7px rgba(${color}, 0);
        }
        100% {
            transform: scale(0.9);
            box-shadow: 0 0 0 0 rgba(${color}, 0);
        }
    `

    const AnimatedIcon = styled.div`
        cursor: pointer;

        &:hover {
            animation: ${pulseAnimation} 2.5s infinite ease-out;
        }
    `;

    function handleMouseOver(e) {
        const icon = e.target.id;

        switch(icon) {
            case "html":
                setColor("241, 102, 42");
                break;
            case "css":
                setColor("21, 114, 182");
                break;
            case "javascript":
                setColor("247, 223, 30");
                break;
            case "reactjs":
                setColor("97, 218, 251");
                break;
            case "nodejs":
                setColor("51, 153, 51");
                break;
            case "tailwind":
                setColor("56, 178, 172");
                break;
            case "mongo":
                setColor("68, 156, 69");
                break;
        }
    }

    const html = {
        borderColor: "rgb(241, 102, 42)"
    }
    const css = {
        borderColor: "rgb(21, 114, 182)"
    }
    const javascript = {
        borderColor: "rgb(247, 223, 30)"
    }
    const reactjs = {
        borderColor: "rgb(97, 218, 251)"
    }
    const nodejs = {
        borderColor: "rgb(51, 153, 51)"
    }
    const tailwind = {
        borderColor: "rgb(56, 178, 172)"
    }
    const mongo = {
        borderColor: "rgb(68, 156, 69)"
    }

    return (
        <div className="shadow rounded-2xl text-white w-[550px] h-auto flex flex-col items-center p-[20px]">
            <div className="text-[24px] font-bold mb-[20px]">
                <span className="nav-br">&lt;</span>WebDevelopment <span className="nav-br">/&gt;</span>
            </div>
            <div className="flex flex-row flex-wrap justify-center">
                <AnimatedIcon className="icon" id="html" onMouseOver={handleMouseOver} style={html}>
                    <img src={require("../images/htmlicon.png")} alt="html icon" />
                </AnimatedIcon>
                <AnimatedIcon className="icon" id="css" onMouseOver={handleMouseOver} style={css}>
                    <img src={require("../images/cssicon.png")} alt="css icon" />
                </AnimatedIcon>
                <AnimatedIcon className="icon" id="javascript" onMouseOver={handleMouseOver} style={javascript}>
                    <img src={require("../images/javascripticon.png")} alt="javascript icon" />
                </AnimatedIcon>
                <AnimatedIcon className="icon" id="reactjs" onMouseOver={handleMouseOver} style={reactjs} >
                    <img src={require("../images/reacticon.png")} alt="reactjs icon" />
                </AnimatedIcon>
                <AnimatedIcon className="icon" id="nodejs" onMouseOver={handleMouseOver} style={nodejs} >
                    <img src={require("../images/nodejsicon.png")} alt="nodejs icon" />
                </AnimatedIcon>
                <AnimatedIcon className="icon" id="tailwind" onMouseOver={handleMouseOver} style={tailwind} >
                    <img src={require("../images/tailwindicon.png")} alt="tailwind icon" />
                </AnimatedIcon>
                <AnimatedIcon className="icon" id="mongo" onMouseOver={handleMouseOver} style={mongo} >
                    <img src={require("../images/mongoicon.png")} alt="mongo icon" />
                </AnimatedIcon>
            </div>

        </div>
    )
}

export default WebDevelopment;
