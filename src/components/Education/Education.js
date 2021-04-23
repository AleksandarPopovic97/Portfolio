import React from 'react';
import classes from './Education.module.css';

const Education = (props) => {

    const styles = [classes.Education, props.theme];

    if (props.theme.includes('Dark')) {
        styles.push(classes.Dark);
    }
    else {
        styles.push(classes.Light);
    }

    return (
        <div className={styles.join(' ')} >
            <h1>Education</h1>
        </div >
    )
}

export default Education;