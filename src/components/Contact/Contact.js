import React from 'react';
import classes from './Contact.module.css';
import ContactFrame from './ContactFrame/ContactFrame';

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
            <h1>Contact me (work in progress...)</h1>
            <div className={classes.ContactContainer}>
                <ContactFrame theme={props.theme} title="Linkedin" link="https://www.linkedin.com/in/aleksandar-popovi%C4%87-14447312b/" />
                <ContactFrame theme={props.theme} title="E-mail" link="acapopce97@gmail.com" />
                <ContactFrame theme={props.theme} title="Phone" link="062759164" />
            </div>

        </div>
    )
}

export default Contact;