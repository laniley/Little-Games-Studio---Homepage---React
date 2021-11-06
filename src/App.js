import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import TopNavBar from './components/TopNavBar.js';
import About from './components/About.js';

function App() {
    return (
        <div className="App">
            {/*  needed for Facebook SDK */}
            <div id="fb-root"></div>

            <TopNavBar />

            <div className="container-fluid">
                <div className="row justify-content-center align-items-center">
                    < About />
                </div>
            </div>

            <nav id="secondary-navbar" className="navbar fixed-top navbar-light bg-light">
                <ul className="nav navbar-nav ml-auto">
                    <li className="nav-item">
                        <div
                            className="fb-like"
                            data-href="https://www.facebook.com/Little-Games-Studio-200691990513558/"
                            data-layout="button_count"
                            data-size="large"
                            data-action="like"
                            data-share="true" />
                    </li>
                </ul>
            </nav>

        </div>
    );
}

export default App;
