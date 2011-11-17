var MiniIcons =   
[
	"sunny", 						// 1 Sunny
	"cloudy1",						// 2 Mostly Sunny
	"cloudy2",					// 3 Partly Sunny
	"cloudy3",					// 4 Intermittent Clouds
	"cloudy4",					// 5 Hazy Sunshione
	"cloudy5",					// 6 Mostly Cloudy
	"cloudy5",					// 7 Cloudy (am/pm)
	"overcast",					// 8 Dreary (am/pm)
	"dunno",						// 9 retired
	"dunno",						// 10 retired
	"fog",						// 11 fog (am/pm)
	"shower1",						// 12 showers (am/pm)
	"shower3",					// 13 Mostly Cloudy with Showers
	"shower2",					// 14 Partly Sunny with Showers
	"tstorm3",				// 15 Thunderstorms (am/pm)
	"tstorm2",				// 16 Mostly Cloudy with Thunder Showers
	"tstorm1",				// 17 Partly Sunnty with Thunder Showers
	"light_rain",						// 18 Rain (am/pm)
	"cloudy5",					// 19 Flurries (am/pm)
	"cloudy4",					// 20 Mostly Cloudy with Flurries
	"cloudy2",					// 21 Partly Sunny with Flurries
	"snow5",						// 22 Snow (am/pm)
	"snow3",						// 23 Mostly Cloudy with Snow
	"hail",						// 24 Ice (am/pm)
	"sleet",						// 25 Sleet (am/pm)
	"hail",						// 26 Freezing Rain (am/pm)
	"dunno",						// 27 retired
	"dunno",						// 28 retired
	"sleet",					// 29 Rain and Snow Mixed (am/pm)
	"sunny",						// 30 Hot (am/pm)
	"sunny_night",				// 31 Cold (am/pm)
	"mist",						// 32 Windy (am/pm)
	// Night only Icons;
	"sunny_night",						// 33 Clear
	"cloudy1_night",				// 34 Mostly Clear
	"cloudy2_night",				// 35 Partly Cloudy
	"cloudy3_night",						// 36 Intermittent Clouds
	"cloudy4_night",						// 37 Hazy
	"cloudy5",						// 38 Mostly Cloudy
	"shower2_night",						// 39 Partly Cloudy with Showers
	"shower3_night",			 			// 40 Mostly Cloudy with Showers
	"tstorm1_night",						// 41 Partly Cloudy with Thunder Showers
	"tstorm2_night",						// 42 Mostly Cloudy with Thunder Showers
	"cloudy4_night",						// 43 Mostly Cloudy with Flurries
	"cloudy4_night"							// 44 Mostly Cloudy with Flurries
];function xml_loaded(request){if(request.responseXML){var adc_Database=findChild(request.responseXML,"adc_Database");var CurrentConditions=findChild(adc_Database,"CurrentConditions");var loc=tmp=dsc=icn="";loc=trimWhiteSpace(findChild(CurrentConditions,"City").firstChild.data.toString()).toLowerCase();temp="";if(gblObj.useRealFeel==1){temp=parseInt(findChild(CurrentConditions,"RealFeel").firstChild.data)}else{temp=parseInt(findChild(CurrentConditions,"Temperature").firstChild.data)}tmp=((gblObj.isCelcius==1)?convertTemp(temp):temp)+gblObj.deg;dsc=findChild(CurrentConditions,"WeatherText").firstChild.data.toLowerCase();icn="images/"+gblObj.iconSet+"/"+MiniIcons[parseInt(findChild(CurrentConditions,"WeatherIcon").firstChild.data,10)-1]+gblObj.iconExt;doweather(loc,tmp,dsc,icn);var nowtime=new Date();var nextupdate=new Date(nowtime.getTime()+(60000*gblObj.updateInterval));updateDB(loc,tmp,dsc,icn,nextupdate.getTime());var thefetch=setTimeout(function(){fetchWeatherCache(loc,tmp,dsc,icn,nextupdate.getTime(),gblObj.updateInterval)},60000*gblObj.updateInterval)}else{document.getElementById("location").innerHTML="XHR Error..."}}function convertTemp(num){return Math.round((num-32)*5/9)}