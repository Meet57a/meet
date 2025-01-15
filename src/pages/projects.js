import React from 'react'
import '../css/projects.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import GitHubIcon from '@mui/icons-material/GitHub';


const projects = [
    {
        domain: "App Development",
        title: "Food Ordering App",
        description: "A food ordering app that allows users to order food online and get it delivered to their doorstep.",
        git: "",
        technologies: ["React Native", "Node.js", "Express", "MongoDB"]
    },
    {
        domain: "Web Development",
        title: "Catalog Website",
        description: "A catalog website that displays products and allows users to view product details and make purchases.",
        git: "e-commerce-website.png",
        technologies: ["React", "Node.js", "Express", "MongoDB"]
    },
]

const Projects = () => {
    return (
        <div className='projects'>
            <div className='projects-container'>
                <h1>My <span>Projects</span></h1>
                <div className='projects-content'>
                    {projects.map((project, index) => (
                        <div className='projects-content-card' key={project.title}>
                            <div>
                                <div className='projects-content-card-title'>
                                    {project.title}
                                </div>
                                <hr />
                                <p className='projects-content-card-image'>
                                    {project.description}
                                </p>
                                <div className='projects-content-card-tech'>
                                    <div>
                                        Technologies Used:
                                    </div>
                                    <div>
                                        {project.technologies.map((technology, index) => (
                                            <span key={technology}>{technology}, </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className='projects-content-card-link'>
                                <hr />
                                <div className=''>
                                    <GitHubIcon style={{ fontSize: "20px" }} />
                                    <div>
                                        <a href="">Git Hub </a>
                                        <div><ArrowForwardIcon style={{ fontSize: "20px" }} /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects
