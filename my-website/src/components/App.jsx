import React from "react";
import NavBar from "./NavBar";
import Profile from "./Profile";
import Intro from "./Intro";
import ContactProjects from "./ContactProjects";
import Quote from "./Quote";
// import CursorShadow from "./CursorShadow";
import SocialMedia from "./SocialMedia";
import Skills from "./Skills";

function App() {
    return (
        <div>
            <div id="container">
                <SocialMedia />
                <NavBar />
                <Profile />
                <Intro />
                <div className="flex justify-center mt-[30px]">
                    <ContactProjects />
                </div>
                <Quote />
                <div className="mt-[100px] ml-[300px]">
                    <Skills />
                </div>
            </div>

        </div>
    );
}

export default App;
