import React from "react";
import Contact from "./Contact";
import Projects from "./Projects";

function ContactProjects() {
    return (
        <div className="flex gap-[20px]">
            <Contact />
            <Projects />
        </div>
    );
}

export default ContactProjects;
