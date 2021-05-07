import React, { useEffect } from 'react';
import classes from './Skill.module.css';

const Skill = (props) => {

    useEffect(() => {
        setTimeout(() => {
            console.log('delay');
        }, props.delay);
    }, []);

    console.log('Skill')

    return (
        <div className={classes.Skill}>
            <p>{props.skill}</p>
        </div>
    )
}


export default Skill;