import React from 'react';
import { Link } from 'react-scroll';
import classes from './Header.module.css';

const Header = (props) => {

    const styles = [classes.Link, props.theme];

    if (props.theme.includes('Dark')) {
        styles.push(classes.Dark);
    }
    else {
        styles.push(classes.Light);
    }

    return (
        <nav className={classes.Header}>



            <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={800}
                className={styles.join(' ')}
            >
                About me
                     </Link>

            <Link
                activeClass="active"
                to="education"
                spy={true}
                smooth={true}
                offset={0}
                duration={1100}
                className={styles.join(' ')}
            >
                Education
                    </Link>

            <Link
                activeClass="active"
                to="skillsNprojects"
                spy={true}
                smooth={true}
                offset={0}
                duration={1400}
                className={styles.join(' ')}
            >
                Skills and projects
                    </Link>

            <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={1800}
                className={styles.join(' ')}
            >
                Contact
                    </Link>





        </nav>
    )
}


export default Header;