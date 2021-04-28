import classes from './LandingPage.module.css';
import React, { Component } from 'react';
import About from '../../components/About/About';
import SkillsnProjects from '../../components/SkillsnProjects/SkillsnProjects';
import Education from '../../components/Education/Education';
import Contact from '../../components/Contact/Contact';
import Header from '../../components/Header/Header';
import { FaSun, FaMoon } from 'react-icons/fa';

class LandingPage extends Component {

    state = {
        darkMode: false
    }

    mode = [classes.Light];

    title = "Aleksandar Popovic";
    text = "Student at Faculty of technical science and junior web developer";


    changeMode = () => {
        const darkMode = !this.state.darkMode;
        if (darkMode) {
            this.mode.push(classes.Dark);
            console.log("push")
        }
        else
            this.mode.splice(this.mode.indexOf(classes.Dark), 1);

        this.setState({ darkMode: darkMode })
    }

    render() {


        return (
            <React.Fragment>
                <div className={classes.LandingPage + ' ' + this.mode.join(' ')} id="main">
                    <Header theme={this.mode.join(' ')} />
                    <label className={classes.DMToggle} >
                        <div className={classes.ToggleContainer}>
                            <FaSun />
                            <FaMoon />
                        </div>
                        <input type="checkbox" onClick={this.changeMode} />
                        <span className={classes.Slider}></span>
                    </label>
                    <h1 className={classes.Title}>{this.title}</h1>
                    <p className={classes.Text}>{this.text}</p>
                </div>
                <About theme={this.mode.join(' ')} />
                <Education theme={this.mode.join(' ')} />
                <SkillsnProjects theme={this.mode.join(' ')} />
                <Contact theme={this.mode.join(' ')} id="contact" />
            </React.Fragment>
        );
    }

}

export default LandingPage;