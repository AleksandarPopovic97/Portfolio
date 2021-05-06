import React from 'react';
import classes from './Education.module.css';
import vazak from '../../assets/images/aviation-academy.png';
import vazakDark from '../../assets/images/aviation-academy-dark.png';
import ftn from '../../assets/images/ftn-logo.png';
import ftnDark from '../../assets/images/ftn-logo-dark.png';
import EduFrame from './EduFrame/EduFrame';


const Education = (props) => {


    const styles = [classes.Education, props.theme];
    let aaLogo = vazak;

    if (props.theme.includes('Dark')) {
        styles.push(classes.Dark);
    }
    else {
        styles.push(classes.Light);
    }

    return (
        <div className={styles.join(' ')} id="education">
            <h1>Education</h1>
            <div className={classes.Container}>
                <EduFrame
                    theme={props.theme}
                    logoSrc={props.theme.includes('Dark') ? vazakDark : vazak}
                    alt="Aviation academy logo"
                    institution="Aviation academy"
                    direction="Air transport search and rescue technician"
                    date="09/2012 - 06/2016"
                    city="Belgrade"
                    pictureResize

                />

                <div className={classes.Separator}>
                </div>

                <EduFrame
                    theme={props.theme}
                    logoSrc={props.theme.includes('Dark') ? ftnDark : ftn}
                    alt="FTN logo"
                    institution="Faculty of technical science"
                    direction="Applied software engineering"
                    date="09/2016 - Expected to finish in 2021."
                    city="Novi Sad"
                />
            </div>

        </div >
    )
}

export default Education;