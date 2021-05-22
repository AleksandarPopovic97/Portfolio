import React, { useState } from 'react';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';
import classes from './SkillsnProjects.module.css';

const SkillsnProjects = (props) => {

    const styles = [classes.Skills, props.theme];
    const [activeLang, setLang] = useState([]);

    if (props.theme.includes('Dark')) {
        styles.push(classes.Dark);
    }
    else {
        styles.push(classes.Light);
    }

    const projectFilter = (event) => {
        setLang(prevState => [...prevState, event.target.innerHtml])
        console.log(activeLang)
    }

    return (
        <div className={styles.join(' ')} id="skillsNprojects">
            <h1>Skills and projects</h1>
            <div className={classes.Container}>
                <Skills theme={props.theme} filter={projectFilter} />
                <Projects theme={props.theme} />
            </div>
        </div>

    )
}

export default SkillsnProjects;