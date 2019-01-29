if(["fr", "fr-FR"].indexOf(document.documentElement.lang) > -1) {
    alert("coucou");
    var textNode;
    var words = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);

    const reg = new RegExp('digitale|digital', 'gi');

    console.log("here");

    while(textNode = words.nextNode()) {
        textNode.nodeValue = textNode.nodeValue.replace(reg, 'numérique');
    }

    document.title = document.title.replace(reg, 'numérique');
}