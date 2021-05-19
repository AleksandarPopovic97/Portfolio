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
            <div className={classes.SectionsContainer}>
                <div className={classes.LeftSection}>
                    <h3>Skills</h3>
                    <p>Team player</p>
                    <p>Communication</p>
                    <p>Precision</p>
                </div>
                <div className={classes.RightSection}>
                    <h3>Interests</h3>
                    <p>Web development</p>
                    <p>Sport</p>
                    <p>Formula 1</p>
                </div>
            </div>


        </div>
    )
}


export default About;