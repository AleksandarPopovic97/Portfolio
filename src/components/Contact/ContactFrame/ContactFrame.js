import React from 'react';
import classes from './ContactFrame.module.css';
import { FaLinkedin, FaEnvelope, FaMobileAlt } from 'react-icons/fa';


const ContactFrame = (props) => {

    const styles = [classes.ContactFrame, props.theme];

    if (props.theme.includes('Dark')) {
        styles.push(classes.Dark);
    }
    else {
        styles.push(classes.Light);
    }

    let link;

    if (props.link.includes('https://'))
        link = props.link;
    else if (props.link.includes('@'))
        link = 'mailto:' + props.link;
    else
        link = 'tel:' + props.link;



    let icon;

    if (props.title.includes('Linkedin'))
        icon = <FaLinkedin />
    else if (props.title.includes('E-mail'))
        icon = <FaEnvelope />
    else if (props.title.includes('Phone'))
        icon = <FaMobileAlt />
    return (
        <div className={styles.join(' ')} onClick={() => window.open(link, "_blank")}>
            <div className={classes.Icon}>
                {icon}
            </div>
            <h2>{props.title}</h2>
            <p>{props.link}</p>
        </div>
    )
}

export default ContactFrame;