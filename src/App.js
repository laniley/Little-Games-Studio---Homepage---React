import React from 'react';
import { Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import TopNavBar from './components/TopNavBar.js';
import Layout from './components/Layout.js';
import About from './components/About.js';
import Games from './components/Games.js';

function App() {
    return (
        <div className="App">
            {/*  needed for Facebook SDK */}
            <div id="fb-root"></div>

            <TopNavBar />

            <Routes>
                <Route path='/' element={<Layout />} >
                    <Route index element={<Games />} />
                    <Route path='/games' element={<Games />} />
                    <Route path='/about' element={<About />} />
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
