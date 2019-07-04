function getXHR() {
    var xhrobj;
    if (window.XMLHttpRequest) {
        xhrobj = new XMLHttpRequest();
    } else {
        xhrobj = new ActiveXObject('Microsoft.XMLHTTP');
    }
    return xhrobj;
}