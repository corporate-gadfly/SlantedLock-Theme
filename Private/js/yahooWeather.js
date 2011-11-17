// See http://developer.yahoo.com/weather/#codes
var codeDescriptions = {
    0: {name: 'Tornado',                    icon: 'tstorm3'},
    1: {name: 'Tropical Storm',             icon: 'tstorm3'},
    2: {name: 'Hurricane',                  icon: 'tstorm3'},
    3: {name: 'Severe Thunderstorms',       icon: 'tstorm3'},
    4: {name: 'Thunderstorms',              icon: 'tstorm2'},
    5: {name: 'Mixed Rain and Snow',        icon: 'sleet'},
    6: {name: 'Mixed Rain and Sleet',       icon: 'sleet'},
    7: {name: 'Mixed Snow and Sleet',       icon: 'sleet'},
    8: {name: 'Freezing Drizzle',           icon: 'sleet'},
    9: {name: 'Drizzle',                    icon: 'light_rain'},
    10: {name: 'Freezing Rain',             icon: 'sleet'},
    11: {name: 'Showers',                   icon: 'shower2'},
    12: {name: 'Showers',                   icon: 'shower2'},
    13: {name: 'Snow Flurries',             icon: 'snow1'},
    14: {name: 'Light Snow Showers',        icon: 'snow2'},
    15: {name: 'Blowing Snow',              icon: 'snow4'},
    16: {name: 'Snow',                      icon: 'snow4'},
    17: {name: 'Hail',                      icon: 'hail'},
    18: {name: 'Sleet',                     icon: 'sleet'},
    19: {name: 'Dust',                      icon: 'mist'},
    20: {name: 'Foggy',                     icon: 'fog'},
    21: {name: 'Haze',                      icon: 'fog'},
    22: {name: 'Smoky',                     icon: 'fog'},
    23: {name: 'Blustery',                  icon: 'cloudy1'},
    24: {name: 'Windy',                     icon: 'cloudy1'},
    25: {name: 'Cold',                      icon: 'overcast'},
    26: {name: 'Cloudy',                    icon: 'cloudy1'},
    27: {name: 'Mostly Cloudy',             icon: 'cloudy4_night'},
    28: {name: 'Mostly Cloudy',             icon: 'cloudy4'},
    29: {name: 'Partly Cloudy',             icon: 'cloudy2_night'},
    30: {name: 'Partly Cloudy',             icon: 'cloudy2'},
    31: {name: 'Clear',                     icon: 'sunny_night'},
    32: {name: 'Sunny',                     icon: 'sunny'},
    33: {name: 'Fair',                      icon: 'mist_night'},
    34: {name: 'Fair',                      icon: 'mist'},
    35: {name: 'Mixed Rain and Hail',       icon: 'hail'},
    36: {name: 'Hot',                       icon: 'sunny'},
    37: {name: 'Isolated Thunderstorms',    icon: 'tstorm1'},
    38: {name: 'Scattered Thunderstorms',   icon: 'tstorm2'},
    39: {name: 'Scattered Thunderstorms',   icon: 'tstorm2'},
    40: {name: 'Scattered Showers',         icon: 'tstorm2'},
    41: {name: 'Heavy Snow',                icon: 'snow5'},
    42: {name: 'Scattered Snow Showers',    icon: 'snow3'},
    43: {name: 'Heavy Snow',                icon: 'snow5'},
    44: {name: 'Partly Cloudy',             icon: 'cloudy1'},
    45: {name: 'Thundershowers',            icon: 'storm1'},
    46: {name: 'Snow showers',              icon: 'snow2'},
    47: {name: 'Isolated Thundershowers',   icon: 'tstorm1'},
    3200: {name: 'Not Available',           icon: 'dunno'}
}

function xml_loaded(request) {
    if (request.responseXML) {
        var loc = tmp = dsc = icn = "";
        var effectiveRoot = findChild(findChild(request.responseXML, "rss"), "channel");
        conditionTag = findChild(findChild(effectiveRoot, "item"), "yweather:condition");
        loc = trimWhiteSpace(findChild(effectiveRoot, "yweather:location").getAttribute("city")).toLowerCase();
        tmp = parseInt(conditionTag.getAttribute("temp")) + gblObj.deg;
        var weatherCode = conditionTag.getAttribute('code').toLowerCase();
        dsc = codeDescriptions[weatherCode].name;
        icn = "images/" + gblObj.iconSet + "/" + codeDescriptions[weatherCode].icon + gblObj.iconExt;
        doweather(loc, tmp, dsc, icn);
        var nowtime = new Date();
        var nextupdate = new Date(nowtime.getTime() + (60000 * gblObj.updateInterval));
        updateDB(loc, tmp, dsc, icn, nextupdate.getTime());
        var thefetch = setTimeout(function () {
            fetchWeatherCache(loc, tmp, dsc, icn, nextupdate.getTime(), gblObj.updateInterval)
        }, 60000 * gblObj.updateInterval)
    } else {
        document.getElementById("location").innerHTML = "XHR Error..."
    }
}
