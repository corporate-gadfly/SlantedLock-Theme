/****************************************************************

	Author: Claude626 (MacRumors)

	Date: 9.22.2010

	

	Theme Name: Slanted Lock

	Version: 1.5.4

	

	Tested: iPhone 4 with iOS 4.0.1

	

	This theme was based off "Typophony 4" by Angelman8 at deviantart.com.	The original theme can be

	downloaded here: http://angelman8.deviantart.com/art/Typophone-4-175481865?q=+sort%3Atime+iphone&qo=90

	

	However, this theme and its components have been rewritten almost entirely.

	It no longer relies on images to display numeric digits.  Weather has been rewritten.  Styling and

	layout has been redone and separated entirely from the html file.  Scripts has been optimized,

	consolidated and re-organized/re-written into a single js file.(with separate handler files for

	different weather source)

	

	This itteration of the theme resembles very little if at all to the original theme that inspired me.

	However, I just wanted to attribute to Typophony 4 for its inspiration.

	

	----------

	

	This file was re-written(again), optimized and consolidated for better compatibility on iPhone use...

	

	This script is the config/hook for the iPhone lockscreen.  This script's duty is to dynamically set

	the style sheet and the weather sources javascript file.  It also calculates the time for the clock

	function.

	

	Weather AJAX calls initiates from this script and pass control to the designated weather sources

	handler script file determined by the user.

	

	----------

	v 1.5.4

	- Critical bug fix

	- Minor cosmetic changes to config

	

	v 1.5.3

	- Ability to set wallpaper sets

	- optimizations

	

	v 1.5.2

	- Configuration pre-sets to current settings

	- Ability to specify custom icon set

	- Ability to specify custom update interval

	

	v 1.5

	Added caching capability to weather using HTML5's SQLite.

*****************************************************************/



var gblObj = {
    systemDB: "",
    stylesheet: "SlantedLock",
    iconExt: ".png",
    deg: "&deg;C",
    source: "yahooWeather",
    woeid: "24165317",
    zipcode: "92843",
    useRealFeel: 0,
    isCelcius: 1,
    use24hours: 0,
    iconSet: "HTC",
    updateInterval: 15,
    bkgset: "default"
};
function doWeather(l, t, d, i) {
    document.getElementById("weathercluster").innerHTML = '<img id="weatherIcon" src="images/' + gblObj.iconSet + '/dunno' + gblObj.iconExt + '"/><div id="location">noCache</div><div id="temp">?&deg;F</div><div id="desc">noCache</div>';
    document.getElementById("location").innerHTML = l;
    document.getElementById("temp").innerHTML = t;
    document.getElementById("desc").innerHTML = d;
    document.getElementById("weatherIcon").src = i
}
function fetchWeatherData() {
    var u = 'f';
    if (gblObj.isCelcius) {
        u = 'c';
        gblObj.deg = "&deg;C"
    }
    var url = (gblObj.source == "yahooWeather") ? "http://weather.yahooapis.com/forecastrss?u=" + u + "&w=" + gblObj.woeid : "http://wu.apple.com/adcbin/apple/Apple_Weather_Data.asp?zipcode=" + gblObj.zipcode;
    var xml_request = new XMLHttpRequest();
    xml_request.onload = function (e) {
        xml_loaded(xml_request)
    };
    xml_request.overrideMimeType("text/xml");
    xml_request.open("GET", url + "&bustCache=" + Math.random());
    xml_request.setRequestHeader("Cache-Control", "no-cache");
    xml_request.send(null);
    return xml_request
}
function findChild(element, nodeName) {
    var child;
    for (child = element.firstChild; child !== null; child = child.nextSibling) {
        if (child.nodeName == nodeName) {
            return child
        }
    }
    return null
}
function trimWhiteSpace(string) {
    return string.replace(/^\s*/, '').replace(/\s*$/, '')
}
function doWeatherCheck(isOnline, loc, temp, desc, icon, updtime, updint) {
    var nowtime = new Date();
    if ((isOnline) && ((updtime === 0) || (nowtime.getTime() >= updtime))) {
        fetchWeatherData()
    } else {
        doWeather(loc, temp, desc, icon);
        var nextupdate = updtime - nowtime.getTime();
        if (updtime < nowtime.getTime()) {
            nextupdate = new Date(nowtime.getTime() + (60000 * updint))
        }
        setTimeout(function () {
            fetchWeatherCache(loc, temp, desc, icon, updtime, updint)
        }, nextupdate)
    }
}
function fetchWeatherCache(loc, temp, desc, icon, updtime, updint) {
    var url = "http://www.google.com/";
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("HEAD", url, true);
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {
            if (xmlhttp.status == 200) {
                doWeatherCheck(true, loc, temp, desc, icon, updtime, updint)
            } else {
                doWeatherCheck(false, loc, temp, desc, icon, updtime, updint)
            }
        }
    };
    xmlhttp.send(null)
}
function doTime() {
    setTimeout(doTime, 1000);
    var d = new Date();
    var se = d.getSeconds();
    document.getElementById('secondsbox').innerHTML = (se < 10) ? '0' + se : se;
    var minuteBox = document.getElementById('minutebox');
    if (se === 0 || parseInt(minuteBox.innerHTML, 10) != d.getMinutes()) {
        var mn = d.getMinutes();
        var hourBox = document.getElementById('hourbox');
        var nowhr = parseInt(hourBox.innerHTML, 10);
        minuteBox.innerHTML = (mn < 10) ? '0' + mn : mn;
        var hour = d.getHours();
        if (mn === 0 || (nowhr != hour && nowhr != Math.abs(12 - hour))) {
            var hr = bkg = hour;
            var am_pm = 'PM';
            if (gblObj.use24hours == false) {
                if (hr < 12) {
                    am_pm = 'AM';
                    if (hr === 0) {
                        hr = 12
                    }
                } else {
                    if (hr > 21) {
                        hr = hr - 12
                    } else if (hr > 12) {
                        hr = (hr - 12)
                    }
                }
            } else if (hr < 12) {
                am_pm = 'AM';
                if (hr < 10) {
                    hr = '0' + hr
                }
            }
            hourBox.innerHTML = hr;
            document.getElementById('ampmbox').innerHTML = am_pm;
            if (gblObj.bkgset != "default") {
                document.getElementById("custombkg").src = "images/" + gblObj.bkgset + "/" + bkg + ".jpg"
            }
            var dateBox = document.getElementById('datebox');
            if (hr === 0 || parseInt(dateBox.innerHTML, 10) != d.getDate()) {
                var armonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                var arday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                document.getElementById('daybox').innerHTML = arday[d.getDay()].toUpperCase();
                document.getElementById('monthbox').innerHTML = armonth[d.getMonth()].toUpperCase();
                dateBox.innerHTML = d.getDate();
                document.getElementById('yearbox').innerHTML = d.getFullYear()
            }
        }
    }
}
function configHandler(transaction, results) {
    for (var i = 0; i < results.rows.length; i++) {
        var cached = results.rows.item(i);
        gblObj.source = cached.source;
        gblObj.woeid = cached.woeid;
        gblObj.zipcode = cached.zipcode;
        gblObj.useRealFeel = cached.useRealFeel;
        gblObj.isCelcius = cached.useCelcius;
        gblObj.use24hours = cached.use24hours;
        gblObj.iconSet = cached.iconset;
        gblObj.updateInterval = cached.updateInterval;
        gblObj.stylesheet = cached.stylesheet;
        gblObj.bkgset = cached.bkgset;
        var headID = document.getElementsByTagName("head")[0];
        var styleNode = document.createElement('link');
        styleNode.type = 'text/css';
        styleNode.rel = 'stylesheet';
        styleNode.href = 'css/' + gblObj.stylesheet + '.css';
        headID.appendChild(styleNode);
        if (gblObj.bkgset != "default") {
            var bodyID = document.getElementsByTagName("body")[0];
            var bkg = document.createElement("img");
            bkg.setAttribute("src", "/private/var/mobile/Library/SpringBoard/LockBackground.jpg");
            bkg.setAttribute("id", "custombkg");
            bodyID.insertBefore(bkg, bodyID.firstChild)
        } else {
            var bkgimg = document.getElementById('custombkg');
            if (bkgimg) {
                document.getElementsByTagName("body")[0].removeChild(bkgimg)
            }
        }
        doTime();
        if (cached.source != "none") {
            var scriptNode = document.createElement('script');
            scriptNode.type = 'text/javascript';
            scriptNode.src = 'js/' + gblObj.source + '.js';
            headID.appendChild(scriptNode);
            fetchWeatherCache(cached.location, cached.temp, cached.desc, cached.icon, cached.updatetime, cached.updateInterval)
        } else {
            document.getElementById("weathercluster").innerHTML = "&nbsp;"
        }
    }
}
function init() {
    var myDB = openDatabase("SlantedLockCache", '1.0', "Slanted Lock Cache", 64 * 1024);
    gblObj.systemDB = myDB;
    var db = gblObj.systemDB;
    db.transaction(function (transaction) {
        transaction.executeSql("SELECT * FROM slcache WHERE name='slcache';", [], configHandler)
    })
}
function updateDB(loc, tmp, dsc, icn, updtime) {
    var db = gblObj.systemDB;
    db.transaction(function (transaction) {
        transaction.executeSql("UPDATE slcache SET location=?, temp=?, desc=?, icon=?, updatetime=? where name=?;", [loc, tmp, dsc, icn, updtime, "slcache"])
    })
}
