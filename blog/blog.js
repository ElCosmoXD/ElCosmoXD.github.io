function readTextFile(file) {
    var result = null;
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open("GET", file, false);
    xmlhttp.send();

    if (xmlhttp.status == 200) {
        result = xmlhttp.responseText;
    }

    return result;
}
