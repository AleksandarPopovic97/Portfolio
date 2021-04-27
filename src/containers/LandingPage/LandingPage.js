import classes from './LandingPage.module.css';
import React, { Component } from 'react';
import About from '../../components/About/About';
import SkillsnProjects from '../../components/SkillsnProjects/SkillsnProjects';
import Education from '../../components/Education/Education';
import Contact from '../../components/Contact/Contact';
import Header from '../../components/Header/Header';
class LandingPage extends Component {

    state = {
        darkMode: false
    }

    mode = [classes.Light];


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
                        <input type="checkbox" onClick={this.changeMode} />
                        <span className={classes.Slider}></span>
                        <p>Dark mode</p>
                    </label>
                    <h1>Aleksandar Popovic Portfolio</h1>
                    <div className={classes.Test}>

                    </div>

                    <p>Test paragraph landing page</p>
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