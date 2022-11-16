import React from "react";
import linkedin from "../img/linkedIn_logo.png";
import handshake from "../img/handshake_logo.png";

const Footer = () => {
    return <>
        <footer>
            <div className="links">
                <div>Let's Connect</div>
                <a href="https://www.linkedin.com/in/xinyi-hu-086137250/" target="_blank">
                    <img src={linkedin} alt="LinkedIn Logo" height="50px"/>
                </a>
                <a href="https://app.joinhandshake.com/stu/users/44962573" target="_blank">
                    <img src={handshake} alt="Handshake Logo" height="50px"/>
                </a>
            </div>
            <div>Xinyi Hu. All rights reserverd.</div>
        </footer>
    </>
}

export default Footer;