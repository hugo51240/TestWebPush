var getHttpREquest = function () {
    var httpRequest = false;

    if (window.XMLHttpRequest) {
        httpRequest = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        try {
            httpRequest = new ActiveXObject("Msxml2.XMLHTTP");
        }
        catch (e) {
            try {
                httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
            }
            catch (e) { }
        }
    }

    if (!httpRequest) {
        alert('Abandon :(Impossible de créer une instance XMLHTTP');
        return false;
    }

    return httpRequest;
}



var httpRequest = getHttpREquest();
httpRequest.onreadystatechange = function () {
    if (httpRequest.readyState === 4) {
        document.getElementById('result').innerHTML = httpRequest.responseText;
    }
}
httpRequest.open("GET", "https://merry-tanuki-7ee9cd.netlify.app/", true);
httpRequest.send();


/***** récupération fichier JSON *****/
/*
var xhr = new XMLHttpRequest();
xhr.open('GET', '/index.php');
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        var response = JSON.parse(xhr.responseText);
        alert(response.name);
    }
}
xhr.send();
*/