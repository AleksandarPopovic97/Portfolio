import classes from './LandingPage.module.css';
import React, { Component } from 'react';
import About from '../../components/About/About';
import SkillsnProjects from '../../components/SkillsnProjects/SkillsnProjects';
import Education from '../../components/Education/Education';
import Contact from '../../components/Contact/Contact';
import Header from '../../components/Header/Header';
import { FaSun, FaMoon, FaMedapps, FaBackward } from 'react-icons/fa';
import Aos from 'aos';
import "aos/dist/aos.css";
import Menu from '../../components/Menu/Menu';

class LandingPage extends Component {

    state = {
        darkMode: false,
        toTop: false,
        menu: false
    }

    mode = [classes.Light];

    title = "Aleksandar Popovic";
    text = "Student at Faculty of technical science and junior web developer";


    changeMode = () => {
        const darkMode = !this.state.darkMode;
        if (darkMode) {
            this.mode.push(classes.Dark);
        }
        else
            this.mode.splice(this.mode.indexOf(classes.Dark), 1);

        this.setState({ darkMode: darkMode })
    }

    handleScroll = (event) => {

        if (window.scrollY > 400)
            this.setState({ toTop: true });

        if (window.scrollY < 400)
            this.setState({ toTop: false })

    }

    componentDidMount() {
        Aos.init({ duration: 1000 });

        window.addEventListener('scroll', this.handleScroll);
    }


    toTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    handleMenuOpen = () => {
        this.setState({ menu: true });
        console.log('?')
    }

    handleMenuClose = () => {
        this.setState({ menu: false });
        console.log(this.state.menu)
    }

    render() {


        return (
            <React.Fragment>
                <div className={classes.LandingPage + ' ' + this.mode.join(' ')} id="main">
                    <Header theme={this.mode.join(' ')} />

                    {this.state.toTop ? <div className={classes.ToTop} onClick={this.toTop} data-aos="fade-up">
                        <FaBackward className={classes.Arrow} />
                    </div>
                        : null}

                    {/* <div onClick={this.changeMode} className={classes.DMToggle}>
                        <div className={classes.ToggleContainer}>
                            <FaSun />
                            <FaMoon />
                        </div>
                        <span className={classes.Slider}></span>
                    </div> */}

                    <label className={classes.DMToggle} >
                        <div className={classes.ToggleContainer}>
                            <FaSun />
                            <FaMoon />
                        </div>

                        <input type="checkbox" onClick={this.changeMode} />
                        <span className={classes.Slider}></span>
                    </label>

                    <div className={classes.Bulb} onClick={this.changeMode}>
                        <FaMedapps />
                    </div>

                    <div className={classes.MenuBtn} onClick={this.handleMenuOpen}>
                    </div>

                    <Menu show={this.state.menu} close={this.handleMenuClose} theme={this.mode.join(' ')} />


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