if(["fr", "fr-FR"].indexOf(document.documentElement.lang) > -1) {
    var textNode;
    var words = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);

    const reg = new RegExp('digitale|digital', 'gi');

    console.log("Du digital par ici ?");

    while(textNode = words.nextNode()) {
        textNode.nodeValue = textNode.nodeValue.replace(reg, 'numérique');
    }

    document.title = document.title.replace(reg, 'numérique');
}