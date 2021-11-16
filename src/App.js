import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import ReactGA from 'react-ga';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import TopNavBar from './components/TopNavBar';
import Layout from './components/Layout.js';
import About from './components/About';
import Games from './components/Games';
import LittleRocket from './components/Games/LittleRocket';

function App() {

    ReactGA.initialize('UA-66507473-3');
    ReactGA.pageview(window.location.pathname + window.location.search);

    return (
        <div className="App">
            {/*  needed for Facebook SDK */}
            <div id="fb-root"></div>

            <TopNavBar />

            <Routes>
                <Route path='/' element={<Layout />} >
                    <Route index element={<Navigate to="/games" />} />
                    <Route path='games' >
                        <Route index element={<Games />} />
                        <Route path='little-rocket' element={<LittleRocket />} />
                    </Route>
                    <Route path='about' element={<About />} />
                </Route>
            </Routes>

            {/* <nav id="secondary-navbar" className="navbar fixed-top navbar-light bg-light">
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
            </nav> */}

        </div>
    );
}

export default App;
