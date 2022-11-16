import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import projects from "./projects.json";
import guess from "../img/guessGame.png";
import mario from "../img/mario.png";
import pixel from "../img/pixel.png";
import habits from "../img/habits.png";
import personal from "../img/personal.png";
projects[0].image = guess;
projects[1].image = mario;
projects[2].image = pixel;
projects[3].image = personal;
projects[4].image = habits;

const Projects = () => {
    return <>
        <div id="projects-container">
            <div id="project">My Projects</div>
            <div id="carousel">
                <Carousel infiniteLoop={true}>
                    {
                    projects.map((project) => (
                        <div className='item'>
                            <a href={project.url} target="_blank">
                                <div className='name'>{project.projectName}</div>
                            </a>
                            <img src={project.image}/>
                            <div className='words'>{project.description}</div>
                            <div className='tech'>Technology: {project.technology}</div>
                            <div className='decoration'></div>
                        </div>                        
                    ))
                    }
                </Carousel>
            </div>
        </div>
    </>
}

export default Projects;