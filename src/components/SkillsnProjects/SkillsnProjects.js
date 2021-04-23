import React from 'react';
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
        <div className={styles.join(' ')}>
            <h1>Skills and projects</h1>
        </div>
    )
}

export default SkillsnProjects;