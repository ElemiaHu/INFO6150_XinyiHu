import React from "react";
import java from "../img/java.png";
import html from "../img/html.png";
import css from "../img/css.png";
import js from "../img/js.png";
import react from "../img/react.png";
import android from "../img/android.png";

const Skills = () => {
    return <>
        <div id="seperator1"></div>
        <div className="skillsContainer">
            <div id="skillsTitle">Skills</div>
            <div className="skills">
                <div className="skillItem">
                    <div>Java</div>
                    <img src={java} alt="progess bar"/>
                </div>
                <div className="skillItem">
                    <div>HTML</div>
                    <img src={html} alt="progess bar"/>
                </div>
                <div className="skillItem">
                    <div>CSS</div>
                    <img src={css} alt="progess bar"/>
                </div>
                <div className="skillItem">
                    <div>JavaScript</div>
                    <img src={js} alt="progess bar"/>
                </div>
                <div className="skillItem">
                    <div>React.js</div>
                    <img src={react} alt="progess bar"/>
                </div>
                <div className="skillItem">
                    <div>Android Studio</div>
                    <img src={android} alt="progess bar"/>
                </div>
            </div>
        </div>
        <div id="seperator"></div>
    </>
}

export default Skills;