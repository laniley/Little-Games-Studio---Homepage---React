import React from 'react';

import img_little_rocket from './../img_little_rocket.png';

function Games() {
    return (

        <div class="col-12 col-md-8">

            <h1>Games</h1>

            <div class="row justify-content-center align-items-center game-links">
                <div class="col-12 col-md-6 col-lg-4 game-link">
                    <div class="card text-center">
                        <img class="card-img-top" src={img_little_rocket} />
                        <div class="card-body">
                            <h3 class="card-title">Little Rocket</h3>
                            <p class="card-text">Just fly as far as you can and don't get hit by the asteroids.</p>
                            <p>
                                <a href="https://littlerocket-game.com" class="btn btn-primary">PLAY IN BROWSER</a>
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