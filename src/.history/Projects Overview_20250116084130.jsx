import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import archi from "./assets/arch.jpg";
import eeng from "./assets/Schematics.png";
import compsci from "./assets/code.png";
import other from "./assets/ffflux.svg";

const projects = [
    { image: archi, title: "Architecture", alt: "Architecture", font: 'italiana', color: '#F9F7F0' },
    { image: eeng, title: "Electronic-Eng", alt: 'Hardware' , font: 'hubballi', color: '#e5fbe8' },
    { image: compsci, title: "Computer-Sci", alt: 'Front-End', font: 'julius', color: '#B5C0B7' },
    { image: other, title: "Other", alt: "Other", font: 'inconsolata', color: '#F7F0D7' },
];

const ProjectsOverview = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [transitioning, setTransitioning] = useState(false);
    const navigate = useNavigate();

    const handleClick = (index, subject) => {
        setActiveIndex(index);
        setTransitioning(true);
        
        // Navigate after animation completes
        setTimeout(() => {
            navigate(subject);
        }, 900); // Match this with your transition duration
    };

    return (
        <div className="flex flex-col w-full h-[100vh] bg-[#343434] snap-center overflow-hidden text-[#000000] ">
            {projects.map((project, index) => (
                <div
                    onClick={() => handleClick(index, project.title)}
                    key={index}
                    style={{ 
                        backgroundColor: project.color,
                        transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
                        flex: transitioning
                            ? activeIndex === index ? '1 0 100%' : '0 0 0%'
                            : '1 0 25%'
                    }}
                    className={`
                        relative
                        group
                        flex
                        items-center
                        overflow-hidden
                    `}
                >
                    <img
                        src={project.image}
                        alt={project.title}
                        className={`
                            absolute 
                            top-0 
                            w-full 
                            h-[120%] 
                            object-cover 
                            transition-all
                            duration-1000
                            ease-out
                            ${project.title === "Other" 
                                ? "group-hover:-hue-rotate-30" 
                                : "group-hover:top-[-20%]"
                            }
                            ${transitioning && activeIndex === index 
                                ? "opacity-0 delay-300 duration-150  ease-in" 
                                : ""
                            }
                        `}
                    />
                    <h1 
                    style={{ fontFamily: project.font }}
                        className={`
                            2xl:text-9xl
                            xl:text-7xl
                            md:text-7xl
                            text-5xl
                            ml-[5%] 
                            z-10
                            transition-opacity
                            duration-75
                            ${transitioning && activeIndex === index 
                                ? "opacity-0" 
                                : "opacity-100"
                            }
                        `}
                    >
                        {project.alt}
                    </h1>
                </div>
            ))}
        </div>
    );
}

export default ProjectsOverview;