import React, { useState } from 'react';
import Project from '../Project/Project';
import classes from './Projects.module.css';
import portfolio from '../../../assets/images/portfolio.png';
import burger from '../../../assets/images/burger.png';
import tesla from '../../../assets/images/tesla.png';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';
import { BrowserView, MobileView } from 'react-device-detect';

const Projects = (props) => {

    const projectsToShow = 3;

    const [projectCount, setProjectCount] = useState(0);


    const nextProject = () => {
        if (projects.length - projectCount > projectsToShow)
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
        if (counter == projectsToShow)
            break;
        counter++;
        showProjects.push(projects[i]);
    }

    const scrollStep = 100 / projects.length;
    const scrollWidth = scrollStep * projectsToShow + projectCount * scrollStep;

    return (
        <React.Fragment>

            <div className={classes.Projects}>
                <div className={classes.ProjectList}>

                    {showProjects.map((project) => {
                        return <Project image={project.image} title={project.title} languages={project.languages} key={project.title} />
                    }
                    )}
                    {/* <Project image={portfolio} title="Portfolio" languages={['React', 'Css', 'Html']} />
            <Project image={burger} title="Burger builder" languages={['React', 'Css', 'Html']} />
        <Project image={tesla} title="Tesla" languages={['React', 'Css', 'Html', 'C#', 'SQL']} /> */}
                </div>
                <BrowserView>
                    <div className={classes.MoreProjects}>
                        <div className={classes.ButtonContainer}>
                            <div className={classes.Previous} onClick={previousProject}>
                                <FaAngleDoubleLeft className={classes.Icon} />
                            </div>
                            <div className={classes.Next} onClick={nextProject}>
                                <FaAngleDoubleRight className={classes.Icon} />
                            </div>
                        </div>
                        <div className={classes.Bar}>
                            <div className={classes.Scroll} style={{ width: `${scrollWidth}%` }}></div>
                        </div>
                    </div>
                </BrowserView>
                <MobileView>
                    <div className={classes.MoreProjects}>
                        <div className={classes.ButtonContainer}>
                            <div className={classes.Previous} onClick={previousProject}>
                                <FaAngleDoubleLeft className={classes.Icon} />
                            </div>
                            <div className={classes.Bar}>
                                <div className={classes.Scroll} style={{ height: `${scrollWidth}%` }}></div>
                            </div>
                            <div className={classes.Next} onClick={nextProject}>
                                <FaAngleDoubleRight className={classes.Icon} />
                            </div>
                        </div>
                    </div>
                </MobileView>
            </div>
        </React.Fragment>
    )
}

export default Projects;