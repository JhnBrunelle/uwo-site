import React, {Component} from 'react';
import './App.css';
import './stars.css';
import "../node_modules/animate.css/animate.min.css";
import {Icon} from 'react-fa'


class App extends Component {

    render() {
        return (
            <div className="App">
                <div className="space"/>
                <div className="App-header">
                    <div className="titleBlock">
                        <div className="animated rotateInDownLeft">
                            <h1>John<br/>Brunelle</h1>
                        </div>
                    </div>

                    <div className="spacer"></div>

                    <div className="infoBlock">
                        <div className="animated fadeInDown">
                            <p> Electrical Engineering and CS Student<br/>
                                <Icon name="graduation-cap"/> University of Western Ontario<br/>
                                <Icon name="home"/>  Simi Valley, California</p>

                            <div className="links">
                                <a target="_blank" href="https://github.com/JhnBrunelle"><Icon name="github"/></a>
                                &nbsp;&nbsp;&nbsp;
                                <a target="_blank" href="https://www.linkedin.com/in/johnbrunelleece/"><Icon name="linkedin"/></a>
                                &nbsp;&nbsp;&nbsp;
                                <a target="_blank" href="mailto:jhnbrunelle@gmail.com?Subject=Hello"><Icon name="envelope"/></a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
