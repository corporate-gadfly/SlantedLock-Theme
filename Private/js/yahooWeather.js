// See http://developer.yahoo.com/weather/#codes
var weatherCodes = {
    0: {label: 'Tornado',                   icon: 'tstorm3'},
    1: {label: 'Tropical Storm',            icon: 'tstorm3'},
    2: {label: 'Hurricane',                 icon: 'tstorm3'},
    3: {label: 'Severe Thunderstorms',      icon: 'tstorm3'},
    4: {label: 'Thunderstorms',             icon: 'tstorm2'},
    5: {label: 'Mixed Rain and Snow',       icon: 'sleet'},
    6: {label: 'Mixed Rain and Sleet',      icon: 'sleet'},
    7: {label: 'Mixed Snow and Sleet',      icon: 'sleet'},
    8: {label: 'Freezing Drizzle',          icon: 'sleet'},
    9: {label: 'Drizzle',                   icon: 'light_rain'},
    10: {label: 'Freezing Rain',            icon: 'sleet'},
    11: {label: 'Showers',                  icon: 'shower2'},
    12: {label: 'Showers',                  icon: 'shower2'},
    13: {label: 'Snow Flurries',            icon: 'snow1'},
    14: {label: 'Light Snow Showers',       icon: 'snow2'},
    15: {label: 'Blowing Snow',             icon: 'snow4'},
    16: {label: 'Snow',                     icon: 'snow4'},
    17: {label: 'Hail',                     icon: 'hail'},
    18: {label: 'Sleet',                    icon: 'sleet'},
    19: {label: 'Dust',                     icon: 'mist'},
    20: {label: 'Foggy',                    icon: 'fog'},
    21: {label: 'Haze',                     icon: 'fog'},
    22: {label: 'Smoky',                    icon: 'fog'},
    23: {label: 'Blustery',                 icon: 'cloudy1'},
    24: {label: 'Windy',                    icon: 'cloudy1'},
    25: {label: 'Cold',                     icon: 'overcast'},
    26: {label: 'Cloudy',                   icon: 'cloudy1'},
    27: {label: 'Mostly Cloudy',            icon: 'cloudy4_night'},
    28: {label: 'Mostly Cloudy',            icon: 'cloudy4'},
    29: {label: 'Partly Cloudy',            icon: 'cloudy2_night'},
    30: {label: 'Partly Cloudy',            icon: 'cloudy2'},
    31: {label: 'Clear',                    icon: 'sunny_night'},
    32: {label: 'Sunny',                    icon: 'sunny'},
    33: {label: 'Fair',                     icon: 'mist_night'},
    34: {label: 'Fair',                     icon: 'mist'},
    35: {label: 'Mixed Rain and Hail',      icon: 'hail'},
    36: {label: 'Hot',                      icon: 'sunny'},
    37: {label: 'Isolated Thunderstorms',   icon: 'tstorm1'},
    38: {label: 'Scattered Thunderstorms',  icon: 'tstorm2'},
    39: {label: 'Scattered Thunderstorms',  icon: 'tstorm2'},
    40: {label: 'Scattered Showers',        icon: 'tstorm2'},
    41: {label: 'Heavy Snow',               icon: 'snow5'},
    42: {label: 'Scattered Snow Showers',   icon: 'snow3'},
    43: {label: 'Heavy Snow',               icon: 'snow5'},
    44: {label: 'Partly Cloudy',            icon: 'cloudy1'},
    45: {label: 'Thundershowers',           icon: 'storm1'},
    46: {label: 'Snow showers',             icon: 'snow2'},
    47: {label: 'Isolated Thundershowers',  icon: 'tstorm1'},
    3200: {label: 'Not Available',          icon: 'dunno'}
}

function xml_loaded(request) {
    if (request.responseXML) {
        var loc = tmp = dsc = icn = "";
        var effectiveRoot = findChild(findChild(request.responseXML, "rss"), "channel");
        conditionTag = findChild(findChild(effectiveRoot, "item"), "yweather:condition");
        loc = trimWhiteSpace(findChild(effectiveRoot, "yweather:location").getAttribute("city")).toLowerCase();
        tmp = parseInt(conditionTag.getAttribute("temp")) + gblObj.deg;
        var code = conditionTag.getAttribute('code').toLowerCase();
        dsc = weatherCodes[code].label;
        icn = "images/" + gblObj.iconSet + "/" + weatherCodes[code].icon + gblObj.iconExt;
        doWeather(loc, tmp, dsc, icn);
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
