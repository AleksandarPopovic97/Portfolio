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
        <div className={styles.join(' ')} id="contact">
            <h1>Contact</h1>
            <h2>Work in progress...</h2>

        </div>
    )
}

export default Contact;