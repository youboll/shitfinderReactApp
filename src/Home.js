import React from 'react';
import './index.css'

export default () => {
    const frasesBonitas = ["shitpoststatus","builtbyedsnowden","oiebb","pedroesteveaqui","cadeoandre?","derrubaagorayuri"];
    let counter =0;
    let random = Math.floor((Math.random() * frasesBonitas.length) - 1);

    function getPhase (e) {
        var chr = String.fromCharCode(e.which);

        
        
        console.log(counter)
        if (chr == frasesBonitas[random][counter]) {
            counter++;
            return chr
        } else {
            return false
        }
    };
    return(
        <div>
            <img id="logo" src="/logo.svg" alt="ShitFinder logo"></img>
            <div className="tip">TIP: Smash your keyboard!!!</div>
            <input id="main-input" placeholder="Search" onKeyPress={(e) => getPhase(e)}/><br/>
            <strong><a href="./player"><button id="search-button">Have Fun!</button></a></strong>
            <script src="./index.js"/>
        </div>
    )
}