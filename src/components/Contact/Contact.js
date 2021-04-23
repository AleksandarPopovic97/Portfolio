import React from 'react';
import classes from './Contact.module.css';

const Contact = (props) => {

    const styles = [classes.Contact, props.theme];

    if (props.theme.includes('Dark')) {
        styles.push(classes.Dark);
    }
    else {
        styles.push(classes.Light);
    }

    return (
        <div className={styles.join(' ')}>
            <h1>Contact</h1>
        </div>
    )
}

export default Contact;