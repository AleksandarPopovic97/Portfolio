import React, { useEffect } from 'react';
import classes from './EduFrame.module.css';
import Aos from 'aos';
import "aos/dist/aos.css";

const EduFrame = (props) => {

    useEffect(() => {
        Aos.init({
            duration: 1000,
        });

    }, []);

    //consider removing Aos and making your own animation (dark-mode bug)

    const styles = [classes.Frame, props.theme];

    if (props.theme.includes('Dark')) {
        styles.push(classes.Dark);
    }
    else {
        styles.push(classes.Light);
    }

    const logoStyle = [classes.Logo];

    if (props.pictureResize) {
        logoStyle.push(classes.Resize);
    }


    return (
        <div className={classes.AnimationWrapper} data-aos="fade-up">

            <div className={styles.join(' ')} >

                <div className={classes.LogoContainer} >
                    <img src={props.logoSrc} alt={props.alt} className={logoStyle.join(' ')} />
                </div>
                <div className={classes.Institution} >
                    <h2>{props.institution}</h2>
                </div>
                <div className={classes.Direction} >
                    <h3>{props.direction}</h3>
                </div>
                <div className={classes.Date} >
                    <p>{props.city}</p>
                    <p>{props.date}</p>
                </div>

            </div>

        </div>
    );
}


export default EduFrame;