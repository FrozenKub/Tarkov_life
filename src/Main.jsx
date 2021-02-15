import React, {useRef, useEffect} from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Menu from "./menu.jsx"
import CalArm from "./cal-arm.jsx"
import Login from "./Login.jsx"
import Code from "./Code.jsx"
import Register from "./Register.jsx"
import SightsNVD from "./sights-nvd.jsx";


class Main extends React.Component {

    constructor(props) {
        super(props);

    }



    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/">

                            <div className="centered">
                                <a>
                                    <Link to="/login">Login</Link>
                                </a>
                                <a>
                                    <Link to="/register">Register</Link>
                                </a>
                                <a>
                                    <Link to="/root">Main</Link>
                                </a>
                            </div>

                        </Route>
                        <Route exact path="/register">
                            <Register/>
                        </Route>
                        <Route exact path="/code">
                            <Code/>
                        </Route>
                        <Route exact path="/login">
                            <Login/>
                        </Route>
                        <Route exact path="/root">
                            <Menu/>
                        </Route>
                        <Route exact path="/caliber-armor">
                            <CalArm/>
                        </Route>
                        <Route exact path="/sights-nvd">
                            <SightsNVD/>
                        </Route>
                        <Route exact path="/">
                            <Home/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default Main

function Home() {
}
