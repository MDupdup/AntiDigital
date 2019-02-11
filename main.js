let blacklistedSites = [
    "fr.wikipedia.org",
];

if(["fr", "fr-FR"].indexOf(document.documentElement.lang) > -1) {
    var textNode;
    var words = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);

    const reg = new RegExp('digitale|digital', 'gi');

    if(blacklistedSites.indexOf(window.location.host) === -1) {
        console.log("Y'a-t-il du digital par ici ?");
        let previousNode = "";
        while(textNode = words.nextNode()) {
            if(["marketing", "business", ""].indexOf(textNode.nextSibling.toLowerCase()) > -1) {
                console.log("ah, un vrai digital");
                previousNode = textNode.nodeValue;
                continue;
            } 

            previousNode = textNode.nodeValue;

            textNode.nodeValue = textNode.nodeValue.replace(reg, 'numérique');
        }
    
        document.title = document.title.replace(reg, 'numérique');
    }
}