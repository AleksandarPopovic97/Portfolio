import React from 'react';
import classes from './Contact.module.css';
import ContactFrame from './ContactFrame/ContactFrame';
import pdf from '../../assets/CV-Aleksandar-Popovic.pdf';
import { FaFileDownload } from 'react-icons/fa';

const Contact = (props) => {

    const styles = [classes.Contact, props.theme];

    if (props.theme.includes('Dark')) {
        styles.push(classes.Dark);
    }
    else {
        styles.push(classes.Light);
    }

    const downloadCVHandler = () => {

    }

    return (
        <div className={styles.join(' ')} id="contact">
            <h1>Contact me (work in progress...)</h1>
            <div className={classes.ContactContainer}>
                {/* <ContactFrame theme={props.theme} title="Linkedin" link="https://www.linkedin.com/in/aleksandar-popovi%C4%87-14447312b/" /> */}
                <ContactFrame theme={props.theme} title="E-mail" link="acapopce97@gmail.com" />
                <ContactFrame theme={props.theme} title="Phone" link="062759164" />
            </div>
            <div className={classes.CV}>
                <a href={pdf} download="Aleksandar Popovic CV" >Download my CV <FaFileDownload /></a>
            </div>
            <p>Please note that this is still unfinished beta version and that all is subject to change.</p>
        </div>
    )
}

export default Contact;