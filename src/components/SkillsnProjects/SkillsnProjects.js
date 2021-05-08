import React from 'react';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';
import classes from './SkillsnProjects.module.css';

const SkillsnProjects = (props) => {

    const styles = [classes.Skills, props.theme];

    if (props.theme.includes('Dark')) {
        styles.push(classes.Dark);
    }
    else {
        styles.push(classes.Light);
    }

    return (
        <div className={styles.join(' ')} id="skillsNprojects">
            <h1>Technical skills and projects</h1>
            <div className={classes.Container}>
                <Skills />
                <Projects />
            </div>
        </div>
    )
}

export default SkillsnProjects;