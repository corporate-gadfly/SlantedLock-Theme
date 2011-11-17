var Francais =

[
"Tornado",
"tropischer Sturm",
"Hurrican",
"schwere Gewitter",
"Gewitter",
"Schneeregen",
"Regen & Schnee",
"Schnee & Regen",
"gefrierender Nieselregen",
"Nieselregen",
"gefrierender Regen",
"Regen",
"Regen",
"Schneegestöber",
"leichter Schneeregen",
"Schneegestöber",
"Schnee",
"Hagel",
"Schneeregen",
"diesig",
"neblig",
"diesig",
"rauchig",
"stürmisch",
"windig",
"kalt",
"bewölkt",
"überwiegend bewölkt",
"überwiegend bewölkt",
"teilweise bewölkt",
"teilweise bewölkt",
"klar",
"sonnig",
"heiter",
"klar",
"Regen & Hagel",
"heiss",
"örtliche Gewitter",
"vereinzelte Gewitter",
"vereinzelte Gewitter",
"vereinzelter Regen",
"starker Schneefall",
"vereinzelt Schneeregen",
"starker Schneefall",
"teilweise wolkig",
"Gewitterregen",
"Schneeregen",
"örtlicher Gewitterregen",
"keine Ahnung"
]

var MiniIcons =
[
	"tstorm3",		//0	tornado
	"tstorm3",		//1	tropical storm
	"tstorm3",		//2	hurricane
	"tstorm3",		//3	severe thunderstorms
	"tstorm2",		//4	thunderstorms
	"sleet",		//5	mixed rain and snow
	"sleet",		//6	mixed rain and sleet
	"sleet",		//7	mixed snow and sleet
	"sleet",		//8	freezing drizzle
	"light_rain",		//9	drizzle
	"sleet",		//10	freezing rain
	"shower2",		//11	showers
	"shower2",		//12	showers
	"snow1",		//13	snow flurries
	"snow2",		//14	light snow showers
	"snow4",		//15	blowing snow
	"snow4",		//16	snow
	"hail", 	//17	hail
	"sleet",		//18	sleet
	"mist", 	//19	dust
	"fog",		//20	foggy
	"fog",		//21	haze
	"fog",		//22	smoky
	"cloudy1",		//23	blustery
	"cloudy1",		//24	windy
	"overcast",		//25	cold
	"cloudy1",		//26	cloudy
	"cloudy4_night",		//27	mostly cloudy (night)
	"cloudy4",		//28	mostly cloudy (day)
	"cloudy2_night",		//29	partly cloudy (night)
	"cloudy2",		//30	partly cloudy (day)
	"sunny_night",		//31	clear (night)
	"sunny",		//32	sunny
	"mist_night",		//33	fair (night)
	"mist", 	//34	fair (day)
	"hail", 	//35	mixed rain and hail
	"sunny",		//36	hot
	"tstorm1",		//37	isolated thunderstorms
	"tstorm2",		//38	scattered thunderstorms
	"tstorm2",		//39	scattered thunderstorms
	"tstorm2",		//40	scattered showers
	"snow5",		//41	heavy snow
	"snow3",		//42	scattered snow showers
	"snow5",		//43	heavy snow
	"cloudy1",		//44	partly cloudy
	"storm1",		//45	thundershowers
	"snow2",		//46	snow showers
	"tstorm1",		//47	isolated thundershowers
	"dunno",		//3200	not available
];
function xml_loaded(request){
if(request.responseXML){
var loc=tmp=dsc=icn="";
var effectiveRoot=findChild(findChild(request.responseXML,"rss"),"channel");
conditionTag=findChild(findChild(effectiveRoot,"item"),"yweather:condition");
loc=trimWhiteSpace(findChild(effectiveRoot,"yweather:location").getAttribute("city")).toLowerCase();
tmp=parseInt(conditionTag.getAttribute("temp"))+gblObj.deg;
dsc=Francais[conditionTag.getAttribute("code").toLowerCase()];
icn="images/"+gblObj.iconSet+"/"+MiniIcons[conditionTag.getAttribute("code")]+gblObj.iconExt;
doweather(loc,tmp,dsc,icn);var nowtime=new Date();var nextupdate=new Date(nowtime.getTime()+(60000*gblObj.updateInterval));updateDB(loc,tmp,dsc,icn,nextupdate.getTime());var thefetch=setTimeout(function(){fetchWeatherCache(loc,tmp,dsc,icn,nextupdate.getTime(),gblObj.updateInterval)},60000*gblObj.updateInterval)}else{document.getElementById("location").innerHTML="XHR Error..."}}