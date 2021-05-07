import React from 'react';
import Project from '../Project/Project';
import classes from './Projects.module.css';
import portfolio from '../../../assets/images/portfolio.png';
import burger from '../../../assets/images/burger.png';
import tesla from '../../../assets/images/tesla.png';

const Projects = (props) => {

    return (
        <div className={classes.Projects}>
            <Project image={portfolio} title="Portfolio" languages={['React', 'Css', 'Html']} />
            <Project image={burger} title="Burger builder" languages={['React', 'Css', 'Html']} />
            <Project image={tesla} title="Tesla" languages={['React', 'Css', 'Html', 'C#', 'SQL']} />

            <div className={classes.MoreProjects}>
                <h2>
                    HOVER FOR MORE PROJECTS!
                </h2>
            </div>
        </div>
    )
}

export default Projects;