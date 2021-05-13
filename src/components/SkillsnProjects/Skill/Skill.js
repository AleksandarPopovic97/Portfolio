import React, { useEffect } from 'react';
import classes from './Skill.module.css';

const Skill = (props) => {

    useEffect(() => {
        setTimeout(() => {
            console.log('delay');
        }, props.delay);
    }, []);

    let styles = [classes.Skill]

    if (props.theme.includes('Dark')) {
        styles.push(classes.Dark);
    }
    else {
        styles.push(classes.Light);
    }

    return (
        <div className={styles.join(' ')}>
            <p>{props.skill}</p>
        </div>
    )
}


export default Skill;