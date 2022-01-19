const frasesBonitas = ["shitpoststatus","builtbyedsnowden","oiebb","pedroesteveaqui","cadeoandre?","derrubaagorayuri"];
        let counter =0;
        let random = Math.floor((Math.random() * frasesBonitas.length) + 1);
        document.getElementById("main-input").onkeypress = function(e) {
            var chr = String.fromCharCode(e.which);


            if (chr == frasesBonitas[random][counter]) {
                counter++;
                return chr
            } else {
                return false
            }
        };
        console.log('oie')