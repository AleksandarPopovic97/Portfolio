import React from 'react';
import classes from './Education.module.css';
import vazak from '../../assets/images/aviation-academy.png';
import ftn from '../../assets/images/ftn-logo.png';

const Education = (props) => {

    const styles = [classes.Education, props.theme];

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
                <div className={classes.Frame}>
                    <div className={classes.LogoContainer}>
                        <img src={vazak} alt="Aviation academy logo" className={classes.AALogo} />
                    </div>
                    <div className={classes.Institution}>
                        <h2>Aviation academy</h2>
                    </div>
                    <div className={classes.Direction}>
                        <h3>Air transport search and rescue technician</h3>
                    </div>
                    <div className={classes.Date}>
                        <p>09/2012 - 06/2016</p>
                    </div>

                </div>

                <div className={classes.Frame}>
                    <div className={classes.LogoContainer}>
                        <img src={ftn} alt="FTN logo" className={classes.FTNLogo} />
                    </div>
                    <div className={classes.Institution}>
                        <h2>Faculty of technical science</h2>
                    </div>
                    <div className={classes.Direction}>
                        <h3>Applied software engineering</h3>
                    </div>
                    <div className={classes.Date}>
                        <p>09/2016 - Expected to finish 2021.</p>
                    </div>

                </div>
            </div>

        </div >
    )
}

export default Education;