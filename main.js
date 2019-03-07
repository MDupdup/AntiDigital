let blacklistedSites = [
    "fr.wikipedia.org"
];

if(["fr", "fr-FR", "en-FR"].indexOf(document.documentElement.lang) > -1) {
    var textNode;
    var paragraphs = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);

    const regSng = new RegExp('digitale|digital', 'g');
    const regPlr = new RegExp('digitales|digitaux', 'g');

    const regSngUp = new RegExp('Digitale|Digital', 'g');
    const regPlrUp = new RegExp('Digitales|Digitaux', 'g');

    let words;
    let endChar;
    let tmpPunct;


    if(blacklistedSites.indexOf(window.location.host) === -1) {
        console.log("Y'a-t-il du digital par ici ?");
        while(textNode = paragraphs.nextNode()) {
            words = textNode.nodeValue.split(' ');
            for(var i = 0; i < words.length; i++) {
                if(words[i+1] !== undefined && ["marketing", "business", "learning", "painting"].indexOf(words[i+1].toLowerCase()) > -1) continue;

                else if(new RegExp(['digitale', 'digital', 'digitales', 'digitaux'].join("|")).test(words[i].toLowerCase())) {
                    endChar = words[i].split('')[words[i].length-1];
                    if([',', '.', '!', '?', '"', '\''].indexOf(endChar) > -1) {
                        if(words[i].split('')[words[i].length-2] === ".") {
                            tmpPunct = "...";
                            words[i] = words[i].substring(0, words[i].length-3);
                        } else {
                            tmpPunct = endChar;
                            words[i] = words[i].substring(0, words[i].length-1);
                        }
                    } else {
                        tmpPunct = "";
                    }

                    words[i] = words[i].replace(regSng, 'numérique' + tmpPunct);
                    words[i] = words[i].replace(regPlr, 'numériques' + tmpPunct);
        
                    words[i] = words[i].replace(regSngUp, 'Numérique' + tmpPunct);
                    words[i] = words[i].replace(regPlrUp, 'Numériques' + tmpPunct);
                }
            }
            textNode.nodeValue = words.join(' ');
        }
        document.title = document.title.replace(regSng, 'numérique');
    }
}