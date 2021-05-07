import React from 'react';
import Skill from '../Skill/Skill';
import classes from './Skills.module.css';


const Skills = (props) => {

    const skills = [
        'C#',
        'React',
        'CSS3',
        'HTML5',
        'C++',
        'Razor',
        'Matlab',
        'JavaScript',
        'C',
        'SQL',
        'Git'
    ];

    return (
        <div className={classes.Skills}>
            {skills.map((skill) => {
                return <Skill skill={skill} key={skill} />
            })}
        </div>
    )
}


export default Skills;