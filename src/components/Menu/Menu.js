import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import classes from './Menu.module.css';
import { Link } from 'react-scroll';

const Menu = (props) => {

    let styles = [classes.Menu]

    if (!props.show) {
        styles = [classes.Menu, classes.CloseMenu]
    }

    if (props.theme.includes('Dark')) {
        styles.push(classes.Dark);
    }
    else {
        styles.push(classes.Light);
    }

    console.log(styles)


    return (


        <React.Fragment>
            <Backdrop onClose={props.close} show={props.show} />
            <div className={styles.join(' ')}>
                <h1>Menu</h1>

                <nav className={classes.Navigation}>

                    <Link
                        activeClass={classes.Active}
                        to="main"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={800}
                        className={classes.Link}
                    >
                        Home
                     </Link>
                    <Link
                        activeClass={classes.Active}
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={800}
                        className={classes.Link}
                    >
                        About me
                     </Link>

                    <Link
                        activeClass={classes.Active}
                        to="education"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={1100}
                        className={classes.Link}

                    >
                        Education
                    </Link>

                    <Link
                        activeClass={classes.Active}
                        to="skillsNprojects"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={1400}
                        className={classes.Link}

                    >
                        Skills and projects
                    </Link>

                    <Link
                        activeClass={classes.Active}
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={1800}
                        className={classes.Link}
                    >
                        Contact
                    </Link>





                </nav>

            </div>
        </React.Fragment>


    )

}

export default Menu;