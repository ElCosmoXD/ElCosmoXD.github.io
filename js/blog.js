/*Stole this from:
    https://stackoverflow.com/a/814628
*/
function readBlogEntry(url) {
    var queryStart = url.indexOf("?") + 1,
        queryEnd   = url.indexOf("#") + 1 || url.length + 1,
        query = url.slice(queryStart, queryEnd - 1),
        pairs = query.replace(/\+/g, " ").split("&"),
        parms = {}, i, n, v, nv;

    if (query === url || query === "") return;

    for (i = 0; i < pairs.length; i++) {
        nv = pairs[i].split("=", 2);
        n = decodeURIComponent(nv[0]);
        v = decodeURIComponent(nv[1]);

        if (!parms.hasOwnProperty(n)) parms[n] = [];
        parms[n].push(nv.length === 2 ? v : null);
    }

    return parms;
}

//Also stole from: https://stackoverflow.com/a/41133213
function readFile(url) {
    var result = null;
    var xmlhttp = new XMLHttpRequest();
    
    xmlhttp.open("GET", url, false);
    xmlhttp.send();
    
    if (xmlhttp.status==200) {
        result = xmlhttp.responseText;
    }

    return result;
}

function blogMain() {
    var converter = new showdown.Converter();

    var blogEntry = readBlogEntry(document.URL);
    var blogUrl = document.location.origin + "/blog/" + blogEntry["blog"];
    var text = readFile(blogUrl);
    var html = converter.makeHtml(text);

    document.getElementById("blog-main").innerHTML = html;
}
