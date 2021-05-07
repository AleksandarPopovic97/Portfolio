//Title, picture, description, languages?
import React, { useState } from 'react';
import classes from './Project.module.css';
import portfolio from '../../../assets/images/portfolio.png'
import Skill from '../Skill/Skill';

const Project = (props) => {

    const [overlay, setOverlay] = useState(false);

    const imageStyles = [classes.Container];

    const handleMouseEnter = () => {
        setOverlay(true);
    }

    const handleMouseLeave = () => {
        setOverlay(false);
    }



    return (
        <div className={classes.Project}>
            <h3>{props.title}</h3>
            <div className={classes.Container} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                {overlay ?
                    <div className={classes.SkillOverlay}>
                        {props.languages.map((skill) => {
                            return <Skill skill={skill} />
                        })}

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

/*
Portfolio
https://github.com/AleksandarPopovic97/Portfolio

Tesla distribution
https://github.com/AleksandarPopovic97/Tesla

Burger builder
https://github.com/AleksandarPopovic97/BurgerBuilder

Web1 project (apartments) --> make it public
https://gitlab.com/acapopce97/pw69-2016-web-projekat

Safety and security --> make it public
https://gitlab.com/acapopce97/sigurnost-i-bezbednost-vol2

Smart home system (upload)
--------------------------


*/
