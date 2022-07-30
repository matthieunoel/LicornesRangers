function readTextFile(filePath) {
    var rawFile = new XMLHttpRequest();
    var allText = ""
    rawFile.open("GET", filePath, false);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                allText = rawFile.responseText;
                // alert(allText);
            }
        }
    }
    rawFile.send(null);
    return allText
}