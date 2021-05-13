//Title, picture, description, languages?
import React, { useState } from 'react';
import classes from './Project.module.css';
import portfolio from '../../../assets/images/portfolio.png'
import Skill from '../Skill/Skill';
import { FaGithub } from 'react-icons/fa';

const Project = (props) => {

    const [overlay, setOverlay] = useState(false);

    const imageStyles = [classes.Container];

    const handleMouseEnter = () => {
        setOverlay(true);
    }

    const handleMouseLeave = () => {
        setOverlay(false);
    }

    let styles = [classes.Project]

    if (props.theme.includes('Dark')) {
        styles.push(classes.Dark);
    }
    else {
        styles.push(classes.Light);
    }


    return (
        <div className={styles.join(' ')}>
            <h3>{props.title}</h3>
            <div className={classes.Container} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                {overlay ?
                    <div className={classes.Overlay}>

                        <div className={classes.SkillOverlay}>
                            {props.languages.map((skill) => {
                                return <Skill skill={skill} theme={props.theme} />
                            })}

                        </div>
                        <div className={classes.LinkBtn}>
                            <a href={props.link} target="_blank" className={classes.Link}>Link to <FaGithub className={classes.Icon} /></a>
                        </div>
                    </div>
                    : null}
                <img src={props.image} ></img>
                {/* <p className={classes.Description}>Description, something that can provide highlited details about this projectDescription, something that can provide highlited details about this project</p> */}
            </div>

            {/* <div>
                <p>Languages used for this project: </p>
                <Skill skill="React" />
                <Skill skill="Css3" />
                <Skill skill="Html" />
            </div> */}
        </div >
    )
}

export default Project;


