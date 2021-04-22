import React from 'react';
import classes from './About.module.css';

const about = (props) => {

    const styles = [classes.About, props.theme];

    if (props.theme.includes('Dark')) {
        styles.push(classes.Dark);
        console.log('Dark theme');
    }
    else {
        styles.push(classes.Light);
        console.log('Light theme');
    }

    console.log(styles)

    return (
        <div className={styles.join(' ')}>
            <h1>About me</h1>
            <p>Apsolvent na Fakultetu tehnickih nauka</p>
        </div>
    )
}


export default about;