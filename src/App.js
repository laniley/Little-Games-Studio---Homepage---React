import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

/* import CookieConsent from "react-cookie-consent";
import ReactGA from 'react-ga'; */

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import TopNavBar from './components/TopNavBar';
import Layout from './components/Layout.js';
import About from './components/About';
import Games from './components/Games';
import LittleRocket from './components/Games/LittleRocket';

function App() {

    /* ReactGA.initialize('UA-66507473-3');
    ReactGA.pageview(window.location.pathname + window.location.search); */

    return (
        <div className="App">

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

{/*             <CookieConsent
                location="bottom"
                buttonText="I understand"
                cookieName="liitle_games_studio"
                style={{ background: "#2B373B" }}
                buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
                expires={150}
            >
                This website uses cookies to enhance the user experience.{" "}
            </CookieConsent> */}

        </div>
    );
}

export default App;
