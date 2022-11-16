import React, {useState} from "react";
import "./frontpage.css";
import latte from "../img/latte.png";
import cat from "../img/cat.png";
import puff from "../img/puffs.png";
import bread from "../img/bread.png";
import chestnut from "../img/chestnut.png";
import icedLatte from "../img/icedLatte.png";
import danish from "../img/danish.png";
import applePie from "../img/applePie.png";
import toast from "../img/toast.png";
import icecream from "../img/ice-cream.png";
import starTrek from "../img/Star-Trek-Logo.png";
import headshot from "../img/headshot.png";
import lavaCake from "../img/lavaCake.png";
import brownie from "../img/brownie.png";


const FrontPage = () => {
    const [flip1, setFlip1] = useState(false);
    const [flip2, setFlip2] = useState(false);
    const [flip3, setFlip3] = useState(false);
    const [flip4, setFlip4] = useState(false);
    const [flip5, setFlip5] = useState(false);
    const [flip6, setFlip6] = useState(false);
    const [flip7, setFlip7] = useState(false);
    const [flip8, setFlip8] = useState(false);
    const [flip9, setFlip9] = useState(false);

    return <>
        <div id="opening">I'm...</div>
        <div className="description">(pick one piece of food and click it to learn about me)</div>
        <div className="blockContainer">
            {/* block 1 */}
            <div className={`block block1 ${flip1 ? "flip" : ""}`}>
                <div className="front" onClick={() => {setFlip1(!flip1)}}>
                    <img src={latte} alt="latte" height="100px"/>
                </div>
                <div className="back" onClick={() => {setFlip1(!flip1)}}>Xinyi Hu</div>
            </div>
            {/* block 2 */}
            <div className={`block block2 ${flip2 ? "flip" : ""}`}>
                <div className="front" onClick={() => {setFlip2(!flip2)}}>
                    <img src={puff} alt="puff" height="100px"/>
                </div>
                <div className="back" onClick={() => {setFlip2(!flip2)}}>
                    A Cat Person
                    <img id="cat" src={cat} alt="cat" height="100px"/>
                </div>
            </div>
            {/* block 3 */}
            <div className={`block block3 ${flip3 ? "flip" : ""}`}>
                <div className="front" onClick={() => {setFlip3(!flip3)}}>
                    <img src={bread} alt="bread" height="100px"/>
                </div>
                <div className="back" onClick={() => {setFlip3(!flip3)}}>
                    A
                    <img id="starTrek" src={starTrek} alt="star trek logo" height="60px"/>
                    Fan
                </div>
            </div>
        </div>
        <div className="blockContainer">
            {/* block 4 */}
            <div className={`block block4 ${flip4 ? "flip" : ""}`}>
                <div className="front" onClick={() => {setFlip4(!flip4)}}>
                    <img src={chestnut} alt="chestnut cake" height="90px"/>
                </div>
                <div className="back" onClick={() => {setFlip4(!flip4)}}>Trilingual<br /><span className="description">Mandarin, English, Japanese</span></div>
            </div>
            {/* block 5 */}
            <div className={`block block5 ${flip5 ? "flip" : ""}`}>
                <div className="front" onClick={() => {setFlip5(!flip5)}}>
                    <img src={icedLatte} alt="iced latted" height="100px"/>
                </div>
                <div className="back" onClick={() => {setFlip5(!flip5)}}>A Software Engineer<br/>(to be)</div>
            </div>
            {/* block 6 */}
            <div className={`block block6 ${flip6 ? "flip" : ""}`}>
                <div className="front" onClick={() => {setFlip6(!flip6)}}>
                    <img id="danish" src={danish} alt="danish pastry" height="100px"/>
                </div>
                <div className="back" onClick={() => {setFlip6(!flip6)}}>ENFP</div>
            </div>
        </div>
        <div className="blockContainer">
            {/* block 7 */}
            <div className={`block block7 ${flip7 ? "flip" : ""}`}>
                <div className="front" onClick={() => {setFlip7(!flip7)}}>
                    <img src={applePie} alt="apple pie" height="90px"/>
                </div>
                <div className="back" onClick={() => {setFlip7(!flip7)}}>Also a Front-end Developer<br /><span className="description">Check out my projects!</span></div>
            </div>
            {/* block 8 */}
            <div className={`block block8 ${flip8 ? "flip" : ""}`}>
                <div className="front" onClick={() => {setFlip8(!flip8)}}>
                    <img src={toast} alt="toast" height="100px"/>
                </div>
                <div className="back" onClick={() => {setFlip8(!flip8)}}>
                    A Chocolate Lover
                    <div>
                        <img src={lavaCake} alt="lava cake" height="70px"/>
                        <img src={brownie} alt="brownie" height="70px"/>
                    </div>
                </div>
            </div>
            {/* block 9 */}
            <div className={`block block9 ${flip9 ? "flip" : ""}`}>
                <div className="front" onClick={() => {setFlip9(!flip9)}}>
                    <img src={icecream} alt="ice-cream" height="100px"/>
                </div>
                <div className="back" onClick={() => {setFlip9(!flip9)}}>
                    <img id="headshot" src={headshot} alt="a headshot of me"/>
                </div>
            </div>
        </div>
    </>
}

export default FrontPage;