import classes from './LandingPage.module.css';
import React, { Component } from 'react';
import About from '../../components/About/About';
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
                <div className={classes.LandingPage + ' ' + this.mode.join(' ')} >
                    <h1>Aleksandar Popovic Portfolio</h1>
                    <button onClick={this.changeMode}>Dark mode</button>
                    <p>Apsolvent na Fakultetu tehnickih nauka</p>
                </div>
                <div>
                    <About theme={this.mode.join(' ')} />
                </div>
            </React.Fragment>
        );
    }

}

export default LandingPage;