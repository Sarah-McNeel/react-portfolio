import React, { useState } from 'react';
import Card from "../Project";
function Portfolio() {
    const [projects] = useState([
        {
            name: 'horiseon project',
            description: 'HTML, CSS',
            link: "https://sarah-mcneel.github.io/HoriseonProject/",
            repo: "",
            image: ""
        },
        {
            name: 'run-buddy',
            description: 'HTML,CSS',
            link: "https://sarah-mcneel.github.io/Run-Buddy/",
            repo: "",
            image: ""
        },
        {
            name: 'taskmaster pro',
            description: 'HTML/CSS',
            link: "ttps://sarah-mcneel.github.io/Taskmaster-Pro/",
            repo: "",
            image: ""
        },
        {
            name: 'collectors-haven',
            description: 'Node',
            link: "https://fgutierrez2191.github.io/collectors-haven/browse.html",
            repo: "",
            image: ""

        },
        {
            name: 'D.O.G.S',
            description: 'SQL,MYSQL,NODE, EXPRESS',
            link: "https://murmuring-taiga-40351.herokuapp.com/",
            repo: "",
            image: ""
        },
    ]);
    console.log(projects.image)
    return (
        <div>
            {projects.map((project, i) => (
                <Card key={i} name={project.name} description={project.description} link={project.link} repo={project.repo} image={project.image}></Card>

            ))}
        </div>
    )

}

export default Portfolio;