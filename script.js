function getXHR() {
    var xhrobj;
    if (window.XMLHttpRequest) {
        xhrobj = new XMLHttpRequest();
    } else {
        xhrobj = new ActiveXObject('Microsoft.XMLHTTP');
    }
    return xhrobj;
}

var APPID = "6dd5d55e84742b720ad18912a82e4c96";


var send = document.getElementById('send');
var selectedcity = document.getElementById('selectedcity');
var clouddescr = document.getElementById('clouddescr');
var cloudimg = document.getElementById('cloudimg');
var temp = document.getElementById('temp');
var pressure = document.getElementById('pressure');
var humidity = document.getElementById('humidity');
var windspeed = document.getElementById('windspeed');