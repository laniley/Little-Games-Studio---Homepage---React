import React from 'react';
import { Link } from 'react-router-dom';

import './Games.scss';

import img_little_rocket from './../../images/img_little_rocket.png';

function Games() {
    return (

        <div className="col-12 col-md-8">

            <div className="row justify-content-center align-items-center">
                <h1>Games</h1>
            </div>

            <div className="row justify-content-center align-items-center game-links">
                <div className="col-12 col-md-8 col-lg-4 game-link">
                    <div className="card text-center">
                        <img className="card-img-top" src={img_little_rocket} alt="Little Rocket Logo"/>
                        <div className="card-body">
                            <h3 className="card-title">Little Rocket</h3>
                            <p className="card-text">Just fly as far as you can and don't get hit by the asteroids.</p>
                            <p>
                                <Link to="/games/little-rocket/" className="btn btn-primary">PLAY IN BROWSER</Link>
                            </p>
                            {/* <p class="app-market-links">
                                <div class="app-market-badge">
                                    <a href='https://play.google.com/store/apps/details?id=net.littleGames.LittleRocket&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
                                        <img alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png' />
                                    </a>
                                </div>
                            </p> */}
                        </div>
                    </div>
                </div>
                {/* <div class="col-12 col-md-6 col-lg-4 game-link">
                    <div class="card text-center">
                        <img class="card-img-top" src="{{rootURL}}assets/images/save_the_core.png" />
                        <div class="card-body">
                            <h3 class="card-title">Save The Core</h3>
                            <p class="card-text">Protect the core against all the obstacles flying towards it.</p>
                            <p>
                                <a href="http://www.little-games.net/SaveTheCore/" class="btn btn-primary">PLAY IN BROWSER</a>
                            </p>
                            <p class="app-market-links">
                                <a class="app-market-badge" href='https://play.google.com/store/apps/details?id=net.littleGames.SaveTheCore&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
                                    <img alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png' />
                                </a>
                            </p>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default Games;