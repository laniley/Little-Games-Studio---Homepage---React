import React from 'react';

import img_melanie from './img_melanie.jpg';
import img_cats from './img_cats.jpg';

function About() {
    return (
        <div className="col-12 col-md-8">
            <img className="curved-image --left" width="300" src={img_melanie} alt="Melanie Mende, the founder of Little Games Studio." />
            <div className="align-justify">
                <h1>About</h1>
                <p>
                    Hi, my name is Melanie Mende.
                </p>
                <p>
                    I'm living in Munich, Germany, together with my husband Dennis and our two cats, Sammy and Luna.
                </p>
                <p>
                    My first PC ever was a <i>Commodore64</i> and I loved playing games like <i>Frogger</i> and <i>Winter Olympics</i> on it. I always wanted to understand how it works. How the pixels come to life.
                    So I studied <i>Applied Computer Science</i>, got my M.Sc., and now I'm working as a Data Integration Specialist.
                </p>
            </div>
            <img className="curved-image --right" width="300" src={img_cats} alt="my cats" />
            <div className="align-justify">
                <p>
                    I love my job, it is challenging and demanding, but not very visual. And as I'm also a very creative person, I needed to have a compensation.
                    So I started to learn how to develope games. Things like <i>Unity3d</i>, <i>Blender</i>, <i>Inkscape</i>, <i>Android</i> and <i>iOS</i> were all new to me, so it was a long way to go.
                </p>
                <p>
                    But finally, in 2018, I founded my own game development studio "Little Games Studio".
                </p>
                <p>
                    I'm always interested in talking to other nerds, so if you have feedback, or just want to chat, leave me a message.
                </p>
                <p>
                    <a href="mailto:melanie.mende@little-games-studio.com">melanie.mende@little-games-studio.com</a>
                </p>
            </div>
        </div>
    );
}

export default About;