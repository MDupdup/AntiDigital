let blacklistedSites = [
    "fr.wikipedia.org",
];

if(["fr", "fr-FR"].indexOf(document.documentElement.lang) > -1) {
    var textNode;
    var words = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);

    const regSng = new RegExp('digitale|digital', 'gi');
    const regPlr = new RegExp('digitales|digitaux', 'gi');

    const regSngUp = new RegExp('Digitale|Digital', 'gi');
    const regPlrUp = new RegExp('Digitales|Digitaux', 'gi');



    if(blacklistedSites.indexOf(window.location.host) === -1) {
        console.log("Hein"+ window.location.host);
        console.log("Y'a-t-il du digital par ici ?");
        while(textNode = words.nextNode()) {
            if(words.nextSibling() !== null) {
                if(["marketing", "business", ""].indexOf(words.nextSibling().nodeValue.toLowerCase()) > -1) {
                    console.log("ah, un vrai digital");
                    continue;
                }
            }
            console.log("ça dégage");
            textNode.nodeValue = textNode.nodeValue.replace(regSng, 'numérique');
            textNode.nodeValue = textNode.nodeValue.replace(regPlr, 'numériques');

            textNode.nodeValue = textNode.nodeValue.replace(regSngUp, 'Numérique');
            textNode.nodeValue = textNode.nodeValue.replace(regPlrUp, 'Numériques');
        }
        document.title = document.title.replace(regSng, 'numérique');
    }
}