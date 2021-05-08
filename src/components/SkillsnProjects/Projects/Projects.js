import React, { useState } from 'react';
import Project from '../Project/Project';
import classes from './Projects.module.css';
import portfolio from '../../../assets/images/portfolio.png';
import burger from '../../../assets/images/burger.png';
import tesla from '../../../assets/images/tesla.png';

const Projects = (props) => {
    const [projectCount, setProjectCount] = useState(0);

    const nextProject = () => {
        if (projects.length - projectCount > 3)
            setProjectCount(projectCount + 1);
    }

    const previousProject = () => {
        if (projectCount > 0)
            setProjectCount(projectCount - 1);
    }

    const projects = [
        {
            image: portfolio,
            title: 'Portfolio',
            languages: ['React', 'Css', 'Html'],
        },
        {
            image: burger,
            title: 'Burger builder',
            languages: ['React', 'Css', 'Html'],
        },
        {
            image: tesla,
            title: 'Tesla',
            languages: ['React', 'Css', 'Html', 'C#', 'SQL'],
        },
        {
            image: portfolio,
            title: 'Test',
            languages: ['ReactTest', 'Css', 'Html'],
        },
        {
            image: portfolio,
            title: 'Test1',
            languages: ['ReactTest', 'Css', 'Html'],
        },
        {
            image: portfolio,
            title: 'Test2',
            languages: ['ReactTest', 'Css', 'Html'],
        },

    ]

    let showProjects = [];

    let counter = 0;
    for (let i = 0 + projectCount; i < projects.length; i++) {
        if (counter == 3)
            break;
        counter++;
        showProjects.push(projects[i]);
    }



    return (
        <React.Fragment>

            <div className={classes.Projects}>
                {showProjects.map((project) => {
                    return <Project image={project.image} title={project.title} languages={project.languages} key={project.title} />
                }
                )}
                {/* <Project image={portfolio} title="Portfolio" languages={['React', 'Css', 'Html']} />
            <Project image={burger} title="Burger builder" languages={['React', 'Css', 'Html']} />
        <Project image={tesla} title="Tesla" languages={['React', 'Css', 'Html', 'C#', 'SQL']} /> */}
                <div className={classes.MoreProjects}>
                    <div className={classes.Next} onClick={nextProject}>
                        Next
            </div>
                    <div className={classes.Previous} onClick={previousProject}>
                        Previous
            </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Projects;