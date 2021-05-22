import React from 'react';
import Skill from '../Skill/Skill';
import classes from './Skills.module.css';


const Skills = (props) => {

    const skills = [
        'React',
        'HTML5',
        'CSS3',
        'JavaScript',
        'C#',
        'C',
        'SQL',
        'Git'
    ];


    return (
        <div className={classes.Skills}>
            {skills.map((skill) => {
                return <Skill skill={skill} key={skill} theme={props.theme} filter={props.filter} />
            })}
        </div>
    )
}


export default Skills;