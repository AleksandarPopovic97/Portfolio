import React from 'react';
import classes from './About.module.css';

const About = (props) => {

    const styles = [classes.About, props.theme];

    if (props.theme.includes('Dark')) {
        styles.push(classes.Dark);
    }
    else {
        styles.push(classes.Light);
    }

    return (
        <div className={styles.join(' ')} id="about">
            <h1>About me</h1>
            <p>Test paragraph</p>
        </div>
    )
}


export default About;