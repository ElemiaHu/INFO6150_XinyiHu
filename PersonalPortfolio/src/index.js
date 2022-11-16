import React, {useState} from "react";
import {createRoot} from "react-dom/client";
import "./style.css";
import {
    Header,
    FrontPage,
    About,
    Skills,
    Footer,
    Projects
} from "./components/index.js";

const App = () => {
    return <>
        <div id="outside">
            <Header />
            <FrontPage />
            <About />
            <Projects />
            <Skills />
            <Footer />
        </div>
    </>
}

const app = document.querySelector("#app");
const root = createRoot(app);
root.render(<App />);