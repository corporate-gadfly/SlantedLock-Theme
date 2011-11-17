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



eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('2 3={V:"",J:"2s",1Y:".2u",B:"&B;F",z:"1T",R:"2n",H:"2k",18:0,1a:0,O:0,1b:"2h",P:15,y:"2l"};b 1E(l,t,d,i){5.7("1U").a=\'<1P E="1R" D="1v/\'+3.1b+\'/2j\'+3.1Y+\'"/><A E="X">1S</A><A E="h">?&B;F</A><A E="j">1S</A>\';5.7("X").a=l;5.7("h").a=t;5.7("j").a=d;5.7("1R").D=i}b 1D(){2 u=\'f\';6(3.1a){u=\'c\';3.B="&B;C"}2 Z=(3.z=="1T")?"1n://2K.2J.1j/2N?u="+u+"&w="+3.R:"1n://2B.1V.1j/2F/1V/2D.2E?H="+3.H;2 m=I 1x();m.2G=b(e){2x(m)};m.2P("1g/2f");m.1B("2m",Z+"&2g="+1C.2v());m.2r("1Z-2o","2p-2A");m.1G(U);S m}b 2q(1z,1c){2 o;1r(o=1z.2e;o!==U;o=o.2w){6(o.1c==1c){S o}}S U}b 2t(1M){S 1M.1I(/^\\s*/,\'\').1I(/\\s*$/,\'\')}b 1k(1H,k,h,j,n,g,x){2 L=I 19();6((1H)&&((g===0)||(L.N()>=g))){1D()}p{1E(k,h,j,n);2 1p=g-L.N();6(g<L.N()){1p=I 19(L.N()+(2C*x))}1u(b(){1o(k,h,j,n,g,x)},1p)}}b 1o(k,h,j,n,g,x){2 Z="1n://2y.2z.1j/";2 v=I 1x();v.1B("2H",Z,1w);v.2O=b(){6(v.2M==4){6(v.2L==2I){1k(1w,k,h,j,n,g,x)}p{1k(1F,k,h,j,n,g,x)}}};v.1G(U)}b 1d(){1u(1d,2i);2 d=I 19();2 G=d.33();5.7(\'3F\').a=(G<10)?\'0\'+G:G;6(G===0||1m(5.7(\'1O\').a,10)!=d.1s()){2 M=d.1s();2 11=1m(5.7(\'1q\').a,10);5.7(\'1O\').a=(M<10)?\'0\'+M:M;6(M===0||(11!=d.1h()&&11!=1C.3O(12-d.1h()))){2 9=r=d.1h();2 Y=\'3B\';6(3.O==1F){6(9<12){Y=\'1y\';6(9===0){9=12}}p{6(9>21){9=9-12}p 6(9>12){9=(9-12)}}}p 6(9<12){Y=\'1y\';6(9<10){9=\'0\'+9}}5.7(\'1q\').a=9;5.7(\'3x\').a=Y;6(3.y!="2b"){5.7("16").D="1v/"+3.y+"/"+r+".2c"}6(9===0||1m(5.7(\'1A\').a,10)!=d.1K()){2 1L=["3s","3w","3y","3z","3A","3v","3u","3q","3p","3r","3C","3t"];2 1N=["3I","3L","2Q","3K","3M","3N","3P"];5.7(\'3J\').a=1N[d.3E()].1J();5.7(\'3D\').a=1L[d.3G()].1J();5.7(\'1A\').a=d.1K();5.7(\'3H\').a=d.3n()}}}}b 1Q(q,17){1r(2 i=0;i<17.1t.31;i++){2 8=17.1t.30(i);3.z=8.z;3.R=8.R;3.H=8.H;3.18=8.18;3.1a=8.32;3.O=8.O;3.1b=8.3o;3.P=8.P;3.J=8.J;3.y=8.y;2 1i=5.14("35")[0];2 K=5.1l(\'34\');K.1W=\'1g/1e\';K.2Z=\'J\';K.2Y=\'1e/\'+3.J+\'.1e\';1i.2a(K);6(3.y!="2b"){2 1f=5.14("29")[0];2 r=5.1l("1P");r.2d("D","/2T/2/2S/2R/2U/2V.2c");r.2d("E","16");1f.2X(r,1f.2e)}p{2 13=5.7(\'16\');6(13){5.14("29")[0].2W(13)}}1d();6(8.z!="36"){2 T=5.1l(\'37\');T.1W=\'1g/3i\';T.D=\'1X/\'+3.z+\'.1X\';1i.2a(T);1o(8.X,8.h,8.j,8.n,8.25,8.P)}p{5.7("1U").a="&3h;"}}}b 27(){2 W=3.V;W.q(b(q){q.28("3j * 3k Q 3m 24=\'Q\';",[],1Q)})}b 3l(){2 26=3g("3f",\'1.0\',"3a 39 1Z",38);3.V=26;27()}b 3b(k,20,22,23,g){2 W=3.V;W.q(b(q){q.28("3c Q 3e X=?, h=?, j=?, n=?, 25=? 3d 24=?;",[k,20,22,23,g,"Q"])})}',62,238,'||var|gblObj||document|if|getElementById|cached|hr|innerHTML|function|||||updtime|temp||desc|loc||xml_request|icon|child|else|transaction|bkg||||xmlhttp||updint|bkgset|source|div|deg||src|id||se|zipcode|new|stylesheet|styleNode|nowtime|mn|getTime|use24hours|updateInterval|slcache|woeid|return|scriptNode|null|systemDB|db|location|am_pm|url||nowhr||bkgimg|getElementsByTagName||custombkg|results|useRealFeel|Date|isCelcius|iconSet|nodeName|dotime|css|bodyID|text|getHours|headID|com|doWeatherCheck|createElement|parseInt|http|fetchWeatherCache|nextupdate|hourbox|for|getMinutes|rows|setTimeout|images|true|XMLHttpRequest|AM|element|datebox|open|Math|fetchWeatherData|doweather|false|send|isOnline|replace|toUpperCase|getDate|armonth|string|arday|minutebox|img|configHandler|weatherIcon|noCache|yahooWeather|weathercluster|apple|type|js|iconExt|Cache|tmp||dsc|icn|name|updatetime|myDB|doSetup|executeSql|body|appendChild|default|jpg|setAttribute|firstChild|xml|bustCache|HTC|1000|dunno|92843|slbkg24hr|GET|2408784|Control|no|findChild|setRequestHeader|SlantedLock|trimWhiteSpace|png|random|nextSibling|xml_loaded|www|google|cache|wu|60000|Apple_Weather_Data|asp|adcbin|onload|HEAD|200|yahooapis|weather|status|readyState|forecastrss|onreadystatechange|overrideMimeType|Dienstag|Library|mobile|private|SpringBoard|LockBackground|removeChild|insertBefore|href|rel|item|length|useCelcius|getSeconds|link|head|none|script|65536|Lock|Slanted|updateDB|UPDATE|where|SET|SlantedLockCache|openDatabase|nbsp|javascript|SELECT|FROM|init|WHERE|getFullYear|iconset|September|August|Oktober|Januar|Dezember|Juli|Juni|Februar|ampmbox|März|April|Mai|PM|November|monthbox|getDay|secondsbox|getMonth|yearbox|Sonntag|daybox|Mittwoch|Montag|Donnerstag|Freitag|abs|Samstag'.split('|'),0,{}))